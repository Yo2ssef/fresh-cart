"use client";
import * as React from "react";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Heart,
  ShoppingCart,
  UserRound,
  Menu,
  Search,
  Headset,
  UserPlus,
  LogOut,
  LucideIdCard,
} from "lucide-react";
import { Input } from "../ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { cartCreatedContxt } from "@/Context/ContextCartProvider/ContextCartProvider";
import { getProductCard } from "../CardProudct/AddToCard/AddToCard.Action";

import { useSession, signOut } from "next-auth/react";
import AppBtn from "../shared/AppBtn/AppBtn";
import { Separator } from "../ui/separator";
import Link from "next/link";

export default function NavBtns() {
  const { data } = useSession();
  async function handleLogOut() {
    await signOut({ callbackUrl: "/" });
  }
  const { userCartCount, setUserCartCount } =
    React.useContext(cartCreatedContxt);

  React.useEffect(() => {
    getProductCard().then(({ numOfCartItems }) => {
      setUserCartCount(numOfCartItems);
    });
  }, [setUserCartCount]);

  return (
    <>
      {/* Search Input */}
      <div className="hidden lg:flex flex-1 justify-center px-4 lg:px-6">
        <div className="w-full max-w-150 flex items-center rounded-full border border-green-500/50 bg-white p-1 focus-within:border-green-500 focus-within:ring-4 focus-within:ring-green-500/10 transition-all shadow-sm">
          <Input
            type="text"
            placeholder="Search for products, brands and more..."
            className="flex-1 border-0 shadow-none focus-visible:ring-0 bg-transparent px-4 font-normal text-[15px] text-slate-700 placeholder:text-slate-400/90"
          />
          <AppBtn
            type="button"
            size="icon"
            className="bg-green-600 hover:bg-green-800 transition-colors text-white w-10 h-10 rounded-full shrink-0"
          >
            <Search className="w-5 h-5 absolute" />
          </AppBtn>
        </div>
      </div>

      <NavigationMenuList>
        {/* mobile nav */}

        <NavigationMenuItem className="flex lg:hidden mx-3">
          <NavigationMenuLink
            asChild
            className={`${navigationMenuTriggerStyle()} transition-all me-3 fill-gray-500 text-gray-500 hover:text-green-600 hover:bg-gray-100 py-5 px-3`}
          >
            <Link
              href="/wishlist"
              className="relative inline-flex items-center justify-center"
            >
              <Heart className="size-6" strokeWidth={2.5} />
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink
            asChild
            className={`${navigationMenuTriggerStyle()} transition-all me-3 fill-gray-500 text-gray-500 hover:text-green-600 hover:bg-gray-100 py-5 px-3`}
          >
            <Link
              href="/cart"
              className="relative inline-flex items-center justify-center"
            >
              <ShoppingCart className="size-6" strokeWidth={2.5} />
              {userCartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-[11px] font-bold text-white">
                  {userCartCount}
                </span>
              )}
            </Link>
          </NavigationMenuLink>

          <Sheet>
            <SheetTrigger asChild className="flex lg:hidden">
              <span className="cursor-pointer hover:bg-gray-100 p-2 rounded-md flex items-center justify-center">
                <Menu className="size-6 text-gray-500" />
              </span>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="grid flex-1 auto-rows-min gap-2 py-7 px-2">
                <div className="grid gap-1">
                  <Link
                    href="/"
                    className="w-full cursor-pointer flex items-center p-3 rounded-xl hover:bg-green-50 hover:text-green-600 font-medium text-gray-700 transition-colors"
                  >
                    Home
                  </Link>
                </div>
                <div className="grid gap-1">
                  <Link
                    href="/shop"
                    className="w-full cursor-pointer flex items-center p-3 rounded-xl hover:bg-green-50 hover:text-green-600 font-medium text-gray-700 transition-colors"
                  >
                    Shop
                  </Link>
                </div>
                <div className="grid gap-1">
                  <Link
                    href="/allcategories"
                    className="w-full cursor-pointer flex items-center p-3 rounded-xl hover:bg-green-50 hover:text-green-600 font-medium text-gray-700 transition-colors"
                  >
                    Categories
                  </Link>
                </div>
                <div className="grid gap-1">
                  <Link
                    href="/brands"
                    className="w-full cursor-pointer flex items-center p-3 rounded-xl hover:bg-green-50 hover:text-green-600 font-medium text-gray-700 transition-colors"
                  >
                    Brands
                  </Link>
                </div>
                <div className="grid gap-1">
                  <Link
                    href="/contact"
                    className="w-full cursor-pointer flex items-center p-3 rounded-xl hover:bg-green-50 hover:text-green-600 font-medium text-gray-700 transition-colors"
                  >
                    Support
                  </Link>
                </div>
                <div className="grid gap-1 mt-3 pt-3 border-t border-gray-100">
                  {data?.user ? (
                    <>
                      <Link
                        href="/profile"
                        className="w-full cursor-pointer flex items-center p-3 rounded-xl hover:bg-green-50 hover:text-green-600 font-medium text-gray-700 transition-colors"
                      >
                        <UserRound className="mr-3 w-5 h-5" /> Profile
                      </Link>

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <AppBtn className="p-3 w-full bg-transparent cursor-pointer flex items-center justify-start text-red-600 font-medium hover:bg-red-50 hover:text-red-700! focus:bg-red-50 rounded-xl transition-all h-auto">
                            <LogOut className="mr-3 w-5 h-5" /> Log Out
                          </AppBtn>
                        </AlertDialogTrigger>
                        <AlertDialogContent
                          size=""
                          className="w-full lg:w-1/3 p-15 rounded-2xl"
                        >
                          <AlertDialogHeader>
                            <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                              <LogOut />
                            </AlertDialogMedia>
                            <AlertDialogTitle className="text-xl font-bold">
                              Log Out?
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-base text-muted-foreground">
                              Are you sure you want to log out?
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter className="grid w-full grid-cols-2 gap-3 sm:grid sm:grid-cols-2 sm:gap-3">
                            <AlertDialogCancel
                              variant="secondary"
                              className="border-0 cursor-pointer hover:bg-gray-200!"
                            >
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                              variant="destructive"
                              className="cursor-pointer"
                              onClick={handleLogOut}
                            >
                              Log Out
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="w-full cursor-pointer flex items-center p-3 rounded-xl hover:bg-green-50 hover:text-green-600 font-medium text-gray-700 transition-colors"
                      >
                        <UserRound className="mr-3 w-5 h-5" /> Login
                      </Link>
                      <Link
                        href="/register"
                        className="w-full cursor-pointer flex items-center p-3 rounded-xl hover:bg-green-50 hover:text-green-600 font-medium text-gray-700 transition-colors"
                      >
                        <UserPlus className="mr-3 w-5 h-5" /> Register
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </NavigationMenuItem>

        {/* list items in left part */}

        <NavigationMenuList className="hidden lg:flex gap-1.5">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} text-gray-700 hover:text-green-600 hover:bg-transparent`}
            >
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} text-gray-700 hover:text-green-600 hover:bg-transparent`}
            >
              <Link href="/shop">Shop</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-gray-700 hover:text-green-600 hover:bg-transparent">
              Categories
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-100 gap-2 md:w-70 lg:grid-cols-2 lg:w-35">
                <li>
                  <NavigationMenuLink
                    asChild
                    className={`${navigationMenuTriggerStyle()} text-gray-700 hover:text-green-600 hover:bg-green-100/30`}
                  >
                    <Link href="/allcategories">All Categories</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} text-gray-700 hover:text-green-600 hover:bg-transparent`}
            >
              <Link href="/brands">Brands</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} hover:bg-transparent px-1`}
            >
              <Link href="/contact" className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 shrink-0">
                  <Headset className="size-6 text-emerald-600" />
                </div>
                <div className="flex flex-col text-left py-1">
                  <span className="text-[13px] font-medium text-slate-400 leading-tight">
                    Support
                  </span>
                  <span className="text-sm font-semibold text-slate-800 leading-tight">
                    24/7 Help
                  </span>
                </div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator orientation="vertical" />
          <NavigationMenuItem className="border-gray-300">
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()}  text-gray-500 hover:text-green-600 hover:bg-gray-100 py-5 px-2`}
            >
              <Link href="/wishlist">
                <Heart className="size-6" strokeWidth={3} />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()}  transition-all fill-gray-500 text-gray-500 hover:text-green-600 hover:bg-gray-100 py-5 px-3`}
            >
              <Link
                href="/cart"
                className="relative inline-flex items-center justify-center"
              >
                <ShoppingCart className="size-6" strokeWidth={2.5} />
                {userCartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-[11px] font-bold text-white">
                    {userCartCount}
                  </span>
                )}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {data?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span className="cursor-pointer hover:bg-gray-100 p-2 rounded-full">
                  <LucideIdCard className="text-gray-500 size-8 hover:text-green-600" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()}  hover:bg-green-700`}
              >
                <Link href="/login" className="text-white bg-green-600">
                  <UserRound /> Login
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>

      </NavigationMenuList>
    </>
  );
}

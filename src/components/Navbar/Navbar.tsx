import Link from "next/link";
import {
  NavigationMenu,
  // NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import logo from "@images/logo.svg";
import Image from "next/image";
import { UserRound, Truck, Gift, Phone, Mail, UserPlus } from "lucide-react";
import { Separator } from "../ui/separator";

import NavBtns from "../NavBtns/NavBtns";

import { nextAuthOptions } from "@/lib/configs/next-auth-config";
import { getServerSession } from "next-auth";
import BtnLoginOut from "../BtnLoginOut/BtnLoginOut";

export default async function NavigationMenuDemo() {
  const session = await getServerSession(nextAuthOptions);

  return (
    <>
      {/* Topbar */}
      <section className="hidden lg:flex bg-white py-2 border-b border-gray-200 text-sm font-semibold text-gray-500 justify-between items-center px-4 lg:px-8">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-green-600" /> Free Shipping on Orders
            500 EGP
          </span>
          <span className="flex items-center gap-1.5">
            <Gift className="w-4 h-4 text-green-600" /> New Arrivals Daily
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:+18001234567"
            className="flex items-center gap-1.5 hover:text-green-600 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" /> +1 (800) 123-4567
          </a>
          <a
            href="mailto:support@freshcart.com"
            className="flex items-center gap-1.5 hover:text-green-600 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" /> support@freshcart.com
          </a>
          <Separator orientation="vertical" />

          {session ? (
            <>
              <Link
                href="/profile"
                className="flex items-center gap-1.5 hover:text-green-600 transition-colors"
              >
                <UserRound className="w-4 h-4" /> {session.user.name}
              </Link>

              <BtnLoginOut />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="flex items-center gap-1.5 hover:text-green-600 transition-colors"
              >
                <UserRound className="w-3.5 h-3.5" /> Login
              </Link>
              <Link
                href="/register"
                className="flex items-center gap-1. transition-colors hover:text-green-600"
              >
                <UserPlus className="w-3.5 h-3.5" /> Register
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm ps-3 lg:ps-0">
        <div className="container mx-auto py-4">
          <NavigationMenu
            className="max-w-none justify-between"
            viewport={false}
          >
            {/* logo imag */}

            <Link href="/">
              <Image alt="Fresh Cart Logo" src={logo} loading="eager" />
            </Link>

            <NavBtns />
          </NavigationMenu>
        </div>
      </nav>
    </>
  );
}

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className,
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";

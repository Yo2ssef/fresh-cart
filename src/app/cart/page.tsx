export const dynamic = 'force-dynamic';
import { BreCrumCard } from "@/components/BreCrumCard/BreCrumCard";
import CardCartProduct from "@/components/CardCartProduct/CardCartProduct";
import { ProductItemData } from "./cart.types";
import { getProductCard } from "@/components/CardProudct/AddToCard/AddToCard.Action";
import AppBtn from "@/components/shared/AppBtn/AppBtn";
import { Separator } from "@/components/ui/separator";
import {
  ShoppingCart,
  ShoppingBag,
  Truck,
  Tag,
  Lock,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  PackageOpenIcon,
} from "lucide-react";
import Link from "next/link";
import BtnDeleteAllItemsCard from "@/components/CardCartProduct/BtnDeleteAllItemsCard/BtnDeleteAllItemsCard";

export default async function page() {
  const {
    // cartId,
    data: {
      products,
      //  _id,
      totalCartPrice,
    },
    numOfCartItems,
  } = await getProductCard();
  return (
    <>
      {products && products.length > 0 ? (
        <section className="mt-10">
          <div className="container mx-auto px-4 lg:px-8 ">
            <BreCrumCard />
            <section className="flex flex-col gap-2 mb-6">
              <h2 className="flex items-center gap-2">
                <span className="text-white p-2 rounded-2xl bg-linear-to-br from-[#169F49] to-[#15843F]">
                  <ShoppingCart fill="#FFFFFF" size={35} />
                </span>
                <span className="text-3xl font-bold">Shopping Cart</span>
              </h2>
              <p className="m-0 text-gray-700 font-semibold">
                You have{" "}
                <span className="text-green-600">{numOfCartItems} items</span>{" "}
                in your cart
              </p>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <section className="lg:col-span-8">
                <div className=" flex flex-col gap-5">
                  {products.map((e: ProductItemData) => {
                    return <CardCartProduct products={e} key={e.product._id} />;
                  })}
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  <Separator className="border-t border-dashed border-gray-200" />
                  <div className="flex justify-between items-center text-sm sm:text-base font-medium">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-1.5 text-green-600 hover:text-green-800 transition-colors font-normal"
                    >
                      ← Continue Shopping
                    </Link>
                    <BtnDeleteAllItemsCard />
                  </div>
                </div>
              </section>

              <section className="lg:col-span-4 lg:self-start lg:sticky lg:top-24">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="bg-linear-to-r from-[#16A24A] to-[#15813D] p-6 text-white text-left">
                    <h3 className="flex items-center gap-2 text-xl font-bold mb-1">
                      <ShoppingBag size={24} />
                      Order Summary
                    </h3>
                    <p className="text-green-50 text-sm font-medium">
                      {numOfCartItems} items in your cart
                    </p>
                  </div>

                  <div className="p-6 flex flex-col gap-6">
                    <div className="bg-[#F0FDF4] rounded-xl p-4 flex items-center gap-4">
                      <div className="bg-[#DCFCE7] p-2 rounded-full text-green-700">
                        <Truck size={20} className="text-[#166534]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-800 text-sm">
                          Free Shipping!
                        </h4>
                        <p className="text-green-600 text-sm font-medium">
                          You qualify for free delivery
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 text-gray-600 font-semibold">
                      <div className="flex justify-between items-center">
                        <span>Subtotal</span>
                        <span className="text-gray-900">
                          {totalCartPrice} EGP
                        </span>
                      </div>
                      {/* <div className="flex justify-between items-center">
                      <span>Shipping</span>
                      <span className="text-green-600 font-bold">FREE</span>
                    </div> */}
                    </div>

                    <Separator className="border-t border-dashed border-gray-200" />

                    <div className="flex justify-between items-end">
                      <span className="text-gray-900 font-bold text-lg">
                        Total
                      </span>
                      <span className="text-gray-900 font-bold text-2xl">
                        {totalCartPrice}{" "}
                        <span className="text-sm text-gray-500 font-medium">
                          EGP
                        </span>
                      </span>
                    </div>

                    <AppBtn className="flex items-center justify-center gap-2 w-full py-3 h-12 rounded-lg border border-dashed border-gray-300 text-gray-600 hover:bg-transparent hover:text-green-600 hover:border-green-600 transition-colors bg-white font-semibold">
                      <Tag
                        size={18}
                        className="text-gray-500 hover:text-green-600!"
                      />
                      Apply Promo Code
                    </AppBtn>

                    <Link
                      href="/cart/checkout"
                      className="flex items-center justify-center h-14 gap-2 w-full py-4 rounded-lg bg-linear-to-br from-[#169F49] to-[#15843F] hover:from-green-900 hover:to-green-950 text-white font-bold transition-all shadow-md group"
                    >
                      <Lock size={18} className="group-hover:text-white" />
                      Secure Checkout
                    </Link>

                    <div className="flex items-center justify-center gap-4 text-xs font-medium text-gray-500 mt-2">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck size={16} className="text-green-600" />
                        Secure Payment
                      </span>
                      <span className="w-px h-4 bg-gray-300"></span>
                      <span className="flex items-center gap-1.5">
                        <Truck size={16} className="text-blue-600" />
                        Fast Delivery
                      </span>
                    </div>
                    <div className="text-center mt-4">
                      <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
                      >
                        <ArrowLeft size={16} />
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </section>
      ) : (
        <section className="my-10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col items-center justify-center py-20 px-4 mt-6">
              <div className="w-35 h-35 bg-gray-500/7 rounded-full flex items-center justify-center mb-6">
                <PackageOpenIcon size={70} className="text-gray-500/95 " />
              </div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-3">
                Your cart is empty
              </h2>
              <p className="text-gray-500 text-center font-medium max-w-sm mb-8 leading-relaxed">
                Looks like you haven&apos;t added anything to your cart yet.
                Start exploring our products!
              </p>
              <Link
                href="/"
                className="bg-green-600 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center gap-2 mb-12 shadow-sm"
              >
                Start Shopping <ArrowRight size={18} />
              </Link>

              <div className="w-full max-w-md border-t border-gray-100 pt-8 flex flex-col items-center">
                <span className="text-sm text-gray-400 mb-6 font-medium">
                  Popular Categories
                </span>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Electronics", "Fashion", "Home", "Beauty"].map((e) => (
                    <Link
                      key={e}
                      href="/"
                      className="px-5 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-green-600 hover:text-green-600 hover:bg-green-50 transition-all text-sm font-medium"
                    >
                      {e}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

import type { Metadata } from "next";
import { PackageOpen } from "lucide-react";
import Link from "next/link";
import { getAllProducts } from "../mainPage.services";
import CardProduct from "@/components/CardProudct/CardProudct";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse our complete collection of fresh groceries and daily essentials. High-quality products with the best prices at Fresh Cart.",
  keywords: [
    "online grocery",
    "fresh products",
    "shop all",
    "Fresh Cart inventory",
  ],
  openGraph: {
    title: "Full Product Catalog | Fresh Cart",
    description:
      "Explore our wide range of products and find everything you need in one place.",
    url: "https://freshcart-youssef.vercel.app/shop",
    images: [
      {
        url: "/image/home-slider.png",
        width: 1200,
        height: 630,
        alt: "Fresh Cart Products",
      },
    ],
  },
};

export default async function page() {
  const allProducts = await getAllProducts();

  return (
    <>
      <section className="w-full bg-linear-to-r from-green-500 to-green-600 py-10 lg:py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-emerald-50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-medium">All Products</span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm shadow-inner shrink-0">
              <PackageOpen className="h-8 w-8 text-white stroke-2" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">
                All Products
              </h1>
              <p className="text-emerald-50 text-base">
                Explore our complete product collection
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 ">
          {allProducts?.map((e) => {
            return <CardProduct key={e._id} prop={e} />;
          })}
        </div>
      </section>
    </>
  );
}

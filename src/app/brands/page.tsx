import { getAllBrands } from "./brands.services";
import Link from "next/link";
import { Tag, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Brand } from "../mainPage.interface";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Brands",
  description: "Shop from our exclusive collection of top global brands. Find your favorite products from trusted manufacturers at Fresh Cart.",
  
  openGraph: {
    title: "Brands | Fresh Cart",
    description: "Discover all the premium brands available at Fresh Cart. Quality products from names you trust.",
    url: "https://freshcart-youssef.vercel.app/brands",
    images: [
      {
        url: "/image/home-slider.png", 
        width: 1200,
        height: 630,
        alt: "Fresh Cart Brands",
      },
    ],
  },

  keywords: ["official brands", "premium brands", "shop by brand", "Fresh Cart partners"],
};
export default async function page() {
  const allbrand: Brand[] | undefined = await getAllBrands();
  return (
    <section>
      <section className="flex flex-col gap-6 p-8 md:p-12 bg-linear-to-br from-[#8027FE] to-[#BC76FF] text-white">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="opacity-80 text-gray-300 hover:text-white!">
            Home
          </Link>
          <span className="opacity-80">/</span>
          <span className="font-bold">Brands</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-md border border-white/20 bg-white/20 backdrop-blur-md">
            <Tag className="h-8 w-8 text-white fill-white/10" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold tracking-tight">Top Brands</h1>
            <p className="text-sm font-medium opacity-90 mt-1">
              Shop from your favorite brands
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {allbrand?.map((e: Brand) => (
            <Link
              href={`brandsproduct/${e?._id}`}
              key={e?._id}
              className="group flex flex-col items-center p-4 rounded-3xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(128,39,254,0.12)] hover:border-[#8027FE]/20 cursor-pointer"
            >
              <div className="w-full aspect-square bg-slate-50 rounded-2xl flex items-center justify-center p-6 transition-colors duration-300 mb-4">
                <div className="w-full h-full bg-white flex items-center justify-center font-extrabold text-3xl text-black">
                  <Image
                    src={e?.image}
                    alt={e?.name}
                    width={100}
                    height={100}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center w-full pb-2 min-h-11">
                <span className="text-lg font-bold text-gray-700 transition-colors duration-300 group-hover:text-[#8027FE]">
                  {e?.name}
                </span>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 opacity-0 group-hover:opacity-100 w-full">
                  <div className="overflow-hidden flex items-center justify-center gap-1 text-sm font-semibold text-[#8027FE] pt-1">
                    View Products <ArrowRight className="w-4 h-4 ml-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}

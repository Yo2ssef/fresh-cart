import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Filter, Tag, X } from "lucide-react";
import { getBrandProducts } from "../brandsproduct.services";
import { BrandData } from "../brandsproduct.interface";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brandId: string }>;
}): Promise<Metadata> {
  const { brandId } = await params;
  const brand: BrandData | undefined = await getBrandProducts(brandId);

  return {
    title: brand?.name || "Brand Products",
    description: `Shop the latest ${brand?.name} products at Fresh Cart. Best quality and fast delivery.`,
    openGraph: {
      title: `${brand?.name} | Fresh Cart`,
      description: `Explore the full collection of ${brand?.name} items.`,
      url: `https://freshcart-youssef.vercel.app/brandsproduct/${brandId}`,
      images: [
        {
          url: brand?.image || "/image/home-slider.png",
          width: 1200,
          height: 630,
          alt: brand?.name,
        },
      ],
    },
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ brandId: string }>;
}) {
  const { brandId } = await params;
  const allbrand: BrandData | undefined = await getBrandProducts(brandId);

  return (
    <>
      <section className="w-full bg-linear-to-r from-green-500 to-green-600 py-10 lg:py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-emerald-50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/brands" className="hover:text-white transition-colors">
              Brands
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{allbrand?.name}</span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm shadow-inner shrink-0">
              <Image
                src={allbrand?.image || ""}
                alt={allbrand?.name || "brand image"}
                width={50}
                height={50}
                className="rounded-md"
              />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">
                {allbrand?.name}
              </h1>
              <p className="text-emerald-50 text-base">
                Shop {allbrand?.name} products
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-6">
        <section className="flex flex-wrap items-center gap-4 mt-5 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-slate-700" />
            <span className="font-medium text-slate-700">Active Filters:</span>
          </div>

          <Link
            href="/shop"
            className="hover:bg-violet-200 transition-colors flex items-center gap-2 px-4 py-1.5 bg-violet-100 rounded-full"
          >
            <Tag className="w-4 h-4 text-violet-700" />
            <span className="text-violet-700 text-sm font-medium">
              {allbrand?.name}
            </span>
            <span className="text-violet-700 hover:text-violet-900 transition-colors ml-1">
              <X className="w-4 h-4" />
            </span>
          </Link>

          <Link
            href="/brands"
            className="text-gray-500 underline underline-offset-4 text-sm font-medium hover:text-slate-800 transition-colors"
          >
            Clear all
          </Link>
        </section>

        <section>
          <h3 className="text-md font-medium text-slate-700">
            Showing all products for {allbrand?.name}
          </h3>
        </section>
      </section>
    </>
  );
}

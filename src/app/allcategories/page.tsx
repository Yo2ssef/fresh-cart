import Image from "next/image";
import { getAllCategories } from "@/components/CategorySection/categories.services";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Category",
  description: "Browse our wide range of fresh product categories. From fresh vegetables to daily essentials, find everything you need at Fresh Cart.",
  
  openGraph: {
    title: "All Categories | Fresh Cart",
    description: "Explore all our shopping categories and find the best deals on fresh products.",
    url: "https://freshcart-youssef.vercel.app/allcategories",
    images: [
      {
        url: "/image/home-slider.png", 
        width: 1200,
        height: 630,
        alt: "Fresh Cart Categories",
      },
    ],
  },

  keywords: ["grocery categories", "fresh food online", "shop by department", "Fresh Cart products"],
};
export default async function page() {
  const allCategories = await getAllCategories();
  

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 px-1.5 md:px-10 lg:px-20 my-10">
      {allCategories?.map((e) => (
        <Link
          href={`/categories/${e._id}`}
          key={e._id}
          className="group bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] text-center px-4 py-6 sm:px-6 sm:py-8 rounded-3xl transform transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(0,173,10,0.15)] flex flex-col items-center justify-between"
        >
          <div className="relative mx-auto w-full h-32 sm:h-48 mb-4 sm:mb-6">
            <Image
              src={e.image}
              alt={e.name}
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          <h1 className="text-md sm:text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-[#0aad0a]">
            {e.name}
          </h1>

          <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-12 group-hover:opacity-100 group-hover:mt-2">
            <span className="text-[#0aad0a] font-medium text-sm sm:text-base flex items-center justify-center gap-1">
              View Subcategories &rarr;
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}

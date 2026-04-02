
import Link from "next/link";
import { getOneCategories } from "../categories.services";
import Image from "next/image";

export default async function page({ params }: { params: Promise<{ idCategory: string }> }) {
  const { idCategory } = await params;
  const { name, image } = await getOneCategories(idCategory);

  return (
    <>
      <section className="w-full bg-linear-to-r from-green-500 to-green-600 py-10 lg:py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-emerald-50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/allcategories"
              className="hover:text-white transition-colors"
            >
              Categories
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{name}</span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm shadow-inner shrink-0">
              <Image
                src={image}
                alt={name}
                width={40}
                height={30}
                className="rounded-md"
              />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">
                {name}
              </h1>
              <p className="text-emerald-50 text-base">
                Choose a subcategory to browse products
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 "></div>
      </section>
    </>
  );
}

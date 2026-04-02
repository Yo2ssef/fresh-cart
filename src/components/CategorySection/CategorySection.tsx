import Image from "next/image";
import { getAllCategories } from "./categories.services";
import Link from "next/link";

export default async function CategorySection() {
  const allCategories = await getAllCategories();
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 my-10">
      {allCategories?.map((e) => (
        <Link
          href={`/categories/${e._id}`}
          key={e._id}
          className="bg-white shadow text-center p-2 rounded-lg transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
        >
          <div className="relative mx-auto h-25 w-25">
            <Image
              src={e.image}
              alt={e.name}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover rounded-full"
            />
          </div>

          <h2 className="mt-2 font-medium text-gray-800">{e.name}</h2>
        </Link>
      ))}
    </section>
  );
}

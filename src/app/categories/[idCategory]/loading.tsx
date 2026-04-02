import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="w-full bg-linear-to-r from-green-500 to-green-600 py-10 lg:py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            {/* Breadcrumb Skeleton */}
            <Skeleton className="h-4 w-48 bg-emerald-400/50 rounded-md" />
          </div>

          <div className="flex items-center gap-5">
            {/* Image Box Skeleton */}
            <Skeleton className="h-16 w-16 rounded-2xl bg-emerald-400/50 shrink-0" />
            <div>
              {/* Title Skeleton */}
              <Skeleton className="h-10 w-48 lg:w-64 bg-emerald-400/50 rounded-lg mb-3" />
              {/* Description Skeleton */}
              <Skeleton className="h-5 w-64 lg:w-80 bg-emerald-400/50 rounded-md" />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-10">
        {/* Placeholder grid for category products/subcategories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-[2rem] border border-gray-100 p-4 shadow-xs"
            >
              <Skeleton className="w-full h-48 rounded-2xl" />
              <Skeleton className="h-5 w-3/4 mt-4" />
              <Skeleton className="h-4 w-1/2 mt-1" />
              <div className="flex justify-between items-center mt-6">
                <Skeleton className="h-7 w-1/3" />
                <Skeleton className="h-10 w-10 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

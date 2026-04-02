import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="animate-in fade-in duration-500">
      {/* Header Section */}
      <section className="flex flex-col gap-6 p-8 md:p-12 bg-linear-to-br from-[#8027FE] to-[#BC76FF]">
        <div className="flex items-center gap-2">
          {/* Breadcrumb Skeleton */}
          <Skeleton className="h-4 w-32 bg-white/30 rounded-md" />
        </div>

        <div className="flex items-center gap-5">
          {/* Icon Box Skeleton */}
          <Skeleton className="h-16 w-16 rounded-2xl bg-white/20 shrink-0" />
          <div className="flex flex-col">
            {/* Title Skeleton */}
            <Skeleton className="h-10 w-48 bg-white/30 rounded-lg" />
            {/* Description Skeleton */}
            <Skeleton className="h-5 w-64 bg-white/30 rounded-md mt-3" />
          </div>
        </div>
      </section>

      {/* Brands Grid Section */}
      <section className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="group flex flex-col items-center p-4 rounded-3xl border border-gray-100 bg-white shadow-xs"
            >
              {/* Image Area Skeleton */}
              <div className="w-full aspect-square bg-slate-50 rounded-2xl flex items-center justify-center p-4 mb-4">
                <Skeleton className="w-full h-full rounded-xl bg-gray-200/60" />
              </div>

              {/* Brand Name Text Skeleton */}
              <div className="flex flex-col items-center justify-center w-full pb-2 min-h-[44px]">
                <Skeleton className="h-6 w-2/3 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

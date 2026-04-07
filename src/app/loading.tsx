import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="animate-in fade-in duration-500">
      {/* header section */}
      <header className="bg-white">
        <Skeleton className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-none" />
      </header>

      {/* features section */}
      <section className="bg-gray-50/70 py-7 w-full border-b border-gray-100">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5 p-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-32 w-full rounded-2xl" />
          ))}
        </div>
      </section>

      <section className="container mx-auto mt-4">
        {/* Category Section */}
        <div className="flex items-center gap-3 px-7 pt-10 pb-4">
          <Skeleton className="h-8 w-1.5 rounded-full bg-emerald-200" />
          <Skeleton className="h-8 w-64 rounded-md" />
        </div>

        <div className="px-7 py-4 overflow-hidden grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-4 shrink-0">
              <Skeleton className="w-28 h-28 rounded-full" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </div>

        {/* Deals Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-7 overflow-hidden mt-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton key={i} className="h-64 lg:h-85 w-full rounded-3xl" />
          ))}
        </section>

        {/* Product Section */}
        <section className="p-7 lg:p-10 mt-2">
          <div className="flex items-center gap-3 mb-10">
            <Skeleton className="h-8 w-1.5 rounded-full bg-emerald-200" />
            <Skeleton className="h-8 w-64 rounded-md" />
          </div>
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
      </section>

      {/* Newsletter App Section */}
      <section className="container mx-auto px-4 lg:px-8 py-10 mb-12">
        <Skeleton className="w-full h-150 lg:h-105 rounded-[2.5rem]" />
      </section>
    </div>
  );
}

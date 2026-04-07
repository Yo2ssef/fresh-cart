import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="container mx-auto px-4 py-12 animate-in fade-in duration-500">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Skeleton className="h-4 w-32" />
        </div>

        <div className="flex items-center gap-4">
          <Skeleton className="w-16 h-16 rounded-2xl bg-red-100 shrink-0" />
          <div className="flex flex-col justify-center">
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </div>

      <div className="border-2 border-gray-200/50 rounded-2xl overflow-hidden bg-white">
        {/* Table Header Mock */}
        <div className="bg-gray-100 flex items-center p-4 border-b border-gray-200">
          <div className="flex-2">
            <Skeleton className="h-5 w-20" />
          </div>
          <div className="flex-1 hidden sm:block">
            <Skeleton className="h-5 w-16" />
          </div>
          <div className="flex-1 hidden md:block">
            <Skeleton className="h-5 w-16" />
          </div>
          <div className="flex-1 flex justify-end">
            <Skeleton className="h-5 w-20" />
          </div>
        </div>

        {/* Table Body Mock Rows */}
        <div className="flex flex-col">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center p-4 border-b border-gray-100 last:border-0 gap-4 sm:gap-0"
            >
              {/* Product Info */}
              <div className="flex-2 flex items-center gap-4">
                <Skeleton className="w-20 h-20 rounded-2xl shrink-0" />
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-5 w-32 lg:w-48" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
              
              {/* Price */}
              <div className="flex-1 hidden sm:block">
                <Skeleton className="h-5 w-20 mb-1" />
                <Skeleton className="h-4 w-16" />
              </div>

              {/* Status */}
              <div className="flex-1 hidden md:block">
                <Skeleton className="h-6 w-24 rounded-full" />
              </div>

              {/* Actions */}
              <div className="flex-1 flex items-center justify-end gap-3">
                <Skeleton className="h-10 w-full sm:w-32 rounded-lg" />
                <Skeleton className="h-10 w-10 shrink-0 rounded-lg bg-red-100" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-5 w-32" />
      </div>
    </section>
  );
}

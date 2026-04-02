import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
  return (
    <section className="mt-10 animate-in fade-in duration-500">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Breadcrumb Skeleton */}
        <Skeleton className="h-4 w-48 mb-6" />

        <section className="flex flex-col gap-2 mb-6">
          <h2 className="flex items-center gap-3">
            <Skeleton className="h-12 w-12 rounded-2xl bg-emerald-100" />
            <Skeleton className="h-10 w-64" />
          </h2>
          <Skeleton className="h-5 w-48 mt-1" />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Cart Items List */}
          <section className="lg:col-span-8">
            <div className="flex flex-col gap-5">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row gap-4 p-4 rounded-3xl border border-gray-100 shadow-xs bg-white"
                >
                  <Skeleton className="w-full sm:w-32 h-32 rounded-2xl shrink-0 bg-gray-100" />
                  <div className="flex flex-col justify-between flex-1 py-1 gap-4 sm:gap-0">
                    <div>
                      <Skeleton className="h-6 w-full sm:w-3/4 mb-3" />
                      <Skeleton className="h-5 w-1/3" />
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <Skeleton className="h-10 w-28 rounded-xl" />
                      <Skeleton className="h-6 w-24" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <Separator className="border-t border-dashed border-gray-200" />
              <div className="flex justify-between items-center">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-10 w-32 rounded-lg" />
              </div>
            </div>
          </section>

          {/* Right Column: Order Summary */}
          <section className="lg:col-span-4 lg:self-start lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xs overflow-hidden">
              <div className="bg-emerald-500/20 p-6">
                <Skeleton className="h-8 w-48 mb-2 bg-emerald-500/40" />
                <Skeleton className="h-4 w-32 bg-emerald-500/30" />
              </div>

              <div className="p-6 flex flex-col gap-6">
                <Skeleton className="h-16 w-full rounded-2xl bg-emerald-50" />

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-5 w-24" />
                  </div>
                </div>

                <Separator className="border-t border-dashed border-gray-200" />

                <div className="flex justify-between items-end">
                  <Skeleton className="h-7 w-16" />
                  <Skeleton className="h-8 w-32" />
                </div>

                <Skeleton className="h-12 w-full rounded-xl" />
                <Skeleton className="h-14 w-full rounded-xl bg-emerald-500/20" />

                <div className="flex items-center justify-center gap-4 mt-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-24" />
                </div>
                
                <div className="text-center mt-4 flex justify-center">
                  <Skeleton className="h-5 w-40" />
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}

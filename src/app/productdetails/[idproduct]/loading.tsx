import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
  return (
    <section className="animate-in fade-in duration-500">
      <div className="container p-6 mx-auto">
        {/* Breadcrumb Skeleton */}
        <Skeleton className="h-4 w-64 mb-6" />

        <div className="grid grid-cols-12 gap-5">
          {/* Left Column: Images */}
          <div className="col-span-12 lg:col-span-3 rounded-2xl shadow p-4 flex flex-col gap-4 lg:sticky lg:top-24 h-fit bg-white">
            {/* Main Image */}
            <Skeleton className="w-full aspect-square rounded-2xl bg-gray-100" />
            
            {/* Thumbnails */}
            <div className="flex gap-2 overflow-hidden pb-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="min-w-20 w-20 h-20 rounded-lg bg-gray-100 shrink-0" />
              ))}
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="col-span-12 lg:col-span-9 rounded-2xl shadow p-5 flex flex-col gap-5 bg-white">
            {/* Category & Brand Badges */}
            <div className="flex gap-2">
              <Skeleton className="h-10 w-24 rounded-full" />
              <Skeleton className="h-10 w-20 rounded-full" />
            </div>

            {/* Title */}
            <Skeleton className="h-10 w-full lg:w-3/4" />

            {/* Ratings */}
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-24" />
            </div>

            {/* Price */}
            <Skeleton className="h-10 w-40" />

            {/* In Stock Badge */}
            <Skeleton className="h-10 w-28 rounded-full" />

            <Separator className="my-1" />

            {/* Description */}
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[80%]" />
            </div>

            {/* Quantity */}
            <div className="flex flex-col gap-2 mt-2">
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-4 w-12" />
            </div>

            {/* Total Price Box */}
            <Skeleton className="h-20 w-full rounded-2xl" />

            {/* Action Buttons 1 */}
            <div className="grid grid-cols-12 gap-2">
              <Skeleton className="col-span-12 lg:col-span-6 h-14 rounded-xl" />
              <Skeleton className="col-span-12 lg:col-span-6 h-14 rounded-xl" />
            </div>

            {/* Action Buttons 2 */}
            <div className="grid grid-cols-12 gap-2">
              <Skeleton className="col-span-11 h-14 rounded-lg" />
              <Skeleton className="col-span-1 h-14 rounded-lg" />
            </div>

            <Separator className="my-1" />

            {/* Features (Delivery, Return, Payment) */}
            <div className="flex flex-wrap lg:grid lg:grid-cols-12 gap-4 justify-center">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="w-[calc(50%-0.5rem)] lg:w-auto lg:col-span-4 flex items-center gap-3">
                  <Skeleton className="h-14 w-14 rounded-lg shrink-0" />
                  <div className="flex flex-col gap-1.5 w-full">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

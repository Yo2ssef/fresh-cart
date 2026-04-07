import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { LucidePackage2, Star, Truck } from "lucide-react";

export default function Loading() {
  return (
    <>
      <section className="animate-in fade-in duration-500">
        <div className="container p-6 mx-auto">
          {/* Breadcrumb Skeleton */}
          <div className="flex gap-2 items-center mb-6">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-32" />
          </div>

          <div className="grid grid-cols-12 gap-5">
            {/* Left Column: Images */}
            <div className="col-span-12 lg:col-span-3 rounded-2xl shadow p-4 flex flex-col gap-4 lg:sticky lg:top-24 h-fit bg-white">
              <div className="bg-white rounded-2xl p-4 flex justify-center items-center w-full aspect-square relative">
                <Skeleton className="w-full h-full rounded-xl bg-gray-100" />
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="relative min-w-20 w-20 h-20 bg-white border border-gray-100 rounded-lg overflow-hidden shrink-0">
                     <Skeleton className="w-full h-full rounded-lg bg-gray-100" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Product Details */}
            <div className="col-span-12 lg:col-span-9 rounded-2xl shadow p-5 flex flex-col gap-4.5 bg-white">
              {/* Category & Brand Badges */}
              <div className="flex gap-1.5">
                <Skeleton className="h-11 w-24 rounded-full" />
                <Skeleton className="h-11 w-20 rounded-full" />
              </div>

              {/* Title */}
              <Skeleton className="h-9 w-full lg:w-3/4" />

              {/* Ratings */}
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-1">
                   {Array.from({ length: 5 }).map((_, i) => (
                      <Skeleton key={i} className="h-4.25 w-4.25 rounded-full" />
                   ))}
                </div>
                <div className="flex gap-0.5 items-center text-gray-600">
                  <Skeleton className="h-5 w-32" />
                </div>
              </div>

              {/* Price */}
              <div className="flex gap-1.5 items-center">
                 <Skeleton className="h-10 w-28" />
                 <Skeleton className="h-6 w-16" />
              </div>

              {/* In Stock Badge */}
              <div className="w-27.5">
                 <Skeleton className="h-11 w-full rounded-full" />
              </div>

              <Separator />

              {/* Description */}
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
              </div>

              {/* Quantity */}
              <div>
                <h4 className="text-gray-700 font-bold flex items-center gap-2">
                  Quantity <Skeleton className="h-8 w-10 inline-block" /> Available
                </h4>
              </div>

              {/* Total Price Box */}
              <div className="bg-green-50/60 flex justify-between items-center py-5 px-3 rounded-2xl">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-8 w-32" />
              </div>

              {/* Action Buttons 1 */}
              <div className="grid grid-cols-12 gap-2">
                <Skeleton className="col-span-12 lg:col-span-6 h-14 rounded-xl" />
                <Skeleton className="col-span-12 lg:col-span-6 h-14 rounded-xl" />
              </div>

              {/* Action Buttons 2 */}
              <div className="grid grid-cols-12 gap-2">
                <Skeleton className="col-span-12 h-19 rounded-lg" />
              </div>

              <Separator />

              {/* Features (Delivery, Return, Payment) */}
              <div className="flex flex-wrap lg:grid lg:grid-cols-12 gap-4 justify-center">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="w-[calc(50%-0.5rem)] lg:w-auto lg:col-span-4 flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left gap-2 mx-auto lg:mx-0">
                    <Skeleton className="w-13 h-13 rounded-lg shrink-0" />
                    <div className="flex flex-col gap-1.5 w-full items-center lg:items-start">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Tabs Section Skeleton */}
          <div className="my-7">
            <div className="flex flex-wrap w-full border-b border-gray-200">
              <div className="flex items-center gap-2 px-4 py-2 border-b-2 border-green-600 bg-green-50/50">
                 <LucidePackage2 className="text-green-700 w-5 h-5" />
                 <span className="text-green-700 font-medium text-sm">Product Details</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 text-gray-400">
                 <Star className="text-gray-400 w-5 h-5" />
                 <span className="text-sm">Reviews</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 text-gray-400">
                 <Truck className="text-gray-400 w-5 h-5" />
                 <span className="text-sm">Shipping & Returns</span>
              </div>
            </div>
            
            <div className="p-6">
              <Skeleton className="h-7 w-48 mb-3" />
              <div className="flex flex-col gap-2 mb-6">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-[60%]" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <Skeleton className="h-6 w-40 mb-6" />
                  <div className="flex flex-col gap-4">
                     <div className="flex justify-between"><Skeleton className="h-4 w-20" /><Skeleton className="h-4 w-24" /></div>
                     <div className="flex justify-between"><Skeleton className="h-4 w-20" /><Skeleton className="h-4 w-24" /></div>
                     <div className="flex justify-between"><Skeleton className="h-4 w-20" /><Skeleton className="h-4 w-24" /></div>
                     <div className="flex justify-between"><Skeleton className="h-4 w-20" /><Skeleton className="h-4 w-24" /></div>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                   <Skeleton className="h-6 w-32 mb-6" />
                   <ul className="flex flex-col gap-4">
                     <li className="flex gap-2 items-center"><Skeleton className="w-5 h-5 rounded-full shrink-0" /> <Skeleton className="h-4 w-[80%]" /></li>
                     <li className="flex gap-2 items-center"><Skeleton className="w-5 h-5 rounded-full shrink-0" /> <Skeleton className="h-4 w-[75%]" /></li>
                     <li className="flex gap-2 items-center"><Skeleton className="w-5 h-5 rounded-full shrink-0" /> <Skeleton className="h-4 w-[85%]" /></li>
                     <li className="flex gap-2 items-center"><Skeleton className="w-5 h-5 rounded-full shrink-0" /> <Skeleton className="h-4 w-[60%]" /></li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
          
          <Separator />
        </div>
      </section>
    </>
  );
}

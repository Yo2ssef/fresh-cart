import { Skeleton } from "@/components/ui/skeleton";
import { ReceiptText, ArrowLeft, Home, Wallet, ShoppingBag, Info, ShieldCheck, Truck, Package } from "lucide-react";

export default function Loading() {
  return (
    <section className="container mx-auto px-4 lg:px-8 animate-in fade-in duration-500">
      <section className="flex flex-col gap-6 py-8">
        {/* Breadcrumb */}
        <div className="flex gap-2 items-center">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-20" />
        </div>

        {/* Header section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-green-600 rounded-xl p-3 flex items-center justify-center shrink-0 shadow-sm">
              <ReceiptText className="text-white w-7 h-7" />
            </div>
             <div className="flex flex-col gap-2">
               <Skeleton className="h-7 w-48" />
               <Skeleton className="h-4 w-64" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Cart</span>
          </div>
        </div>
      </section>
      
      {/* FormCashOrder Skeleton */}
       <section className="grid grid-cols-1 lg:grid-cols-12 gap-3 pb-8">
        <section className="lg:col-span-8">
          <div className="w-full lg:max-w-3xl pb-12">
            
            {/* Address Card */}
            <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm">
              {/* Header */}
              <div className="bg-green-700 p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Home className="w-5 h-5" />
                  <Skeleton className="w-32 h-5 bg-green-600/50" />
                </div>
                <div className="ml-7">
                  <Skeleton className="w-48 h-3 bg-green-600/50" />
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col gap-6">
                {/* Info Alert */}
                <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex items-start gap-3 mt-2">
                  <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5 fill-blue-50" />
                  <div className="flex flex-col gap-1.5 w-full">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-64" />
                  </div>
                </div>

                {/* Form fields */}
                <div className="flex flex-col gap-5 mt-2">
                  <div className="flex flex-col gap-5">
                     {/* Field 1 */}
                     <div className="flex flex-col gap-2">
                       <Skeleton className="h-4 w-28" />
                       <Skeleton className="h-12 w-full rounded-lg" />
                     </div>
                     {/* Field 2 */}
                     <div className="flex flex-col gap-2">
                       <Skeleton className="h-4 w-28" />
                       <Skeleton className="h-12 w-full rounded-lg" />
                     </div>
                     {/* Field 3 */}
                     <div className="flex flex-col gap-2">
                       <Skeleton className="h-4 w-24" />
                       <Skeleton className="h-12 w-full rounded-lg" />
                     </div>
                     {/* Field 4 */}
                     <div className="flex flex-col gap-2">
                       <Skeleton className="h-4 w-24" />
                       <Skeleton className="h-12 w-full rounded-lg" />
                     </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm mt-8">
              {/* Header */}
              <div className="bg-green-700 p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Wallet className="w-5 h-5" />
                  <Skeleton className="w-32 h-5 bg-green-600/50" />
                </div>
                <div className="ml-7">
                   <Skeleton className="w-48 h-3 bg-green-600/50" />
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col gap-4">
                 <Skeleton className="h-[84px] w-full rounded-xl" />
                 <Skeleton className="h-[84px] w-full rounded-xl" />
                 <div className="bg-green-50/50 border border-green-100/60 rounded-xl p-4 flex items-center gap-3 mt-1">
                  <div className="w-8 h-8 rounded-full bg-green-100/80 flex items-center justify-center text-green-600 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-1.5 w-full">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-64" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:col-span-4">
          <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm lg:sticky lg:top-24">
            {/* Header */}
            <div className="bg-green-700 p-5 text-white">
              <div className="flex items-center gap-2 mb-2">
                <ShoppingBag className="w-5 h-5" />
                <Skeleton className="w-32 h-5 bg-green-600/50" />
              </div>
              <div className="ml-7">
                  <Skeleton className="w-16 h-3 bg-green-600/50" />
              </div>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col pt-6">
              {/* Items Skeleton */}
              <div className="flex flex-col gap-4">
                {Array.from({ length: 3 }).map((_, i) => (
                   <div key={i} className="flex gap-3">
                     <Skeleton className="h-[73px] w-[73px] rounded-xl shrink-0" />
                     <div className="flex flex-col justify-center gap-2 flex-1">
                       <Skeleton className="h-4 w-3/4" />
                       <Skeleton className="h-3 w-1/2" />
                       <div className="flex justify-between">
                         <Skeleton className="h-4 w-12" />
                         <Skeleton className="h-4 w-16" />
                       </div>
                     </div>
                   </div>
                ))}
              </div>

              {/* Calculations */}
              <div className="flex flex-col gap-3 mt-6">
                <div className="flex justify-between items-center border-t border-gray-100 pt-6">
                  <Skeleton className="w-16 h-4" />
                  <Skeleton className="w-20 h-4" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 flex items-center gap-1.5 text-sm">
                    <Truck className="w-4 h-4" /> Shipping
                  </span>
                  <Skeleton className="w-12 h-4" />
                </div>
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              {/* Total */}
              <div className="flex justify-between items-center">
                 <Skeleton className="w-12 h-6" />
                 <Skeleton className="w-24 h-6" />
              </div>

              {/* Button */}
              <Skeleton className="w-full h-[52px] rounded-xl mt-6" />

              {/* Features line */}
              <div className="flex items-center justify-center gap-3 mt-6 text-[11px] font-medium text-gray-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                  Secure
                </div>
                <div className="w-px h-3 bg-gray-200"></div>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-blue-500" />
                  Fast Delivery
                </div>
                <div className="w-px h-3 bg-gray-200"></div>
                <div className="flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-orange-500" />
                  Easy Returns
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

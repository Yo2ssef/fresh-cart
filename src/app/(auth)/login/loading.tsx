import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="container mx-auto py-10 px-4 sm:px-6 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
        {/* Left Side: Marketing Info Skeleton */}
        <section className="flex flex-col items-center justify-center space-y-8 lg:pe-10">
          <div className="w-full bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <Skeleton className="w-full h-64 md:h-[350px] rounded-none bg-gray-100" />
          </div>

          <div className="text-center space-y-4 w-full flex flex-col items-center">
            <Skeleton className="h-8 w-3/4 lg:w-4/5" />
            <Skeleton className="h-4 w-5/6 max-w-lg mt-2" />
            <Skeleton className="h-4 w-3/4 max-w-sm" />
          </div>

          {/* Features Inline Skeletons */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton className="w-4 h-4 rounded-full bg-emerald-100" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </div>
        </section>

        {/* Right Side: Login Form Box Skeleton */}
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-10 flex flex-col justify-center min-h-[500px]">
          <div className="flex justify-center">
            <Skeleton className="h-10 w-48" />
          </div>
          <div className="flex justify-center mt-6 mb-3">
            <Skeleton className="h-8 w-64" />
          </div>
          <div className="flex justify-center mb-8">
            <Skeleton className="h-4 w-56" />
          </div>
          
          <div className="space-y-6 text-left w-full mt-2">
            {/* Email Field Skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>
            
            {/* Password Field Skeleton */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                 <Skeleton className="h-4 w-20" />
                 <Skeleton className="h-3 w-28" />
              </div>
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>
            
            {/* Submit Button Skeleton */}
            <Skeleton className="h-14 w-full rounded-xl mt-8 bg-emerald-500/20" />
            
            {/* Footer Text Skeleton */}
            <div className="flex justify-center mt-6">
              <Skeleton className="h-4 w-64" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

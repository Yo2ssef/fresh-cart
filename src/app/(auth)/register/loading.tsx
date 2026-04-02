import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="container mx-auto py-14 px-4 sm:px-6 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 max-w-6xl mx-auto">
        {/* Left Side: Features & Testimonials */}
        <section className="flex flex-col justify-center space-y-10 lg:pe-10">
          <div>
            {/* Title */}
            <Skeleton className="h-10 lg:h-12 w-4/5 lg:w-3/4 mb-5" />
            {/* Subtitle */}
            <div className="space-y-2">
              <Skeleton className="h-5 w-full max-w-md" />
              <Skeleton className="h-5 w-3/4 max-w-md" />
            </div>
          </div>

          <div className="space-y-6">
            {/* Feature Skeletons */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex gap-4 items-start">
                <Skeleton className="h-12 w-12 shrink-0 rounded-full bg-emerald-100" />
                <div className="pt-1 text-left w-full">
                  <Skeleton className="h-5 w-32 mb-2.5" />
                  <Skeleton className="h-4 w-48 lg:w-64" />
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Card Skeleton */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 lg:mr-8 mt-4">
            <div className="flex items-center gap-3 mb-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div>
                <Skeleton className="h-4 w-28 mb-2" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
            <div className="space-y-2">
              <Skeleton className="h-3.5 w-full" />
              <Skeleton className="h-3.5 w-[90%]" />
              <Skeleton className="h-3.5 w-1/3" />
            </div>
          </div>
        </section>

        {/* Right Side: Register Form Box Skeleton */}
        <section className="bg-white rounded-2xl shadow-lg px-8 py-10 flex flex-col justify-center border border-gray-100">
          <div className="flex justify-center mb-4">
            <Skeleton className="h-10 w-64" />
          </div>
          <div className="flex justify-center mb-8">
            <Skeleton className="h-5 w-72" />
          </div>

          <div className="space-y-5 text-left w-full">
            {/* Form Input Fields */}
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>
            ))}

            {/* Checkbox Placeholder / Submit Area */}
            <Skeleton className="h-14 w-full rounded-xl mt-8 bg-emerald-500/20" />

            {/* Footer Text Skeleton */}
            <div className="flex justify-center mt-6">
              <Skeleton className="h-4 w-60" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

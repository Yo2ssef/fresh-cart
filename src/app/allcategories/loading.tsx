import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 px-1.5 md:px-10 lg:px-20 my-10 animate-in fade-in duration-500">
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] px-4 py-6 sm:px-6 sm:py-8 rounded-3xl flex flex-col items-center justify-between"
        >
          {/* Category Image Area Skeleton */}
          <div className="w-full h-32 sm:h-48 mb-4 sm:mb-6">
            <Skeleton className="w-full h-full rounded-2xl bg-gray-100" />
          </div>

          {/* Category Name Text Skeleton */}
          <div className="w-full flex justify-center mt-auto">
            <Skeleton className="h-6 w-full max-w-[80%] rounded-md" />
          </div>
        </div>
      ))}
    </section>
  );
}

import Link from "next/link";
import AppBtn from "@/components/shared/AppBtn/AppBtn";
import { ArrowLeft, ShoppingBag } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-20 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50">
        <span className="text-4xl font-black text-emerald-600">404</span>
      </div>

      <h2 className="mb-4 text-3xl lg:text-5xl font-bold tracking-tight text-slate-900">
        Page Not <span className="text-emerald-600">Found</span>
      </h2>

      <p className="mb-8 max-w-md text-base lg:text-lg text-slate-500">
        Looks like this page went out of stock! Don&apos;t worry, there&apos;s plenty more
        fresh content to explore.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <AppBtn
          asChild
          className="rounded-full bg-emerald-600 px-8 hover:bg-emerald-700"
        >
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Go to Home
          </Link>
        </AppBtn>

        <AppBtn
          asChild
          variant="outline"
          className="rounded-full border-emerald-200 text-emerald-700 px-8 hover:bg-emerald-50 hover:text-emerald-800"
        >
          <Link href="/shop" className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" /> Continue Shopping
          </Link>
        </AppBtn>
      </div>
    </div>
  );
}

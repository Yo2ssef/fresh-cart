export const dynamic = 'force-dynamic';
import { getProductCard } from "@/components/CardProudct/AddToCard/AddToCard.Action";
import {
  ReceiptText,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import FormCashOrder from "./FormCashOrder"

export default async function page() {
  const data = await getProductCard();
  return (
    <section className="container mx-auto px-4 lg:px-8">
      <section className="flex flex-col gap-6 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/cart" className="hover:text-gray-900 transition-colors">
            Cart
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Checkout</span>
        </div>

        {/* Header section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-green-600 rounded-xl p-3 flex items-center justify-center shrink-0 shadow-sm">
              <ReceiptText className="text-white w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gray-900">
                Complete Your Order
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Review your items and complete your purchase
              </p>
            </div>
          </div>

          <Link
            href="/cart"
            className="flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cart
          </Link>
        </div>
      </section>
      <FormCashOrder data={data} />
    </section>
  );
}

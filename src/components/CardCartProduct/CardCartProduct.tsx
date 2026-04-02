import { Check } from "lucide-react";
import Image from "next/image";
import { ProductItemProps } from "@/app/cart/cart.types";
import BtnDeleteOneItem from "./BtnDeleteOneItem/BtnDeleteOneItem";
import BtnCardMoreOrless from "../BtnCardMoreOrless/BtnCardMoreOrless";

export default function CardCartProduct({ products }: ProductItemProps) {
  const { count, price, product } = products;
  const {
    title,
    id,
    category: { name },
    imageCover,
    slug,
  } = product;

  const deleteOneItem = { id, slug };

  return (
    <div className="bg-white rounded-2xl p-3 flex flex-col sm:flex-row gap-6 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,0,0,0.12)] group">
      <div className="flex flex-col gap-3 items-center sm:items-start">
        <div className="bg-white rounded-2xl border border-gray-100 w-full sm:w-36 h-40 flex items-center justify-center p-3 overflow-hidden group/image relative">
          <Image
            src={imageCover}
            alt="Product Image"
            width={200}
            height={200}
            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover/image:scale-110"
          />
        </div>
        <div className="w-full flex justify-center">
          <span className="bg-green-500 text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center justify-center gap-1 shadow-sm w-fit">
            <Check size={12} strokeWidth={3} /> In Stock
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between py-1">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-[#0f172a] hover:text-green-600 transition-colors line-clamp-2 pr-8">
            {title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 font-medium pb-2">
            <span className="bg-green-200/25 text-green-700 px-2.5 py-1 rounded-lg text-[11px] tracking-wide">
              {name}
            </span>
            <span className="text-gray-300 px-1">•</span>
            <span className="text-[13px] tracking-wide">SKU: 5CA090</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-semibold text-green-600 tracking-tight">
              {price} EGP
            </span>
            <span className="text-xs text-gray-400 font-medium">per unit</span>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap sm:flex-nowrap gap-4 items-center justify-between">
          <div className="flex items-center gap-1 p-1 bg-gray-200/20 border border-gray-200 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <BtnCardMoreOrless infoDet={{ id, count }} />
          </div>

          <div className="flex items-center gap-5 sm:gap-6 mt-4 sm:mt-0 ml-auto sm:ml-0">
            <div className="text-right flex flex-col justify-end">
              <span className="text-xs text-gray-400 font-medium leading-none mb-1.5">
                Total
              </span>
              <span className="font-extrabold text-xl text-gray-900 leading-none tracking-tight">
                {price * count}{" "}
                <span className="text-sm text-gray-500 font-medium">EGP</span>
              </span>
            </div>
            <BtnDeleteOneItem prop={deleteOneItem} />
          </div>
        </div>
      </div>
    </div>
  );
}

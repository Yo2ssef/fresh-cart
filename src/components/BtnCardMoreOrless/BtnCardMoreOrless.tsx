"use client";
import { LoaderIcon, Minus, Plus } from "lucide-react";
import AppBtn from "../shared/AppBtn/AppBtn";
import { Input } from "../ui/input";
import { handleMoreOrLess } from "./BtnCardMoreOrless.Action";
import { toast } from "react-toastify";
import { useState } from "react";
export default function BtnCardMoreOrless({
  infoDet,
}: {
  infoDet: { id: string; count: number };
}) {
  const { id, count } = infoDet;
  const [getLoading, setLoading] = useState(false);

  async function handleDecreaseOrIncrease(count: number) {
    setLoading(true);
    try {
      await toast.promise(handleMoreOrLess(count, id), {
        pending: `${count > infoDet.count ? "Increasing" : "Decreasing"} Quantity...`,
        success: {
          render({ data: { message } }) {
            return message;
          },
        },
        error: {
          render({ data }) {
            console.log(data);
            return "Sorry SomeThing Wrong";
          },
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Sorry SomeThing Wrong Please Try Again");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative flex items-center gap-2">
      {getLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-white/50 backdrop-blur-[1.5px]">
          <LoaderIcon
            role="status"
            aria-label="Loading"
            className="size-6 animate-spin"
            size={16}
            strokeWidth={2.5}
          />
        </div>
      )}
      <AppBtn
        disabled={getLoading}
        onClick={() => {
          handleDecreaseOrIncrease(count - 1);
        }}
        className="size-9 flex justify-center items-center text-black bg-white border border-gray-200 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Minus size={16} strokeWidth={2.5} />
      </AppBtn>
      <Input
        type="text"
        value={count}
        readOnly
        className="w-9 border-0 bg-transparent flex justify-center text-center items-center rounded-lg font-bold text-gray-900 text-[15px]"
      />
      <AppBtn
        disabled={getLoading}
        onClick={() => {
          handleDecreaseOrIncrease(count + 1);
        }}
        className="size-9 flex justify-center items-center bg-green-600  rounded-lg hover:bg-green-700 transition-colors shadow-sm"
      >
        <Plus size={16} strokeWidth={2.5} />
      </AppBtn>
    </div>
  );
}

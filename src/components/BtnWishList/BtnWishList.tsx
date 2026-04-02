"use client";
import { Heart } from "lucide-react";
import AppBtn from "../shared/AppBtn/AppBtn";
import {
  addToWishList,
  removeFromWishList,
} from "@/app/wishlist/wishlist.services";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function BtnWishList({
  idWishList,
  data,
}: {
  idWishList: string;
  data: { id: string; [key: string]: unknown }[];
}) {
  const [isWishList, setIsWishList] = useState(() => {
    return data && Array.isArray(data)
      ? data.some((e: { id: string }) => e.id === idWishList)
      : false;
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setIsWishList(data.some((e: { id: string }) => e.id === idWishList));
    }
  }, [data, idWishList]);

  async function handleToggleWishList() {
    const previousState = isWishList;
    setIsWishList(!previousState);
    setLoading(true);

    try {
      if (previousState) {
        await toast.promise(removeFromWishList(idWishList), {
          pending: "Removing from WishList...",
          success: {
            render({ data: { message } }) {
              return message || "Removed successfully";
            },
          },
          error: "Sorry, something went wrong",
        });
      } else {
        await toast.promise(addToWishList(idWishList), {
          pending: "Adding to WishList...",
          success: {
            render({ data: { message } }) {
              return message || "Added successfully";
            },
          },
          error: "Sorry, something went wrong",
        });
      }
    } catch (error) {
      console.error(error);
      setIsWishList(previousState);
      toast.error("Sorry, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <AppBtn
        onClick={handleToggleWishList}
        disabled={loading}
        className={`shadow w-4 bg-transparent h-6 hover:bg-transparent transition-colors ${
          isWishList
            ? "text-red-600 hover:text-red-700"
            : "text-gray-600 hover:text-red-600"
        }`}
      >
        <Heart
          className="size-4"
          strokeWidth={2.5}
          fill={isWishList ? "currentColor" : "transparent"}
        />
      </AppBtn>
    </>
  );
}

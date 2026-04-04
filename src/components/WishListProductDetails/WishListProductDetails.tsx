"use client";
import { Heart, Loader } from "lucide-react";
import AppBtn from "../shared/AppBtn/AppBtn";
import {
  addToWishList,
  removeFromWishList,
} from "@/app/wishlist/wishlist.services";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function WishListProductDetails({
  idProduct,
  dataUser,
}: {
  idProduct: string;
  dataUser: { id: string; [key: string]: unknown }[];
}) {
  const [isWishList, setIsWishList] = useState(() => {
    return dataUser && Array.isArray(dataUser)
      ? dataUser.some((e: { id: string }) => e.id === idProduct)
      : false;
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (dataUser && Array.isArray(dataUser)) {
      setIsWishList(dataUser.some((e: { id: string }) => e.id === idProduct));
    }
  }, [dataUser, idProduct]);

  async function handleToggleWishList() {
    const previousState = isWishList;
    setIsWishList(!previousState);
    setLoading(true);

    try {
      if (previousState) {
        await toast.promise(removeFromWishList(idProduct), {
          pending: "Removing from WishList...",
          success: {
            render({ data: { message } }) {
              return message || "Removed successfully";
            },
          },
          error: "Sorry, something went wrong",
        });
      } else {
        await toast.promise(addToWishList(idProduct), {
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
  const { data } = useSession();

  return (
    <>
      {data?.user ? (
        <AppBtn
          variant="outline"
          onClick={handleToggleWishList}
          disabled={loading}
          className={`col-span-12 flex items-center justify-center gap-2 rounded-lg py-6 border-2 text-md transition-all duration-300 ease-in-out shadow-md ${
            loading
              ? "border-green-500 text-green-500 bg-white shadow-green-500/30"
              : isWishList
                ? "border-red-200 bg-white text-red-600 hover:bg-red-100 hover:border-red-300 hover:text-red-600 shadow-red-500/30"
                : "border-gray-200 text-gray-700 hover:bg-white bg-white hover:text-green-500 hover:border-green-500 shadow-gray-300/50 hover:shadow-green-500/30"
          }`}
        >
          {loading ? (
            <Loader className="size-5 animate-spin" />
          ) : (
            <Heart
              className="size-5"
              strokeWidth={2.5}
              fill={isWishList ? "currentColor" : "transparent"}
            />
          )}
          {isWishList && !loading ? "In Wishlist" : "Add to Wishlist"}
        </AppBtn>
      ) : (
        <Link
          href="/login"
          className="col-span-12 flex items-center justify-center gap-2 rounded-lg py-4 border-2 text-md transition-all duration-300 ease-in-out shadow-md border-gray-200 text-gray-700 hover:bg-white bg-white hover:text-green-500 hover:border-green-500 shadow-gray-300/50 hover:shadow-green-500/30"
        >
          <Heart className="size-5" strokeWidth={2.5} />
          Add to Wishlist
        </Link>
      )}
    </>
  );
}

"use client";
import AppBtn from "@/components/shared/AppBtn/AppBtn";
import { LoaderIcon, ShoppingCart } from "lucide-react";

import { toast } from "react-toastify";
import React, { useState } from "react";
import { cartCreatedContxt } from "@/Context/ContextCartProvider/ContextCartProvider";
import { handleActionAddToCard } from "../CardProudct/AddToCard/AddToCard.Action";
export default function AddToCardFromWishList({
  idProduct,
}: {
  idProduct: string;
}) {
  const { setUserCartCount } = React.useContext(cartCreatedContxt);
  const [getLoading, setLoading] = useState(false);

  async function addToCard() {
    setLoading(true);
    try {
      await toast.promise(handleActionAddToCard(idProduct), {
        pending: "Added To Card...",
        success: {
          render({ data: allData }) {
            const {
              message,
              numOfCartItems,
              // data: { cartOwner, products, totalCartPrice, _id },
            } = allData;
            setTimeout(() => {
              setUserCartCount(numOfCartItems);
            }, 0);
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
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <AppBtn
        onClick={addToCard}
        disabled={getLoading}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 h-auto text-sm font-medium rounded-lg inline-flex items-center gap-2"
      >
        {getLoading ? (
          <LoaderIcon
            role="status"
            aria-label="Loading"
            className="size-6 animate-spin"
          />
        ) : (
          <>
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </>
        )}
      </AppBtn>
    </>
  );
}

"use client";
import AppBtn from "@/components/shared/AppBtn/AppBtn";
import { LoaderIcon, ShoppingCart } from "lucide-react";

import { toast } from "react-toastify";
import React, { useState } from "react";
import { cartCreatedContxt } from "@/Context/ContextCartProvider/ContextCartProvider";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { handleActionAddToCard } from "../CardProudct/AddToCard/AddToCard.Action";
export default function BtnAddToCardProductDet({
  idProduct,
}: {
  idProduct: string;
}) {
  const { setUserCartCount } = React.useContext(cartCreatedContxt);
  const [getLoading, setLoading] = useState(false);
  const { data } = useSession();

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
      {data?.user ? (
        <AppBtn
          onClick={addToCard}
          disabled={getLoading}
          className="bg-green-600 hover:bg-green-800 col-span-12 lg:col-span-6 rounded-xl h-14 text-lg"
        >
          {getLoading ? (
            <LoaderIcon
              role="status"
              aria-label="Loading"
              className="size-6 animate-spin"
            />
          ) : (
            <>
              <ShoppingCart className="size-6" />
              Add to Cart
            </>
          )}
        </AppBtn>
      ) : (
        <Link
          href="/login"
           className="bg-green-600 flex justify-center items-center text-white hover:bg-green-800 col-span-12 lg:col-span-6 rounded-xl h-14 text-lg"
        >
          <ShoppingCart className="size-6" />
              Add to Cart
        </Link>
      )}
    </>
  );
}

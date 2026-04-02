"use client";
import AppBtn from "@/components/shared/AppBtn/AppBtn";
import { LoaderIcon, Plus } from "lucide-react";
import { handleActionAddToCard } from "./AddToCard.Action";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { cartCreatedContxt } from "@/Context/ContextCartProvider/ContextCartProvider";
import { useSession } from "next-auth/react";
import Link from "next/link";
export default function BtnAddToCard({
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
          className="py-4.5 px-2.5 hover:bg-green-800 bg-green-600 text-white cursor-pointer w-full"
        >
          {getLoading ? (
            <LoaderIcon
              role="status"
              aria-label="Loading"
              className="size-6 animate-spin"
            />
          ) : (
            <Plus className="size-6" />
          )}
        </AppBtn>
      ) : (
        <Link
          href="/login"
          className="py-1.5 rounded-full hover:bg-green-800 bg-green-600 text-white cursor-pointer w-full flex justify-center items-center"
        >
          <Plus className="size-6" />
        </Link>
      )}
    </>
  );
}

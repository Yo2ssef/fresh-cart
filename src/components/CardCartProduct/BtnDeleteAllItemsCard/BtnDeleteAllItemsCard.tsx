"use client";
import { LoaderIcon, Trash2 } from "lucide-react";
import AppBtn from "../../shared/AppBtn/AppBtn";
import { handleDelteAllItems } from "./DeleteAllItems.action";
import { toast } from "react-toastify";
import { cartCreatedContxt } from "@/Context/ContextCartProvider/ContextCartProvider";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { ShoppingCart } from "lucide-react";
export default function BtnDeleteAllItemsCard() {
  const { setUserCartCount } = React.useContext(cartCreatedContxt);
  const [getLoading, setLoading] = useState(false);

  async function DeleteAllProdcut() {
    setLoading(true);
    try {
      await toast.promise(handleDelteAllItems(), {
        pending: "Remove One Card...",
        success: {
          render({ data: { message } }) {
            setTimeout(() => {
              setUserCartCount(0);
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
      toast.error("Sorry SomeThing Wrong Please Try Again");
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <AppBtn
            disabled={getLoading}
            className="cursor-pointer inline-flex bg-transparent hover:bg-transparent items-center gap-1.5 text-gray-400 hover:text-red-500 transition-colors group"
          >
            {getLoading ? (
              <LoaderIcon
                role="status"
                aria-label="Loading"
                className="size-6 animate-spin"
              />
            ) : (
              <Trash2 className="size-5 transition-transform duration-300 group-hover:scale-125" />
            )}
            Clear all items
          </AppBtn>
        </AlertDialogTrigger>
        <AlertDialogContent
        size=""
          className="w-full lg:w-1/3 p-15 rounded-2xl"
        >
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
              <ShoppingCart />
            </AlertDialogMedia>
            <AlertDialogTitle className="text-xl font-bold">
              Clear Your Cart?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base text-muted-foreground">
              All items will be removed from your cart. This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="grid w-full grid-cols-2 gap-3 sm:grid sm:grid-cols-2 sm:gap-3">
            <AlertDialogCancel
              variant="secondary"
              className="border-0 cursor-pointer hover:bg-gray-200!"
            >
              Keep Shopping
            </AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              className="cursor-pointer"
              onClick={DeleteAllProdcut}
            >
              Yes, Clear All
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

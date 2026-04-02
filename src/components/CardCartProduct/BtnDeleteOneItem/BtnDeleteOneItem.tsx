"use client";
import AppBtn from "@/components/shared/AppBtn/AppBtn";
import { LoaderIcon, Trash2 } from "lucide-react";
import { handleDelteOneItem } from "./DeleteOneItems.action";
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

export default function BtnDeleteOneItem({
  prop: { id, slug },
}: {
  prop: {
    id: string;
    slug: string;
  };
}) {
  const { setUserCartCount } = React.useContext(cartCreatedContxt);
  const [getLoading, setLoading] = useState(false);
  async function DeleteOneProdcut() {
    setLoading(true);
    try {
      await toast.promise(handleDelteOneItem(id), {
        pending: `Remove ${name} Card...`,
        success: {
          render({ data: { message, numOfCartItems } }) {
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
            className="cursor-pointer w-12 h-12 flex justify-center items-center rounded-xl bg-red-50 text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-[0_4px_12px_rgba(239,68,68,0.25)] group/btn"
          >
            {getLoading ? (
              <LoaderIcon
                role="status"
                aria-label="Loading"
                className="size-6 animate-spin"
              />
            ) : (
              <Trash2 className="size-5 transition-transform group-hover/btn:scale-110" />
            )}
          </AppBtn>
        </AlertDialogTrigger>
        <AlertDialogContent
          size=""
          className="w-full lg:w-1/3 p-15 rounded-2xl"
        >
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
              <Trash2 />
            </AlertDialogMedia>
            <AlertDialogTitle className="text-xl font-bold">
              Remove Item?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base text-muted-foreground">
              Remove{" "}
              <span className="text-base  text-gray-800 font-semibold">
                {slug}
              </span>{" "}
              from your cart?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="grid w-full grid-cols-2 gap-3 sm:grid sm:grid-cols-2 sm:gap-3">
            <AlertDialogCancel
              variant="secondary"
              className="border-0 cursor-pointer hover:bg-gray-200!"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              className="cursor-pointer"
              onClick={DeleteOneProdcut}
            >
              Remove
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

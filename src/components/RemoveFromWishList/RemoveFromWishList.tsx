"use client";
import { toast } from "react-toastify";
import AppBtn from "../shared/AppBtn/AppBtn";
import { HeartCrack, LoaderIcon, Trash2 } from "lucide-react";
import { useState } from "react";
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
import { removeFromWishList } from "@/app/wishlist/wishlist.services";
export default function RemoveFromWishList({
  idProduct,
}: {
  idProduct: string;
}) {
  const [loading, setLoading] = useState(false);
  async function handleRemoveFromWishList() {
    setLoading(true);
    try {
      await toast.promise(removeFromWishList(idProduct), {
        pending: "Remove From WishList...",
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
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <AppBtn
          disabled={loading}
          className="w-10 bg-transparent h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-red-500 hover:bg-red-50 hover:border-red-200 transition-colors shrink-0"
        >
          {loading ? (
            <LoaderIcon
              role="status"
              aria-label="Loading"
              className="size-6 animate-spin"
            />
          ) : (
            <Trash2 className="w-5 h-5 fill-slate-200/50" />
          )}
        </AppBtn>
      </AlertDialogTrigger>
      <AlertDialogContent size="" className="w-full lg:w-1/3 p-15 rounded-2xl">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <HeartCrack />
          </AlertDialogMedia>
          <AlertDialogTitle className="text-xl font-bold">
            Remove From WishList?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base text-muted-foreground">
            Are you sure you want to remove this item from your wishlist?
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
            onClick={handleRemoveFromWishList}
          >
            Yes, Remove
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

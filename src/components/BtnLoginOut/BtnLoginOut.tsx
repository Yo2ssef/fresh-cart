"use client"
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
import { LogOut } from "lucide-react";
import AppBtn from "../shared/AppBtn/AppBtn";
import { signOut } from "next-auth/react";
export default function BtnLoginOut() {
    async function handleLogOut() {
      await signOut({ callbackUrl: "/" });
    }
  return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <AppBtn className="cursor-pointer flex items-center bg-transparent text-gray-600  gap-1.5 hover:text-red-600 hover:bg-transparent">
            <LogOut className="w-4 h-4" /> Log Out
          </AppBtn>
        </AlertDialogTrigger>
        <AlertDialogContent size="" className="w-1/3 p-15 rounded-2xl">
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
              <LogOut />
            </AlertDialogMedia>
            <AlertDialogTitle className="text-xl font-bold">
              Log Out?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base text-muted-foreground">
              Are you sure you want to log out?
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
              onClick={handleLogOut}
            >
              Log Out
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
  );
}

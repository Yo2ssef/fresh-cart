"use client";
import ContextCartProvider from "@/Context/ContextCartProvider/ContextCartProvider";
import ContextWishListProvider from "@/Context/ContextWishListProvider/ContextWishListProvider";
import { SessionProvider } from "next-auth/react";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
    <ContextCartProvider>
      <ContextWishListProvider>
        {children}
      </ContextWishListProvider>
    </ContextCartProvider>
    </SessionProvider>
  );
}

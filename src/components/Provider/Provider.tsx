"use client";
import ContextCartProvider from "@/Context/ContextCartProvider/ContextCartProvider";
import { SessionProvider } from "next-auth/react";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ContextCartProvider>
      <SessionProvider>{children}</SessionProvider>
    </ContextCartProvider>
  );
}

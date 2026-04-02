"use client";
import { createContext, useState } from "react";
interface CartContextType {
  userCartCount: number;
  setUserCartCount: React.Dispatch<React.SetStateAction<number>>;
}
export const cartCreatedContxt = createContext<CartContextType>({
  userCartCount: 0,
  setUserCartCount: () => {},
});

export default function ContextCartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userCartCount, setUserCartCount] = useState<number>(0);
  return (
    <cartCreatedContxt.Provider value={{ userCartCount, setUserCartCount }}>
      {children}
    </cartCreatedContxt.Provider>
  );
}

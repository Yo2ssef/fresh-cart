"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { useSession } from "next-auth/react";
import { getProductCard } from "@/components/CardProudct/AddToCard/AddToCard.Action";
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
  children: ReactNode;
}) {
  const [userCartCount, setUserCartCount] = useState<number>(0);
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      getProductCard()
        .then((res) => {
          setUserCartCount(res.numOfCartItems || 0);
        })
        .catch((err) => console.error("Cart Fetch Error:", err));
    } else if (status === "unauthenticated") {
      const timer = setTimeout(() => {
        setUserCartCount(0);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <cartCreatedContxt.Provider value={{ userCartCount, setUserCartCount }}>
      {children}
    </cartCreatedContxt.Provider>
  );
}

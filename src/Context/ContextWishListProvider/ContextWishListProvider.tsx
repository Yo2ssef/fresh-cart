"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { useSession } from "next-auth/react";
import { getAllWishlist } from "@/app/wishlist/wishlist.services";

interface WishListContextType {
  userWishListCount: number;
  setUserWishListCount: React.Dispatch<React.SetStateAction<number>>;
}

export const wishListCreatedContxt = createContext<WishListContextType>({
  userWishListCount: 0,
  setUserWishListCount: () => {},
});

export default function ContextWishListProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [userWishListCount, setUserWishListCount] = useState<number>(0);
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      getAllWishlist()
        .then((res) => {
          setUserWishListCount(res.count || 0);
        })
        .catch((err) => console.error("Wishlist Fetch Error:", err));
    }
    if (status === "unauthenticated" && userWishListCount !== 0) {
      const timer = setTimeout(() => {
        setUserWishListCount(0);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [status, userWishListCount]);

  return (
    <wishListCreatedContxt.Provider
      value={{ userWishListCount, setUserWishListCount }}
    >
      {children}
    </wishListCreatedContxt.Provider>
  );
}

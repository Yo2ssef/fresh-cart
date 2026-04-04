import { AllProductsData } from "@/app/mainPage.interface";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BtnAddToCard from "./AddToCard/BtnAddToCard";
import BtnWishList from "../BtnWishList/BtnWishList";
import { getAllWishlist } from "@/app/wishlist/wishlist.services";

export default async function CardProduct({ prop }: { prop: AllProductsData }) {
  const {
    imageCover,
    title,
    ratingsAverage,
    id,
    price,
    ratingsQuantity,
    category: { name },
    priceAfterDiscount,
  } = prop;
  const { data } = await getAllWishlist();
  return (
    <Card className="relative mx-auto w-full pt-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}
      <Link href={`productdetails/${id}`}>
        <div className="relative h-65">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={imageCover}
            alt={title}
            className="relative rounded-t-md w-full object-contain"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-2 absolute top-3 inset-e-2">
        <CardAction className="cursor-pointer">
          <BtnWishList idWishList={id} dataUser={data} />
        </CardAction>
        <CardAction className="cursor-pointer">
          <Link
            href={`productdetails/${id}`}
            className="shadow bg-transparent w-6 h-6 flex items-center justify-center p-1 rounded-full transition-colors text-gray-600 hover:text-green-600"
          >
            <span>
              <Eye size={19} strokeWidth={2.5} />
            </span>
          </Link>
        </CardAction>
      </div>
      <CardHeader>
        <CardDescription>{name}</CardDescription>
        <CardTitle className="text-lg text-gray-700 line-clamp-2" title={title}>
          {title.split(" ").slice(0, 3).join(" ")}
        </CardTitle>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center">
            {Array.from({ length: Math.floor(ratingsAverage) }).map((e, i) => (
              <Star key={i} size={20} color="#FDC700" fill="#FDC700" />
            ))}
            {Array.from({ length: 5 - Math.floor(ratingsAverage) }).map(
              (e, i) => (
                <Star key={i} size={20} color="#FDC700" />
              ),
            )}
          </div>
          <div className="flex gap-0.5 items-center text-gray-500">
            <span>{ratingsAverage}</span>
            <span>({ratingsQuantity})</span>
          </div>
        </div>
      </CardHeader>
      <CardFooter className="flex flex-col gap-1.5">
        <span className={priceAfterDiscount ? "flex gap-4 items-center" : ""}>
          {priceAfterDiscount ? (
            <>
              <span className="font-bold text-xl text-green-600">
                {priceAfterDiscount} EGP
              </span>
              <span className="line-through text-gray-600 font-medium">
                {price} EGP
              </span>
            </>
          ) : (
            <span className="font-bold text-xl text-gray-700">{price} EGP</span>
          )}
        </span>
        <BtnAddToCard idProduct={id} />
      </CardFooter>
    </Card>
  );
}

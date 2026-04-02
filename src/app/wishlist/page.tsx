export const dynamic = 'force-dynamic';
import Link from "next/link";
import { Heart, ArrowRight, ArrowLeft } from "lucide-react";
import { getAllWishlist } from "./wishlist.services";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import AddToCardFromWishList from "@/components/AddToCardFromWishList/AddToCardFromWishList";
import RemoveFromWishList from "@/components/RemoveFromWishList/RemoveFromWishList";
export default async function page() {
  const { data } = await getAllWishlist();

  return (
    <>
      {data.length > 0 ? (
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-slate-500 font-medium mb-6">
              <Link href="/" className="hover:text-slate-800 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-800">Wishlist</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center shrink-0">
                <Heart className="size-8 text-red-500 fill-red-500" />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-slate-900 leading-none mb-1.5">
                  My Wishlist
                </h1>
                <p className="text-slate-500 font-medium">
                  {data?.length || 0} items saved
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-200/50 rounded-2xl overflow-hidden">
            <Table>
            <TableHeader>
              <TableRow className="bg-gray-100 ">
                <TableHead className="w-25 text-slate-600">Product</TableHead>
                <TableHead className="text-slate-600">Price</TableHead>
                <TableHead className="text-slate-600">Status</TableHead>
                <TableHead className="text-right text-slate-600">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((e:{id: string; imageCover: string; title: string; category?: { name: string }; price: number; priceAfterDiscount?: number}) => (
                <TableRow key={e.id}>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-slate-50 rounded-2xl border-2 border-gray-100 p-4 flex items-center justify-center shrink-0">
                        {/* ضف الصورة هنا */}
                        <Image
                          src={e.imageCover}
                          alt={e.title || "Product"}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain block"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base font-semibold text-slate-800 mb-0.5">
                          {e.title}
                        </span>
                        <span className="text-sm text-slate-400 font-medium tracking-wide">
                          {e?.category?.name}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-lg font-bold">
                    <div className="flex flex-col justify-center">
                      {e.priceAfterDiscount ? (
                        <>
                          <span className="font-bold text-lg text-slate-900 leading-tight">
                            {e.priceAfterDiscount} EGP
                          </span>
                          <span className="line-through text-slate-400 font-medium text-sm mt-0.5">
                            {e.price} EGP
                          </span>
                        </>
                      ) : (
                        <span className="font-bold text-lg text-slate-900">
                          {e.price} EGP
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="bg-emerald-50 text-emerald-600 hover:bg-emerald-50 border-none font-semibold px-2.5 py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 shrink-0"></span>
                      In Stock
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-3">
                      <AddToCardFromWishList idProduct={e.id} />
                      <RemoveFromWishList idProduct={e.id} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 mt-6 text-slate-500 hover:text-slate-800 transition-colors font-medium text-[15px]"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center min-h-[70vh] px-4">
          <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
            <Heart className="w-10 h-10 text-slate-400 stroke-[1.5]" />
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-3 tracking-tight">
            Your wishlist is empty
          </h2>

          <p className="text-slate-500 mb-8 max-w-sm text-center">
            Browse products and save your favorites here.
          </p>

          <Link
            href="/shop"
            className="w-full sm:w-100 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3.5 px-6 rounded-xl transition-colors"
          >
            Browse Products <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      )}
    </>
  );
}

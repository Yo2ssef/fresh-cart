import type { Metadata } from "next";
import { getProductDetails } from "@/app/mainPage.services";
import { BreCrumProductDetil } from "@/components/BreCrumProductDetil/BreCrumProductDetil";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Check,
  LucidePackage2,
  RotateCcw,
  ShieldHalf,
  Star,
  Truck,
  Zap,
} from "lucide-react";
import BtnAddToCardProductDet from "@/components/AddToCardProductDet/AddToCardProductDet";
import Link from "next/link";
import { AllProductsData } from "@/app/mainPage.interface";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WishListProductDetails from "@/components/WishListProductDetails/WishListProductDetails";
import { getAllWishlist } from "@/app/wishlist/wishlist.services";
import ProductImageGallery from "@/components/ProductImageGallery/ProductImageGallery";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ idproduct: string }>;
}): Promise<Metadata> {
  const { idproduct } = await params;
  const product: AllProductsData = await getProductDetails(idproduct);

  return {
    title: product.title,
    description: `${product.description.slice(0, 150)}... Buy for ${product.priceAfterDiscount || product.price} EGP at Fresh Cart.`,
    openGraph: {
      title: `${product.title} | Fresh Cart`,
      description: product.description,
      url: `https://freshcart-youssef.vercel.app/productdetails/${idproduct}`,
      images: [
        {
          url: product.imageCover,
          width: 800,
          height: 800,
          alt: product.title,
        },
      ],
      type: "article",
    },
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ idproduct: string }>;
}) {
  const { idproduct } = await params;
  const productDetails: AllProductsData = await getProductDetails(idproduct);

  const {
    imageCover,
    images,
    title,
    ratingsAverage,
    id,
    price,
    quantity,
    ratingsQuantity,
    category: { name: nameCategory },
    brand: { name: nameBrand },
    priceAfterDiscount,
    description,
    reviews,
    sold,
    subcategory,
  } = productDetails;
  const subc = subcategory?.[0]?.name;
  const { data } = await getAllWishlist();

  return (
    <>
      <section>
        <div className="container p-6 mx-auto">
          <BreCrumProductDetil prop={productDetails} />
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-3 rounded-2xl shadow p-4 flex flex-col gap-4 lg:sticky lg:top-24 h-fit">
              <ProductImageGallery imageCover={imageCover} images={images} title={title} />
            </div>
            <div className="col-span-12 lg:col-span-9 rounded-2xl shadow p-5 flex flex-col gap-4.5">
              <div className="flex gap-1.5">
                <Badge className="p-3 bg-green-50 text-green-700">
                  {nameCategory}
                </Badge>
                <Badge variant="secondary" className="p-3">
                  {nameBrand}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold">{title}</h1>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center">
                  {Array.from({ length: Math.floor(ratingsAverage) }).map(
                    (e, i) => (
                      <Star key={i} size={17} color="#FDC700" fill="#FDC700" />
                    ),
                  )}
                  {Array.from({ length: 5 - Math.floor(ratingsAverage) }).map(
                    (e, i) => (
                      <Star key={i} size={17} color="#FDC700" />
                    ),
                  )}
                </div>
                <div className="flex gap-0.5 items-center text-gray-600">
                  <span>{ratingsAverage}</span>
                  <span>({ratingsQuantity} reviews)</span>
                </div>
              </div>
              <span
                className={
                  priceAfterDiscount ? "flex gap-1.5 items-center" : ""
                }
              >
                {priceAfterDiscount ? (
                  <>
                    <span className="font-bold text-3xl text-gray-800">
                      {priceAfterDiscount} EGP
                    </span>
                    <span className="line-through text-lg text-gray-400 font-medium">
                      {price} EGP
                    </span>
                  </>
                ) : (
                  <span className="font-bold text-3xl text-gray-800">
                    {price} EGP
                  </span>
                )}
              </span>
              <Badge className="p-3 bg-green-50 text-green-700 w-fit">
                <span className="p-1 rounded-full text-green-500 bg-green-500 mr-2"></span>
                In Stock
              </Badge>
              <Separator />
              <p className="text-gray-500 font-medium m-0 p-0">{description}</p>
              <div>
                <h4 className="text-gray-700 font-bold">
                  Quantity <span className="text-green-600 text-2xl">{quantity}</span> Available
                </h4>
              </div>
              <div className="bg-green-50/60 flex justify-between items-center py-5 px-3 rounded-2xl">
                <h3 className="text-gray-700 font-medium">Total Price:</h3>
                <span className="text-2xl font-bold text-green-700">
                  {priceAfterDiscount ? (
                    <>{priceAfterDiscount} EGP</>
                  ) : (
                    <>{price} EGP</>
                  )}
                </span>
              </div>
              <div className="grid grid-cols-12 gap-5">
                <BtnAddToCardProductDet idProduct={id} />
                <Link
                  href="/cart"
                  className="bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/50 col-span-12 lg:col-span-6 flex justify-center items-center rounded-xl h-14 text-lg transition-colors"
                >
                  <span className="flex gap-2">
                    <Zap />
                    Buy Now
                  </span>
                </Link>
              </div>
              <div className="grid grid-cols-12 gap-2">
                <WishListProductDetails idProduct={id} dataUser={data} />
                {/* <AppBtn
                  variant="outline"
                  className="col-span-1 rounded-lg py-6 border-2 border-gray-200 text-md text-gray-700 transition-all duration-300 ease-in-out hover:bg-white hover:text-green-500 hover:border-green-500 flex justify-center items-center"
                >
                  <Share2 size={20} />
                </AppBtn> */}
              </div>
              <Separator />
              <div className="flex flex-wrap lg:grid lg:grid-cols-12 gap-4 justify-center">
                <div className="w-[calc(50%-0.5rem)] lg:w-auto lg:col-span-4 flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left gap-2">
                  <Badge
                    className="bg-green-100 px-2 py-4 text-green-600"
                    variant="secondary"
                  >
                    <Truck size={20} />
                  </Badge>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium">Free Delivery</span>
                    <span className="text-sm text-gray-600">
                      Orders over $50
                    </span>
                  </div>
                </div>
                <div className="w-[calc(50%-0.5rem)] lg:w-auto lg:col-span-4 flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left gap-2">
                  <Badge
                    className="bg-green-100 px-2 py-4 text-green-600"
                    variant="secondary"
                  >
                    <RotateCcw size={20} />
                  </Badge>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium">30 Days Return</span>
                    <span className="text-sm text-gray-600">Money back</span>
                  </div>
                </div>
                <div className="w-[calc(50%-0.5rem)] lg:w-auto lg:col-span-4 flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left gap-2 mx-auto lg:mx-0">
                  <Badge
                    className="bg-green-100 px-2 py-4 text-green-600"
                    variant="secondary"
                  >
                    <ShieldHalf size={20} />
                  </Badge>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium">Secure Payment</span>
                    <span className="text-sm text-gray-600">
                      100% Protected
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Tabs defaultValue="overview" className="my-7">
            <TabsList variant="line" className="flex flex-wrap w-full">
              <TabsTrigger
                value="overview"
                className="flex items-center gap-2 px-4 py-2 text-gray-600 transition-all rounded-none hover:text-green-600 data-[state=active]:bg-green-50/50! data-[state=active]:text-green-700 data-[state=active]:shadow-none data-[state=active]:after:bg-green-600"
              >
                <LucidePackage2 />
                Product Details
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="flex items-center gap-2 px-4 py-2 text-gray-600 transition-all rounded-none hover:text-green-600 data-[state=active]:bg-green-50/50! data-[state=active]:text-green-700 data-[state=active]:shadow-none data-[state=active]:after:bg-green-600"
              >
                <Star />
                Reviews
              </TabsTrigger>
              <TabsTrigger
                value="reports"
                className="flex items-center gap-2 px-4 py-2 text-gray-600 transition-all rounded-none hover:text-green-600 data-[state=active]:bg-green-50/50! data-[state=active]:text-green-700 data-[state=active]:shadow-none data-[state=active]:after:bg-green-600"
              >
                <Truck />
                Shipping & Returns
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  About this Product
                </h3>
                <p className="text-slate-600 mb-6 text-sm">{description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-6">
                      Product Information
                    </h4>
                    <div className="flex flex-col gap-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Category</span>
                        <span className="font-medium text-slate-800">
                          {nameCategory}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Subcategory</span>
                        <span className="font-medium text-slate-800">
                          {subc}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Brand</span>
                        <span className="font-medium text-slate-800">
                          {nameBrand}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Items Sold</span>
                        <span className="font-medium text-slate-800">
                          {sold}+ sold
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-6">
                      Key Features
                    </h4>
                    <ul className="flex flex-col gap-4 text-sm">
                      <li className="flex items-center gap-2 text-slate-600 font-medium">
                        <Check className="text-green-500 w-5 h-5" /> Premium
                        Quality Product
                      </li>
                      <li className="flex items-center gap-2 text-slate-600 font-medium">
                        <Check className="text-green-500 w-5 h-5" /> 100%
                        Authentic Guarantee
                      </li>
                      <li className="flex items-center gap-2 text-slate-600 font-medium">
                        <Check className="text-green-500 w-5 h-5" /> Fast &
                        Secure Packaging
                      </li>
                      <li className="flex items-center gap-2 text-slate-600 font-medium">
                        <Check className="text-green-500 w-5 h-5" /> Quality
                        Tested
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="analytics">
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
                  <div className="flex flex-col items-center justify-center shrink-0">
                    <div className="text-6xl font-bold text-slate-900 mb-3">
                      {ratingsAverage}
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: Math.floor(ratingsAverage) }).map(
                        (e, i) => (
                          <Star
                            key={i}
                            size={17}
                            color="#FDC700"
                            fill="#FDC700"
                          />
                        ),
                      )}
                      {Array.from({
                        length: 5 - Math.floor(ratingsAverage),
                      }).map((e, i) => (
                        <Star key={i} size={17} color="#FDC700" />
                      ))}
                    </div>
                    <div className="text-slate-500 text-sm">
                      Based on {ratingsQuantity} reviews
                    </div>
                  </div>
                  <div className="flex-1 w-full flex flex-col gap-4 py-4">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const count =
                        reviews?.filter(
                          (r: { rating: number }) =>
                            Math.round(r.rating) === star,
                        )?.length || 0;
                      const percentage =
                        reviews?.length > 0
                          ? Math.round((count / reviews.length) * 100)
                          : 0;
                      return (
                        <div key={star} className="flex items-center gap-3">
                          <div className="text-sm font-medium text-slate-600 w-10 shrink-0">
                            {star} star
                          </div>
                          <Progress
                            value={percentage}
                            className="h-2 flex-1 [&>div]:bg-[#FDC700] bg-slate-200"
                          />
                          <div className="text-sm text-slate-500 w-8 text-right shrink-0">
                            {percentage}%
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reports">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-green-600 w-10 h-10 rounded-full flex justify-center items-center text-white shrink-0">
                        <Truck size={20} />
                      </div>
                      <h4 className="font-semibold text-slate-800 text-lg">
                        Shipping Information
                      </h4>
                    </div>
                    <ul className="flex flex-col gap-4 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <Check className="text-green-600 w-4 h-4 shrink-0" />{" "}
                        Free shipping on orders over $50
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-green-600 w-4 h-4 shrink-0" />{" "}
                        Standard delivery: 3-5 business days
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-green-600 w-4 h-4 shrink-0" />{" "}
                        Express delivery available (1-2 business days)
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-green-600 w-4 h-4 shrink-0" />{" "}
                        Track your order in real-time
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-green-600 w-10 h-10 rounded-full flex justify-center items-center text-white shrink-0">
                        <RotateCcw size={20} />
                      </div>
                      <h4 className="font-semibold text-slate-800 text-lg">
                        Returns & Refunds
                      </h4>
                    </div>
                    <ul className="flex flex-col gap-4 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <Check className="text-green-600 w-4 h-4 shrink-0" />{" "}
                        30-day hassle-free returns
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-green-600 w-4 h-4 shrink-0" />{" "}
                        Full refund or exchange available
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-green-600 w-4 h-4 shrink-0" />{" "}
                        Free return shipping on defective items
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-green-600 w-4 h-4 shrink-0" />{" "}
                        Easy online return process
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl flex items-start gap-4">
                  <div className="bg-slate-200 w-12 h-12 rounded-full flex justify-center items-center text-slate-700 shrink-0">
                    <ShieldHalf size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-base mb-1">
                      Buyer Protection Guarantee
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Get a full refund if your order doesn&apos;t arrive or
                      isn&apos;t as described. We ensure your shopping
                      experience is safe and secure.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          <Separator />
        </div>
      </section>
    </>
  );
}

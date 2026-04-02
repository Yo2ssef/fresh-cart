"use client";

import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import {
  Building2,
  MapPin,
  Phone,
  Hash,
  LoaderIcon,
  Package2,
  ShoppingBag,
  Home,
  Info,
  Truck,
  ShieldCheck,
  Package,
  X,
  Wallet,
  Banknote,
  CreditCard,
  Check,
  ShieldHalf,
} from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaCashOrder } from "./FormCashOrder.schema";
import { ShippingAddressType, UserAddressType } from "./FormOrder.interface";
import { handleCashOrder, handleOnlineOrder } from "./FormCashOrder.action";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { cartCreatedContxt } from "@/Context/ContextCartProvider/ContextCartProvider";
import CardOfCheckOut from "@/components/CardOfCheckOut/CardOfCheckOut";
import AppBtn from "@/components/shared/AppBtn/AppBtn";
import { ProductItemData } from "../cart.types";
import Link from "next/link";

export default function FormCashOrder({
  data,
}: {
  data: {
    cartId: string;
    data: { products: ProductItemData[]; totalCartPrice: number };
    numOfCartItems: number;
  };
}) {
  const router = useRouter();
  const { setUserCartCount } = useContext(cartCreatedContxt);
  const [getLoading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "online">("cash");
  const {
    cartId,
    data: {
      products,
      //  _id,
      totalCartPrice,
    },
    numOfCartItems,
  } = data;

  const { handleSubmit, control } = useForm({
    defaultValues: {
      details: "",
      phone: "",
      city: "",
      postalCode: "",
    },
    mode: "all",
    resolver: zodResolver(schemaCashOrder),
  });

  async function addressDetailsCash(data: UserAddressType) {
    setLoading(true);
    try {
      const shippingAddress: ShippingAddressType = { shippingAddress: data };
      await toast.promise(handleCashOrder(shippingAddress, cartId), {
        pending: "Placing your order...",
        success: {
          render({ data: { message } }) {
            return message;
          },
        },
        error: {
          render({ data }) {
            console.log(data);
            return "Sorry Something Went Wrong";
          },
        },
      });
      setUserCartCount(0);
      router.push("/");
    } catch (error) {
      console.error("Order Error:", error);
    } finally {
      setLoading(false);
    }
  }

  async function addressDetailsOnline(data: UserAddressType) {
    setLoading(true);
    try {
      const shippingAddress: ShippingAddressType = { shippingAddress: data };
      await toast.promise(handleOnlineOrder(shippingAddress, cartId), {
        pending: "Placing your order...",
        success: {
          render({ data: { status, session } }) {
            window.open(session.url, "_self");
            return status;
          },
        },
        error: {
          render({ data }) {
            console.log(data);
            return "Sorry Something Went Wrong";
          },
        },
      });
      setUserCartCount(0);
      router.push("/");
    } catch (error) {
      console.error("Order Error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        <section className="lg:col-span-8">
          <div className="w-full lg:max-w-3xl pb-12">
            <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm">
              {/* Header */}
              <div className="bg-green-700 p-5 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Home className="w-5 h-5" />
                  <h2 className="text-lg font-bold tracking-wide">
                    Shipping Address
                  </h2>
                </div>
                <p className="text-sm text-green-50 ml-7 font-light">
                  Where should we deliver your order?
                </p>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col gap-6">
                {/* Info Alert */}
                <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex items-start gap-3 mt-2">
                  <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5 fill-blue-50" />
                  <div className="flex flex-col gap-0.5">
                    <h5 className="font-semibold text-blue-700 text-sm tracking-tight">
                      Delivery Information
                    </h5>
                    <p className="text-sm text-blue-600/80">
                      Please ensure your address is accurate for smooth delivery
                    </p>
                  </div>
                </div>

                {/* Form fields */}
                <div className="flex flex-col gap-5 mt-2">
                  <form id="checkout-form" className="flex flex-col gap-4">
                    <Controller
                      name="details"
                      control={control}
                      render={({ field, fieldState }) => (
                        <Field
                          data-invalid={fieldState.invalid}
                          className="gap-2"
                        >
                          <FieldLabel
                            className="text-sm font-semibold text-gray-800"
                            htmlFor={field.name}
                          >
                            Address Details{" "}
                            <span className="text-red-500">*</span>
                          </FieldLabel>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                              <MapPin className="w-5 h-5 text-gray-400" />
                            </div>
                            <Input
                              {...field}
                              id={field.name}
                              aria-invalid={fieldState.invalid}
                              placeholder="Street name, building number, floor, apartment.."
                              className="pl-11 rounded-lg border-gray-300 placeholder:text-gray-400 h-12 text-[15px] focus-visible:ring-green-500"
                            />
                          </div>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    <Controller
                      name="phone"
                      control={control}
                      render={({ field, fieldState }) => (
                        <Field
                          data-invalid={fieldState.invalid}
                          className="gap-2"
                        >
                          <FieldLabel
                            className="text-sm font-semibold text-gray-800"
                            htmlFor={field.name}
                          >
                            Phone Number <span className="text-red-500">*</span>
                          </FieldLabel>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                              <Phone className="w-5 h-5 text-gray-400" />
                            </div>
                            <Input
                              {...field}
                              id={field.name}
                              aria-invalid={fieldState.invalid}
                              placeholder="01xxxxxxxxxx"
                              className="pl-11 pr-36 rounded-lg border-gray-300 placeholder:text-gray-400 h-12 text-[15px] focus-visible:ring-green-500"
                            />
                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                              <span className="text-xs text-gray-400">
                                Egyptian numbers only
                              </span>
                            </div>
                          </div>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      name="city"
                      control={control}
                      render={({ field, fieldState }) => (
                        <Field
                          data-invalid={fieldState.invalid}
                          className="gap-2"
                        >
                          <FieldLabel
                            className="text-sm font-semibold text-gray-800"
                            htmlFor={field.name}
                          >
                            City <span className="text-red-500">*</span>
                          </FieldLabel>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                              <Building2 className="w-5 h-5 text-gray-400" />
                            </div>
                            <Input
                              {...field}
                              id={field.name}
                              aria-invalid={fieldState.invalid}
                              placeholder="e.g. Cairo, Alexandria, Giza"
                              className="pl-11 rounded-lg border-gray-300 placeholder:text-gray-400 h-12 text-[15px] focus-visible:ring-green-500"
                            />
                          </div>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    <Controller
                      name="postalCode"
                      control={control}
                      render={({ field, fieldState }) => (
                        <Field
                          data-invalid={fieldState.invalid}
                          className="gap-2"
                        >
                          <FieldLabel
                            className="text-sm font-semibold text-gray-800"
                            htmlFor={field.name}
                          >
                            Postal Code
                          </FieldLabel>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                              <Hash className="w-5 h-5 text-gray-400" />
                            </div>
                            <Input
                              {...field}
                              id={field.name}
                              aria-invalid={fieldState.invalid}
                              placeholder="e.g. 11511"
                              className="pl-11 rounded-lg border-gray-300 placeholder:text-gray-400 h-12 text-[15px] focus-visible:ring-green-500/70"
                            />
                          </div>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </form>
                </div>
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm mt-8">
              {/* Header */}
              <div className="bg-green-700 p-5 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Wallet className="w-5 h-5" />
                  <h2 className="text-lg font-bold tracking-wide">
                    Payment Method
                  </h2>
                </div>
                <p className="text-sm text-green-50 ml-7 font-light">
                  Choose how you&apos;d like to pay
                </p>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col gap-4">
                {/* Cash on Delivery Option */}
                <span
                  onClick={() => setPaymentMethod("cash")}
                  className={`relative flex items-center p-4 border rounded-xl cursor-pointer transition-all ${
                    paymentMethod === "cash"
                      ? "border-green-500 bg-green-50/50"
                      : "border-gray-200 hover:border-green-200 hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center flex-1 gap-4">
                    <span
                      className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${
                        paymentMethod === "cash"
                          ? "bg-green-500 text-white shadow-md shadow-green-200"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <Banknote className="w-6 h-6" />
                    </span>
                    <span className="flex flex-col">
                      <span
                        className={`text-[15px] font-bold ${
                          paymentMethod === "cash"
                            ? "text-green-800"
                            : "text-gray-900"
                        }`}
                      >
                        Cash on Delivery
                      </span>
                      <span className="text-[13px] text-gray-500">
                        Pay when your order arrives at your doorstep
                      </span>
                    </span>
                  </span>
                  <span>
                    {paymentMethod === "cash" ? (
                      <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white shadow-sm shadow-green-200">
                        <Check className="w-4 h-4" strokeWidth={3} />
                      </span>
                    ) : (
                      <span className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-gray-200"></span>
                    )}
                  </span>
                </span>

                {/* Pay Online Option */}
                <span
                  onClick={() => setPaymentMethod("online")}
                  className={`relative flex items-center p-4 border rounded-xl cursor-pointer transition-all ${
                    paymentMethod === "online"
                      ? "border-green-500 bg-green-50/50"
                      : "border-gray-200 hover:border-green-200 hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center flex-1 gap-4">
                    <span
                      className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${
                        paymentMethod === "online"
                          ? "bg-linear-to-br from-[#00c6ff] to-[#0072ff] text-white shadow-md shadow-blue-200"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <CreditCard className="w-6 h-6" />
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span
                        className={`text-[15px] font-bold ${
                          paymentMethod === "online"
                            ? "text-green-800"
                            : "text-gray-900"
                        }`}
                      >
                        Pay Online
                      </span>
                      <span className="text-[13px] text-gray-500 mb-1">
                        Secure payment with Credit/Debit Card via Stripe
                      </span>
                      <span className="flex items-center gap-1.5">
                        {/* VISA */}
                        <span className="w-8.5 h-5 bg-white border border-gray-200 rounded-sm flex items-center justify-center shadow-sm">
                          <span className="text-[8px] font-extrabold text-blue-600 tracking-tighter italic">
                            VISA
                          </span>
                        </span>
                        {/* MC */}
                        <span className="w-8.5 h-5 bg-white border border-gray-200 rounded-sm flex items-center justify-center relative shadow-sm">
                          <span className="w-2.5 h-2.5 bg-red-600 rounded-full absolute left-1.5 opacity-90"></span>
                          <span className="w-2.5 h-2.5 bg-yellow-600 rounded-full absolute right-1.5 opacity-80 mix-blend-multiply"></span>
                        </span>
                        {/* AMEX */}
                        <span className="w-8.5 h-5 bg-white border border-gray-200 rounded-sm flex items-center justify-center shadow-sm">
                          <span className="text-[7px] font-bold text-blue-500 tracking-tight">
                            AMEX
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span>
                    {paymentMethod === "online" ? (
                      <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white shadow-sm shadow-green-200">
                        <Check className="w-4 h-4" strokeWidth={3} />
                      </span>
                    ) : (
                      <span className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-gray-200"></span>
                    )}
                  </span>
                </span>

                {/* Secure encryption note */}
                <div className="bg-green-50/50 border border-green-100/60 rounded-xl p-4 flex items-center gap-3 mt-1">
                  <div className="w-8 h-8 rounded-full bg-green-100/80 flex items-center justify-center text-green-600 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-semibold text-gray-800">
                      Secure & Encrypted
                    </span>
                    <span className="text-[12px] text-green-600/80">
                      Your payment info is protected with 256-bit SSL encryption
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:col-span-4">
          <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm lg:sticky lg:top-24">
            {/* Header */}
            <div className="bg-green-700 p-5 text-white">
              <div className="flex items-center gap-2 mb-1">
                <ShoppingBag className="w-5 h-5" />
                <h2 className="text-lg font-bold tracking-wide">
                  Order Summary
                </h2>
              </div>
              <p className="text-sm text-green-50 ml-7 font-light">
                {numOfCartItems} items
              </p>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col pt-6">
              {/* Scrollable Items Container */}
              <div className="max-h-60 overflow-y-auto pr-2 flex flex-col gap-3 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                {products.map(
                  (e: {
                    _id: string;
                    price: number;
                    count: number;
                    product: { slug: string; imageCover: string };
                  }) => {
                    return <CardOfCheckOut key={e._id} info={e} />;
                  },
                )}
              </div>

              {/* Calculations */}
              <div className="flex flex-col gap-3 mt-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium text-gray-600">
                    {totalCartPrice} EGP
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 flex items-center gap-1.5">
                    <Truck className="w-4 h-4" /> Shipping
                  </span>
                  <span className="font-bold text-green-600">FREE</span>
                </div>
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg text-gray-900">Total</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-bold text-2xl text-green-600">
                    {totalCartPrice}
                  </span>
                  <span className="text-xs font-bold text-gray-500">EGP</span>
                </div>
              </div>

              {/* Place Order Button */}
              {numOfCartItems === 0 ? (
                <Link
                  href="/"
                  className="w-full border-2 border-green-700 text-green-700 h-13 hover:bg-green-50 rounded-xl py-3.5 font-bold flex items-center justify-center gap-2 mt-6 transition-all shadow-sm"
                >
                  <X className="size-8" />
                  Your Cart is Empty - Shop Now
                </Link>
              ) : paymentMethod === "cash" ? (
                <AppBtn
                  onClick={handleSubmit(addressDetailsCash)}
                  type="button"
                  form="checkout-form"
                  disabled={getLoading}
                  className="w-full bg-green-700 h-13 hover:bg-green-800 text-white rounded-xl py-3.5 font-bold flex items-center justify-center gap-2 mt-6 transition-colors shadow-sm shadow-green-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {getLoading ? (
                    <LoaderIcon
                      role="status"
                      aria-label="Loading"
                      className="size-6 animate-spin"
                      size={16}
                      strokeWidth={2.5}
                    />
                  ) : (
                    <Package2 className="size-5" />
                  )}
                  Place Order
                </AppBtn>
              ) : (
                <AppBtn
                  onClick={handleSubmit(addressDetailsOnline)}
                  type="button"
                  form="checkout-form"
                  disabled={getLoading}
                  className="w-full bg-green-700 h-13 hover:bg-green-800 text-white rounded-xl py-3.5 font-bold flex items-center justify-center gap-2 mt-6 transition-colors shadow-sm shadow-green-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {getLoading ? (
                    <LoaderIcon
                      role="status"
                      aria-label="Loading"
                      className="size-6 animate-spin"
                      size={16}
                      strokeWidth={2.5}
                    />
                  ) : (
                    <ShieldHalf className="size-5" />
                  )}
                  Proceed to Payment
                </AppBtn>
              )}

              {/* Bottom features line */}
              <div className="flex items-center justify-center gap-3 mt-6 text-[11px] font-medium text-gray-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                  Secure
                </div>
                <div className="w-px h-3 bg-gray-200"></div>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-blue-500" />
                  Fast Delivery
                </div>
                <div className="w-px h-3 bg-gray-200"></div>
                <div className="flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-orange-500" />
                  Easy Returns
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

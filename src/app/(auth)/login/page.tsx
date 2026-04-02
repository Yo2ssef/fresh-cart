import Image from "next/image";
import FormLogin from "./FormLogin";
import { Truck, ShieldCheck, Clock10 } from "lucide-react";

import loginPhoto from "@images/loginPhoto.png";

export default function page() {
  return (
    <section className="container mx-auto py-10 px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
        {/* Left Side: Marketing Info */}
        <section className="flex flex-col items-center justify-center space-y-8 lg:pe-10">
          <div className="w-full bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <Image
              src={loginPhoto}
              alt="FreshCart Shopping Cart"
              width={600}
              height={400}
              className="w-full h-auto object-cover max-h-87.5"
              priority
            />
          </div>

          <div className="text-center space-y-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 leading-tight">
              FreshCart - Your One-Stop Shop for Fresh Products
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-lg mx-auto font-semibold">
              Join thousands of happy customers who trust FreshCart for their
              daily grocery needs
            </p>
          </div>

          {/* Features Inline */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-2">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-slate-600">
                Free Delivery
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-slate-600">
                Secure Payment
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock10 className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-slate-600">
                24/7 Support
              </span>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl text-center shadow-lg border border-gray-100 px-6 py-10 flex flex-col justify-center min-h-125">
          <h2 className="text-4xl font-semibold text-gray-800">
            <span className="text-emerald-600">Fresh</span>Cart
          </h2>
          <h3 className="text-3xl font-bold text-gray-800 mt-6 mb-3">
            Welcome Back!
          </h3>
          <p className="m-0 font-medium text-slate-500 mb-8">
            Start your fresh journey with us today
          </p>
          <FormLogin />
        </section>
      </div>
    </section>
  );
}

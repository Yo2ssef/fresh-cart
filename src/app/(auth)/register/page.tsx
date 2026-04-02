import Image from "next/image";
import FormRegister from "./FormRegister";
import { Star, Truck, ShieldCheck } from "lucide-react";
import author from "@images/review-author.webp";
export default function page() {
  return (
    <section className="container mx-auto py-14 px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 max-w-6xl mx-auto">
        <section className="flex flex-col justify-center space-y-10 lg:pe-10">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              Welcome to <span className="text-emerald-600">FreshCart</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-md">
              Join thousands of happy customers who enjoy fresh groceries
              delivered right to their doorstep.
            </p>
          </div>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex gap-4 items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                <Star className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="pt-1 text-left">
                <h4 className="text-[17px] font-semibold text-slate-800">
                  Premium Quality
                </h4>
                <p className="text-[15px] text-slate-500 mt-1">
                  Premium quality products sourced from trusted suppliers.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                <Truck className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="pt-1 text-left">
                <h4 className="text-[17px] font-semibold text-slate-800">
                  Fast Delivery
                </h4>
                <p className="text-[15px] text-slate-500 mt-1">
                  Same-day delivery available in most areas
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="pt-1 text-left">
                <h4 className="text-[17px] font-semibold text-slate-800">
                  Secure Shopping
                </h4>
                <p className="text-[15px] text-slate-500 mt-1">
                  Your data and payments are completely secure
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 lg:mr-8 mt-4">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={author}
                alt="Sarah Johnson"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h5 className="font-semibold text-slate-800">Sarah Johnson</h5>
                <div className="flex text-yellow-400 mt-0.5">
                  {[1, 2, 3, 4, 5].map((e) => (
                    <Star
                      key={e}
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic text-[15px] leading-relaxed font-medium">
              &quot;FreshCart has transformed my shopping experience. The
              quality of the products is outstanding, and the delivery is always
              on time. Highly recommend!&quot;
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg px-8 py-10 flex flex-col justify-center border border-gray-100">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-2">
            Create Your Account
          </h2>
          <p className="m-0 font-normal text-center text-lg text-gray-500 mb-8">
            Start your fresh journey with us today
          </p>
          <FormRegister />
        </section>
      </div>
    </section>
  );
}

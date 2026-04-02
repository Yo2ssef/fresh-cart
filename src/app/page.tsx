export const dynamic = 'force-dynamic';
import CardProduct from "@/components/CardProudct/CardProudct";
import { getAllProducts } from "./mainPage.services";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import CategorySection from "@/components/CategorySection/CategorySection";
import CardHomePage from "@/components/CardHomePage/CardHomePage";
import CardDealHomePage from "@/components/CardDealHomePage/CardDealHomePage";
import {
  Mail,
  Smartphone,
  Leaf,
  Truck,
  Tag,
  Apple,
  Play,
  Star,
  ArrowRight,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import AppBtn from "@/components/shared/AppBtn/AppBtn";
export default async function page() {
  const allProducts = await getAllProducts();

  return (
    <>
      {/* header section */}
      <header className="bg-white">
        <HomeSlider />
      </header>
      
      {/* features section */}
      <section className="bg-gray-50/70 py-7 w-full">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5 p-3">
          <CardHomePage />
        </div>
      </section>

      <section className="container mx-auto">
        {/* Category Section */}

        <div className="flex items-center gap-3 px-7 pt-10 pb-4">
          <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
            Shop By <span className="text-emerald-600">Category</span>
          </h2>
        </div>

        <CategorySection />

        {/* Deals Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-7 overflow-hidden">
          <CardDealHomePage />
        </section>

        {/* Proudct Section */}
        <section className="p-7 lg:p-10">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
              Featured <span className="text-emerald-600">Products</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 ">
            {allProducts?.map((e) => {
              return <CardProduct key={e._id} prop={e} />;
            })}
          </div>
        </section>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-10 mb-12">
        <div className="relative bg-emerald-50/20 lg:bg-linear-to-br  lg:from-white lg:to-emerald-50/40 rounded-[2.5rem] border border-emerald-100 shadow-xl shadow-emerald-500/10 p-6 lg:p-12 flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12">
          <div className="flex-1 flex flex-col justify-center space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 shrink-0">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-emerald-600 font-bold tracking-widest text-sm uppercase">
                  Newsletter
                </h3>
                <p className="text-slate-500 text-sm font-medium mt-0.5">
                  50,000+ subscribers
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl lg:text-[2.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Get the Freshest Updates{" "}
                <span className="text-emerald-600">Delivered Free</span>
              </h2>
              <p className="text-slate-500 text-lg sm:text-xl font-medium max-w-xl">
                Weekly recipes, seasonal offers & exclusive member perks.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2.5 pr-5 pl-1.5 py-1.5 rounded-full border border-emerald-100 bg-white shadow-sm shadow-emerald-500/5 text-sm font-medium text-slate-700">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Leaf className="w-4 h-4 text-emerald-700" />
                </div>
                Fresh Picks Weekly
              </div>
              <div className="flex items-center gap-2.5 pr-5 pl-1.5 py-1.5 rounded-full border border-emerald-100 bg-white shadow-sm shadow-emerald-500/5 text-sm font-medium text-slate-700">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4 text-emerald-700" />
                </div>
                Free Delivery Codes
              </div>
              <div className="flex items-center gap-2.5 pr-5 pl-1.5 py-1.5 rounded-full border border-emerald-100 bg-white shadow-sm shadow-emerald-500/5 text-sm font-medium text-slate-700">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Tag className="w-4 h-4 text-emerald-700" />
                </div>
                Members-Only Deals
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1 px-5 py-4 w-full rounded-2xl border border-gray-200 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium text-slate-700 shadow-sm"
                />
                <AppBtn className="cursor-pointer bg-linear-to-r h-15 w-full from-emerald-600 to-emerald-400 hover:from-emerald-700 hover:to-emerald-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 transition-all sm:w-auto group">
                  Subscribe{" "}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </AppBtn>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 font-medium px-1">
                <span className="text-emerald-400">*</span> Unsubscribe anytime.
                No spam, ever.
              </p>
            </div>
          </div>

          {/* Separator */}
          <Separator
            orientation="vertical"
            className="hidden lg:block h-auto w-px bg-emerald-100"
          />

          <div className="w-full lg:w-105 shrink-0 flex items-center">
            <div className="relative overflow-hidden bg-slate-900 rounded-[2rem] p-8 lg:p-10 shadow-2xl shadow-emerald-600/20 w-full border border-slate-800">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/20 blur-[60px] rounded-full pointer-events-none"></div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-teal-500/10 blur-[60px] rounded-full pointer-events-none"></div>

              <div className="relative z-10 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase">
                  <Smartphone className="w-3.5 h-3.5" /> Mobile App
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    Shop Faster on Our App
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Get app-exclusive deals & 15% off your first order.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="w-full cursor-pointer flex items-center gap-4 bg-slate-800/80 hover:bg-slate-700 transition-colors p-4 rounded-2xl border border-slate-700/50 group">
                    <Apple className="w-8 h-8 text-white group-hover:scale-105 transition-transform" />
                    <div className="text-left">
                      <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">
                        Download on
                      </div>
                      <div className="text-white font-bold text-lg leading-none">
                        App Store
                      </div>
                    </div>
                  </span>
                  <span className="w-full cursor-pointer flex items-center gap-4 bg-slate-800/80 hover:bg-slate-700 transition-colors p-4 rounded-2xl border border-slate-700/50 group">
                    <Play className="w-7 h-7 text-white group-hover:scale-105 transition-transform ml-0.5" />
                    <div className="text-left ml-0.5">
                      <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">
                        Get it on
                      </div>
                      <div className="text-white font-bold text-lg leading-none">
                        Google Play
                      </div>
                    </div>
                  </span>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                  <div className="text-sm font-medium text-slate-400">
                    <span className="text-slate-200">4.9</span> · 100K+
                    downloads
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

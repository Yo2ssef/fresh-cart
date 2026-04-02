"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
export default function CardDealHomePage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="relative overflow-hidden rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-700 p-6 lg:p-8 text-white shadow-md"
      >
        <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 h-48 w-48 rounded-full bg-white/10"></div>
        <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 h-48 w-48 rounded-full bg-white/10"></div>

        <div className="relative z-10 flex flex-col items-start gap-4">
          <div className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm">
            <span>🔥</span>
            <span>Deal of the Day</span>
          </div>

          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-1">
              Fresh Organic Fruits
            </h2>
            <p className="text-emerald-50 text-sm lg:text-base">
              Get up to 40% off on selected organic fruits
            </p>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <span className="text-2xl font-black">40% OFF</span>
            <span className="text-sm font-medium text-emerald-100">
              Use code: <span className="font-bold text-white">ORGANIC40</span>
            </span>
          </div>

          <button className="mt-4 flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-emerald-600 transition-transform hover:scale-105 active:scale-95">
            Shop Now <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative overflow-hidden rounded-2xl bg-linear-to-br from-orange-400 to-rose-500 p-6 lg:p-8 text-white shadow-md"
      >
        <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 h-48 w-48 rounded-full bg-white/10"></div>
        <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 h-48 w-48 rounded-full bg-white/10"></div>

        <div className="relative z-10 flex flex-col items-start gap-4">
          <div className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm">
            <span>✨</span>
            <span>New Arrivals</span>
          </div>

          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-1">
              Exotic Vegetables
            </h2>
            <p className="text-orange-50 text-sm lg:text-base">
              Discover our latest collection of premium vegetables
            </p>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <span className="text-2xl font-black">25% OFF</span>
            <span className="text-sm font-medium text-orange-100">
              Use code: <span className="font-bold text-white">FRESH25</span>
            </span>
          </div>

          <button className="mt-4 flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-orange-500 transition-transform hover:scale-105 active:scale-95">
            Explore Now <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </>
  );
}

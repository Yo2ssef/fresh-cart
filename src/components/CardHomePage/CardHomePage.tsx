"use client";
import { Headset, RefreshCcw, ShieldCheck, Truck } from "lucide-react";

import { motion } from "framer-motion";
export default function CardHomePage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
        className="flex items-center gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm"
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shrink-0">
          <Truck className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 text-sm lg:text-base">
            Free Shipping
          </h3>
          <p className="text-gray-500 text-xs lg:text-sm mt-0.5">
            On orders over 500 EGP
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="flex items-center gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm"
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-500 shrink-0">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 text-sm lg:text-base">
            Secure Payment
          </h3>
          <p className="text-gray-500 text-xs lg:text-sm mt-0.5">
            100% secure transactions
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="flex items-center gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm"
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-50 text-orange-500 shrink-0">
          <RefreshCcw className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 text-sm lg:text-base">
            Easy Returns
          </h3>
          <p className="text-gray-500 text-xs lg:text-sm mt-0.5">
            14-day return policy
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="flex items-center gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm"
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-50 text-purple-500 shrink-0">
          <Headset className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 text-sm lg:text-base">
            24/7 Support
          </h3>
          <p className="text-gray-500 text-xs lg:text-sm mt-0.5">
            Dedicated support team
          </p>
        </div>
      </motion.div>
    </>
  );
}

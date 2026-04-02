"use client";
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import imgSlider1 from "@images/home-slider.png";
import imgSlider2 from "@images/home-slider.png";
import imgSlider3 from "@images/home-slider.png";
import AppBtn from "../shared/AppBtn/AppBtn";
import { motion } from "framer-motion";
export default function HomeSlider() {
  const listSlider = [
    {
      title: "Fresh Products Delivered to your Door",
      description: "Get 20% off your first order",
      image: imgSlider1.src,
      buttons: [
        { label: "Shop Now", primary: true, textColor: "text-green-500" },
        { label: "View Deals", primary: false },
      ],
    },
    {
      title: "Premium Quality Guaranteed",
      description: "Fresh from farm to your table",
      image: imgSlider2.src,
      buttons: [
        { label: "Shop Now", primary: true, textColor: "text-blue-500" },
        { label: "Learn More", primary: false },
      ],
    },
    {
      title: "Fast & Free Delivery",
      description: "Same day delivery available",
      image: imgSlider3.src,
      buttons: [
        { label: "Order Now", primary: true, textColor: "text-purple-500" },
        { label: "Delivery Info", primary: false },
      ],
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
      style={
        {
          "--swiper-navigation-color": "#FFFFFF",
          "--swiper-navigation-size": "25px",
          "--swiper-pagination-color": "#FFFFFF",
          "--swiper-pagination-bullet-inactive-color": "#E8E8E8",
          "--swiper-pagination-bullet-inactive-opacity": "0.5",
          "--swiper-pagination-bullet-size": "10px",
        } as React.CSSProperties
      }
      // ---------------------------
      className="mySwiper"
    >
      {listSlider.map((e, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="relative h-96 w-full overflow-hidden">
              <Image
                src={e.image}
                alt={`Slide ${i}`}
                fill
                sizes="100vw"
                className="object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-green-500/60 z-10 flex flex-col items-center justify-center text-center px-4">
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-sm"
                >
                  {e.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl font-medium drop-shadow-sm"
                >
                  {e.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex items-center gap-3"
                >
                  {e.buttons?.map((btn, i) => (
                    <AppBtn
                      key={i}
                      className={`rounded-lg px-8 py-6 text-lg font-bold transition-transform shadow-sm hover:scale-105 ${
                        btn.primary
                          ? `bg-white ${btn.textColor} hover:bg-gray-50`
                          : "bg-transparent border-2 border-white/90 text-white hover:bg-white/10 hover:border-white"
                      }`}
                    >
                      {btn.label}
                    </AppBtn>
                  ))}
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

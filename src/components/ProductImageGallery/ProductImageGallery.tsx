"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImageGalleryProps {
  imageCover: string;
  images: string[];
  title: string;
}

export default function ProductImageGallery({
  imageCover,
  images,
  title,
}: ProductImageGalleryProps) {
  const [mainImage, setMainImage] = useState(imageCover);

  return (
    <>
      <div className="bg-white rounded-2xl p-4 flex justify-center items-center w-full aspect-square relative">
        <Image
          src={mainImage}
          alt={title || "Product cover"}
          loading="eager"
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {images?.map((e, i) => {
          return (
            <div
              key={i}
              onClick={() => setMainImage(e)}
              className={`relative min-w-20 w-20 h-20 bg-white border rounded-lg overflow-hidden shrink-0 cursor-pointer transition-colors duration-300 ${
                mainImage === e ? "border-green-500 shadow-sm" : "border-gray-100"
              }`}
            >
              <Image
                loading="eager"
                src={e}
                alt={`${title} thumbnail ${i + 1}`}
                fill
                className="object-contain p-1 hover:scale-110 transition-transform duration-300"
                sizes="80px"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

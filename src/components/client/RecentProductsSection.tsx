"use client";

import { getCommonData } from "@/data/commonData";
import Container from "@/lib/Container";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/grid";
import { Grid } from "swiper/modules";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import VRecentProductCard from "./VRecentProductCard";

const RecentProductsSection = () => {
  const products = getCommonData();
  const firstSlideProducts = products.slice(0, 6);
  const secondSlideProducts = products.slice(6, 10);

  const swiperRef = useRef<SwiperType | null>(null);
  const [activeButton, setActiveButton] = useState<"prev" | "next">("prev");

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
    setActiveButton("prev");
  };

  const handleNextClick = () => {
    swiperRef.current?.slideNext();
    setActiveButton("next");
  };

  return (
    <div className="mt-14">
      <Container>
        <div className="border-b mb-5 border-dashed">
          <h1 className="text-2xl font-medium">Recently Added</h1>
        </div>
        <div className="relative">
          {/* Custom Prev Button */}
          <button
            className={`absolute top-[-62px] right-[60px] px-3 py-2 z-10 rounded flex items-center justify-center ${
              activeButton === "prev"
                ? "bg-orange-600 text-white"
                : "bg-orange-300 text-gray-200"
            }`}
            aria-label="Previous slide"
            onClick={handlePrevClick}
          >
            <ArrowLeft size={20} />
          </button>

          {/* Custom Next Button */}
          <button
            className={`absolute top-[-62px] right-0 px-3 py-2 z-10 rounded flex items-center justify-center ${
              activeButton === "next"
                ? "bg-orange-600 text-white"
                : "bg-orange-300 text-gray-200"
            }`}
            aria-label="Next slide"
            onClick={handleNextClick}
          >
            <ArrowRight size={20} />
          </button>

          <SwiperComponent
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={30}
            modules={[Grid]}
          >
            {/* First slide with 6 products */}
            <SwiperSlide>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                  {firstSlideProducts.map((product) => (
                    <VRecentProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </SwiperSlide>

            {/* Second slide with remaining products */}
            <SwiperSlide>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                  {secondSlideProducts.map((product) => (
                    <VRecentProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          </SwiperComponent>
        </div>
      </Container>
    </div>
  );
};

export default RecentProductsSection;

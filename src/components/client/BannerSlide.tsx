"use client";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Styles from "../../styles/Global.module.css";
import Link from "next/link";
import Container from "@/lib/Container";

export const BannerSlide = () => {
  return (
    <div>
      <Container>
        <SwiperComponent
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
            <h1>Hello World</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Hello World</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Hello World</h1>
          </SwiperSlide>
        </SwiperComponent>
      </Container>
    </div>
  );
};

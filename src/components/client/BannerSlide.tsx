"use client";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import Container from "@/lib/Container";
import Styles from "../../styles/BannerSlide.module.css";
import { getCommonData } from "@/data/commonData";

export const BannerSlide = () => {
  const banner = getCommonData();

  return (
    <div className={`${Styles.bgContainer} py-8`}>
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
          <div>
            {banner.slice(0, 3).map((item, index) => (
              <div key={index}>
                {" "}
                <SwiperSlide>
                  <div className=" flex items-center justify-evenly flex-col lg:flex-row">
                    <div className="">
                      <h1 className="text-5xl lg:text-6xl font-bold max-w-[12ch]">
                        {item.title}
                      </h1>
                      <span className="text-3xl lg:text-4xl font-semibold mt-2 mb-6 block">
                        ${item.price}
                      </span>
                      <Link
                        className="bg-orange-600 px-8 py-3 text-lg text-white font-light rounded"
                        href="/"
                      >
                        Buy Now
                      </Link>
                    </div>
                    <div className=" shrink-0 mt-5 lg:mt-0">
                      <Image
                        src={item.image}
                        width={300}
                        height={250}
                        className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]"
                        alt={item.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </div>
        </SwiperComponent>
      </Container>
    </div>
  );
};

import Container from "@/lib/Container";
import React from "react";
import BannerImg from "../../../assets/images/electric-toothbrush.png";
import Image from "next/image";
import Link from "next/link";

const BannerAds = () => {
  return (
    <div className="mt-5">
      <Container>
        <Link href="/shop">
          {" "}
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-around bg-gray-100 p-3">
              <h1 className="text-lg lg:text-2xl uppercase">
                Shop And <span className=" font-bold">Save Big</span> On Hottest Electric Toothbrush
              </h1>
              <div className=" hidden lg:block">
                <div className="bg-orange-600 px-5 py-1 flex flex-col items-center rounded-md text-white select-none ">
                  <p>Starting At</p>
                  <span>$79.99</span>
                </div>
              </div>
              <Image
                className="w-[80px] h-[80px] object-cover"
                src={BannerImg}
                width={200}
                height={100}
                alt="Banner Ads"
              />
            </div>
          </div>
        </Link>
      </Container>
    </div>
  );
};

export default BannerAds;

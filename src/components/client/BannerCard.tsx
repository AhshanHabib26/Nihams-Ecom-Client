import { getCommonData } from "@/data/commonData";
import Container from "@/lib/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BannerCard = () => {
  const banner = getCommonData();

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  max-w-5xl mx-auto my-5">
          {banner.slice(7, 10).map((item) => (
            <div key={item.id}>
              <div className="flex items-center bg-gray-100 p-4 gap-6 rounded shadow">
                <Image
                  src={item.image}
                  width={120}
                  height={120}
                  alt={item.title}
                />
                <div>
                  <h1 className="text-lg font-semibold">{item.title}</h1>
                  <Link className="text-orange-600" href="/shop">Shop Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BannerCard;

import { getCommonData } from "@/data/commonData";
import Container from "@/lib/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BannerCard = () => {
  const banner = getCommonData();

  return (
    <Container>
      <div>
        {banner.slice(7, 10).map((item) => (
          <div key={item.id}>
            <div>
              <Image
                src={item.image}
                width={100}
                height={100}
                alt={item.title}
              />
              <h1>{item.title}</h1>
              <Link href="/shop">Shop Now</Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BannerCard;

import { getCommonData } from "@/data/commonData";
import Container from "@/lib/Container";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const WishlistPage = () => {
  const data = getCommonData();

  return (
    <div>
      <Container>
        <h1 className="text-center my-8 text-3xl font-semibold">Wishlist</h1>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {data.slice(0, 4).map((item) => (
              <div
                className=" shadow p-4 mb-5 flex items-center justify-between"
                key={item.id}
              >
                <div className="flex items-center gap-2">
                  <Image
                    className="w-[80px]"
                    src={item.image}
                    alt={item.title}
                  />
                  <h1 className="text-lg font-semibold">{item.title}</h1>
                </div>
                <div>
                  <Trash2 className=" text-rose-500" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WishlistPage;

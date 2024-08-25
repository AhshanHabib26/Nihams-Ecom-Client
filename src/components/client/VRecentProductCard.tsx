import { TProductProps } from "@/types/common.types";
import { Heart, Info, RefreshCw, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import React from "react";
import Styles from "../../styles/VRecentProductCard.module.css";

const VRecentProductCard: React.FC<TProductProps> = ({ product }) => {
  return (
    <div>
      {" "}
      <div
        className={`border-[1px] border-gray-200 p-4 rounded h-full ${Styles.VRecentProductCardContainer}`}
      >
        <p className="text-md text-orange-600">{product.category}</p>
        <h1 className="text-md font-medium my-1">{product.title}</h1>
        <div className="flex items-center justify-center my-3">
          <Image
            src={product.image}
            width={90}
            height={90}
            className={`w-[90px] h-[90px] opacity-70 ${Styles.VRecentProductCardImg}`}
            alt={product.title}
          />
        </div>
        <div className="flex items-center justify-between mt-3">
          <div>
            {product.offerPrice ? (
              <div className="flex items-center flex-col md:flex-row lg:flex-row md:gap-2 lg:gap-2 ">
                <p className="  line-through text-red-500">${product.price}</p>
                <p className=" text-lg font-medium">${product.offerPrice}</p>
              </div>
            ) : (
              <div>
                <p className=" text-lg font-medium">${product.price}</p>
              </div>
            )}
          </div>
          <div>
            <ShoppingBasket
              size={22}
              className="text-orange-600 cursor-pointer"
            />
          </div>
        </div>
        <div>
          <div
            className={`flex items-center justify-between bg-orange-600 rounded-t text-white w-full p-2 opacity-85 ${Styles.VRecentProductCardInfo}`}
          >
            <div className="flex items-center gap-1">
              <Heart size={18} />
              <p className="text-sm">Whishlist</p>
            </div>
            <div className="flex items-center gap-1">
              <RefreshCw size={18} />
              <p className="text-sm">Compare</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VRecentProductCard;

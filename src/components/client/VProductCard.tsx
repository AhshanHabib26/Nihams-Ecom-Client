import { TProductProps } from "@/types/common.types";
import { Heart, Info, RefreshCw, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import React from "react";
import Styles from "../../styles/VProductCard.module.css";

const VProductCard: React.FC<TProductProps> = ({ product }) => {
  return (
    <div
      className={`border-[1px] border-gray-200 p-4 rounded ${Styles.VProductCardContainer}`}
    >
      <p className="text-md text-orange-600">{product.category}</p>
      <h1 className="text-lg font-medium my-1">{product.title}</h1>
      <div className="flex items-center justify-center my-3">
        <Image
          src={product.image}
          width={150}
          height={150}
          className={`w-[150px] h-[120px] opacity-70 ${Styles.VProductCardImg}`}
          alt={product.title}
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <div>
          {product.offerPrice ? (
            <div className="flex items-center gap-2">
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
        <div className={`flex items-center justify-between bg-orange-600 rounded-t text-white w-full p-2 opacity-85 ${Styles.VProductCardInfo}`}>
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
  );
};

export default VProductCard;

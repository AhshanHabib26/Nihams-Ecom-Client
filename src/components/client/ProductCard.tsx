
import { Heart, RefreshCw, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import Styles from "../../styles/ProductCard.module.css";
import { TProductProps } from "@/types/common.types";

const ProductCard: React.FC<TProductProps> = ({ product }) => {
  return (
    <div>
      <div
        className={`${Styles.productContainer} border-[1px] border-gray-200 rounded h-full`}
      >
        <div className="flex p-6 items-center gap-2 h-full ">
          <Image
            src={product.image}
            width={120}
            height={120}
            className="w-[120px] h-[120px]"
            alt={product.title}
          />
          <div className="w-full h-full">
            <span className="text-orange-500">{product.category}</span>
            <h1 className="text-md font-medium ">{product.title}</h1>
            <div className="flex items-center justify-between my-2">
              <div>
                {product.offerPrice ? (
                  <div>
                    <p className="  line-through text-red-500">
                      ${product.price}
                    </p>
                    <p className=" text-lg font-medium">
                      ${product.offerPrice}
                    </p>
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
          </div>
        </div>
        <div
          className={`${Styles.cardInfoWrapper} w-full flex items-center justify-between bg-orange-600 p-2  text-white rounded-b`}
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
  );
};

export default ProductCard;

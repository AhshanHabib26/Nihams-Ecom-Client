import Container from "@/lib/Container";
import React from "react";
import PCategoryBtn from "./PCategoryBtn";
import ProductCard from "./ProductCard";
import { getCommonData } from "@/data/commonData";
import { TProduct } from "@/types/common.types";

const ProductContainer = () => {
  const products = getCommonData();

  return (
    <div className="mt-14">
      <Container>
        <PCategoryBtn />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-4 mt-8">
          {products.slice(0, 6).map((product: TProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProductContainer;

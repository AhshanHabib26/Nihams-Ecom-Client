import Container from "@/lib/Container";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCommonData } from "@/data/commonData";
import VProductCard from "./VProductCard";
import { TProduct } from "@/types/common.types";

const ProductTabContainer = () => {
  const products = getCommonData();

  return (
    <div className="mt-14">
      <Container>
        <div className=" mx-auto">
          <Tabs defaultValue="featured">
            <TabsList className="grid grid-cols-3 bg-orange-600 text-white max-w-xl mx-auto">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="on-sale">On Sale</TabsTrigger>
              <TabsTrigger value="top-rated">Top Rated</TabsTrigger>
            </TabsList>
            <TabsContent value="featured" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {products.slice(4, 10).map((product: TProduct) => (
                  <VProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="on-sale" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {products.slice(0, 5).map((product: TProduct) => (
                  <VProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="top-rated" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {products.slice(2, 8).map((product: TProduct) => (
                  <VProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default ProductTabContainer;

export type TProduct = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string | any;
  category: string;
  offerPrice?: number | undefined;
};

export type TProductProps = {
  product: TProduct;
};

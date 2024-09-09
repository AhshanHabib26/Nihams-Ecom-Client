import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { ReactNode } from "react";



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

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};



export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

export type TContainerProps = {
  children: ReactNode;
};

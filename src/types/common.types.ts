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
import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { ReactNode } from "react";

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

export type ResponseSuccessType = {
  data: any;
  meta?: TMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
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

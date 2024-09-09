import { TCoupon } from "@/types/coupon.type";
import { baseApi } from "./baseApi";
import { TMeta } from "@/types/common.types";

export const couponApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCoupon: build.mutation({
      query: (data) => ({
        url: "/coupon",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Coupon"],
    }),

    // getAllCoupons: build.query({
    //   query: (arg: Record<string, any>) => ({
    //     url: "/coupon",
    //     method: "GET",
    //     params: arg,
    //   }),
    //   transformResponse: (response: TCoupon, meta: TMeta) => {
    //     return {
    //       doctors: response,
    //       meta,
    //     };
    //   },
    //   providesTags: ["Coupon"],
    // }),

    deleteCoupon: build.mutation({
      query: (id) => ({
        url: `/coupon/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Coupon"],
    }),
    //get single doctor
    getCoupon: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/coupon/${id}`,
        method: "GET",
      }),
      providesTags: ["Coupon"],
    }),
    // update a doctor
    updateCoupon: build.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/coupon/${data.id}`,
          method: "PATCH",
          data: data.body,
        };
      },
      invalidatesTags: ["Coupon"],
    }),
  }),
});

export const {
  useCreateCouponMutation,
  useDeleteCouponMutation,
  // useGetAllCouponsQuery,
  useGetCouponQuery,
  useUpdateCouponMutation,
} = couponApi;

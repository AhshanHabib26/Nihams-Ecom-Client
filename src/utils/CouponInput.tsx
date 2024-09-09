"use client";

import React, { FormEvent, useState } from "react";

const CouponInput = () => {
  const [coupon, setCoupon] = useState("");

  const handleCoupon = (e: FormEvent) => {
    e.preventDefault();
    // console.log(coupon);
  };

  return (
    <div>
      <form onSubmit={handleCoupon}>
        <input
          type="text"
          name="coupon"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Coupon code"
          className="border border-gray-300 w-[250px] h-[50px] pl-2 rounded-l outline-none"
        />
        <button
          className="bg-slate-800 h-[50px] p-2 text-white rounded-r"
          type="submit"
        >
          Apply Coupon
        </button>
      </form>
    </div>
  );
};

export default CouponInput;

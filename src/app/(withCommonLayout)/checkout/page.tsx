import BillingInfo from "@/components/client/checkout/BillingInfo";
import OrderInfo from "@/components/client/checkout/OrderInfo";
import Container from "@/lib/Container";
import Link from "next/link";
import React from "react";

const CheckoutPage = () => {
  return (
    <div>
      <Container>
        <h1 className="text-center my-8 text-3xl font-semibold">Checkout</h1>
        <div className="bg-orange-300 p-4 rounded border-l-[10px] border-orange-600">
          <p className="text-lg">
            Returning customer?{" "}
            <Link className="font-semibold" href="/login">
              Click here to login
            </Link>
          </p>
        </div>
        <div className="my-10">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-7">
              <BillingInfo />
            </div>
            <div className="col-span-12 lg:col-span-5">
              <OrderInfo />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;

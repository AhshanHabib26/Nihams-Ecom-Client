import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { getCommonData } from "@/data/commonData";
import Container from "@/lib/Container";
import { X } from "lucide-react";
import React from "react";

const OrderInfo = () => {
  const data = getCommonData();

  return (
    <div className="shadow bg-gray-50 rounded-md p-4">
      <h1 className="text-2xl font-semibold mb-3">Your order</h1>
      <Container>
        <div>
          <div className="flex items-center justify-between">
            <h1>Product</h1>
            <h1>Subtotal</h1>
          </div>
          <hr className="border-[0.5] border-gray-200 my-3" />
          <div>
            {data.slice(0, 4).map((item) => (
              <div
                className="flex items-center justify-between border-b border-dashed"
                key={item.id}
              >
                <div className="my-3">
                  <h1>{item.title}</h1>
                  <div className="flex items-center gap-2">
                    <p>{item.quantity}</p>
                    <X size={15} />
                    <p>{item.price}</p>
                  </div>
                </div>
                <h1>${Math.floor(item.quantity * item.price)}</h1>
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center justify-between my-3">
              <h1>Subtotal</h1>
              <p>$6076</p>
            </div>
            <div className="flex items-center justify-between">
              <h1>Estimated Shipping</h1>
              <p>$15</p>
            </div>
            <hr className="border-[0.5] border-gray-200 my-3" />
            <div>
              <div className="flex items-center justify-between">
                <h1>Total</h1>
                <p>$6091</p>
              </div>
            </div>
          </div>
          <div>
            <div className="items-top flex space-x-2 mt-8 mb-5">
              <Checkbox id="mannual" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="mannual"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Direct bank transfer
                </label>
              </div>
            </div>
            <p className="bg-gray-100 text-[15px] font-light p-4 rounded-md">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </div>
          <div>
            <div className="items-top flex space-x-2 my-5">
              <Checkbox id="mannual" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="mannual"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Credit Card (Stripe)
                </label>
              </div>
            </div>
            <p className="bg-red-200 text-[15px] font-light p-4 rounded-md">
              Stripe will be added soon
            </p>
          </div>
          <div>
            <div className="items-top flex space-x-2 my-5">
              <Checkbox id="mannual" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="mannual"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I have read and agree to the website terms and conditions
                </label>
              </div>
            </div>
          </div>
          <div>
            <Button className=" w-full h-[50px] text-lg bg-orange-600 hover:bg-orange-500">
              Place Order
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrderInfo;

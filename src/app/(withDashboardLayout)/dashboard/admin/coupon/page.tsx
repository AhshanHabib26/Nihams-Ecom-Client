"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddCoupon from "@/components/dashboard/coupon/AddCoupon";
import { Button } from "@/components/ui/button";

const CouponPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCouponDialog = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex items-end justify-end ">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              className="bg-orange-600 p-3 text-md font-normal text-white rounded-md"
              onClick={() => setIsOpen(true)}
            >
              Add Coupon
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md rounded-md ">
            <DialogHeader>
              <DialogTitle>Add New Coupon</DialogTitle>
              <DialogDescription>
                <AddCoupon onSuccess={handleCouponDialog} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <hr className=" my-5 border-dashed border-gray-300" />
    </div>
  );
};

export default CouponPage;

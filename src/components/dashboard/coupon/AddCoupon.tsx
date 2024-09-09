"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { TResponse } from "@/types/common.types";
import { useCreateCouponMutation } from "@/redux/api/couponApi";

interface ICouponProps {
  onSuccess: () => void;
}

const AddCoupon: React.FC<ICouponProps> = ({ onSuccess }) => {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [couponName, setCouponName] = useState<string>("");
  const [discount, setDiscount] = useState<string | "">("");
  const [couponType, setCouponType] = useState<string>("");

  const [createCoupon] = useCreateCouponMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Creating coupon...");

    // Convert discount to number and validate
    const convertNum = Number(discount);

    if (isNaN(convertNum) || convertNum <= 0) {
      return toast.error("Discount value must be a positive number!", {
        id: toastId,
        duration: 1500,
      });
    }

    const couponData = {
      code: couponName,
      discount: convertNum,
      startDate,
      endDate,
      type: couponType, 
    };

    console.log("Coupon Data:", couponData); 

    if (!couponName || !startDate || !endDate || !couponType) {
      return toast.error("All fields are required", {
        id: toastId,
        duration: 1500,
      });
    }

    try {
      const res = (await createCoupon(couponData)) as TResponse<any>;
      console.log("Response:", res); // Log the response for debugging

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId, duration: 1500 });
      } else {
        toast.success("Coupon created successfully", {
          id: toastId,
          duration: 1000,
        });
        onSuccess();
      }
    } catch (err: unknown) {
      console.error("Error:", err); 
      if (err instanceof Error) {
        toast.error(`Error: ${err.message}`, { id: toastId, duration: 1500 });
      } else {
        toast.error("Something went wrong", { id: toastId, duration: 1500 });
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <Label className="font-normal flex items-start" htmlFor="name">
            Coupon Code
          </Label>
          <Input
            type="text"
            id="name"
            placeholder="Coupon code"
            value={couponName}
            onChange={(e) => setCouponName(e.target.value)}
          />
        </div>
        <div className="my-3">
          <Label className="flex items-start font-normal" htmlFor="discount">
            Discount (in %)
          </Label>
          <Input
            type="text"
            id="discount"
            value={discount}
            placeholder="Discount number"
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <Label className="flex items-start font-normal" htmlFor="startDate">
            Start Date
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !startDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? (
                  format(startDate, "PPP")
                ) : (
                  <span>Pick a start date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-col my-3">
          <Label className="flex items-start font-normal" htmlFor="endDate">
            End Date
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !endDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? (
                  format(endDate, "PPP")
                ) : (
                  <span>Pick an end date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="my-3">
          <Label className="flex items-start font-normal" htmlFor="couponType">
            Coupon Type
          </Label>
          <Select
            name="couponType"
            value={couponType}
            onValueChange={(value) => setCouponType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select coupon type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="percentage">Percentage</SelectItem>
                <SelectItem value="fixed">Fixed</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-start mt-3">
          <Button type="submit">Add Coupon</Button>
        </div>
      </form>
    </div>
  );
};

export default AddCoupon;

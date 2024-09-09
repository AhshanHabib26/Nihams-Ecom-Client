"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const countries = [
  { value: "bangladesh", label: "Bangladesh" },
  { value: "pakistan", label: "Pakistan" },
  { value: "india", label: "India" },
  { value: "china", label: "China" },
  { value: "us", label: "United States" },
  { value: "russia", label: "Russia" },
  { value: "indonesia", label: "Indonesia" },
  { value: "nigeria", label: "Nigeria" },
  { value: "brazil", label: "Brazil" },
  { value: "mexico", label: "Mexico" },
  { value: "japan", label: "Japan" },
  { value: "ethiopia", label: "Ethiopia" },
  { value: "philippines", label: "Philippines" },
  { value: "egypt", label: "Egypt" },
  { value: "vietnam", label: "Vietnam" },
];

const BillingInfo = () => {
  return (
    <div className="shadow-md border border-gray-100 rounded-md p-4">
      <h1 className="text-2xl font-semibold mb-3">Billing Address</h1>
      <form action="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="firstName">First name</Label>
            <Input type="text" id="firstName" />
          </div>
          <div>
            <Label htmlFor="lastName">Last name</Label>
            <Input type="text" id="lastName" />
          </div>
        </div>
        <div className="my-3">
          <Label htmlFor="country">Country / Region</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Bangladesh" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.value} value={country.value}>
                  {country.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="lastName">Street address</Label>
          <Input type="text" id="lastName" />
        </div>
        <div className="my-3">
          <Label htmlFor="lastName">Town / City</Label>
          <Input type="text" id="lastName" />
        </div>
        <div>
          <Label htmlFor="lastName">State</Label>
          <Input type="text" id="lastName" />
        </div>
        <div className="my-3">
          <Label htmlFor="lastName">Zip Code</Label>
          <Input type="text" id="lastName" />
        </div>
        <div>
          <Label htmlFor="lastName">Phone</Label>
          <Input type="text" id="lastName" />
        </div>
        <div className="my-3">
          <Label htmlFor="lastName">Email</Label>
          <Input type="text" id="lastName" />
        </div>
        <div>
          <Label htmlFor="lastName">Order notes (Optional)</Label>
          <Textarea />
        </div>
      </form>
    </div>
  );
};

export default BillingInfo;

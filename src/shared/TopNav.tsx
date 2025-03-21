"use client";

import useUserInfo from "@/hooks/useUserInfo";
import { Cctv, Database, MapPin, PartyPopper, ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const TopNav = () => {
  const userInfo = useUserInfo();


  return (
    <div>
      <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b-[1px]">
        <div className="flex items-center gap-2">
          <PartyPopper size={20} />
          <h1 className=" text-sm">Welcome to Nihams eCommmerce Store</h1>
        </div>
        <div className=" hidden lg:block">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <MapPin size={18} />
              <p className="text-sm"> Store Locator</p>
            </div>
            <div className="flex items-center gap-1">
              <Cctv size={18} />
              <p className=" text-sm">Track Your Order</p>
            </div>
            <div>
              <Link href="/shop" className="flex items-center gap-1">
                <ShoppingBag size={18} />
                <p className="text-sm">Shop</p>
              </Link>
            </div>
            <div>
              {userInfo?.role === "admin" ? (
                <div>
                  <Link
                    className="flex items-center gap-1"
                    href="/dashboard/admin"
                  >
                    <Database size={18} />
                    <p className=" text-sm">Dashboard</p>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;

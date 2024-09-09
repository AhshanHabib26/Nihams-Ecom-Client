"use client";

import React, { useEffect, useState } from "react";
import { Heart, LogOut, Search, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";
import Styles from "../styles/MidNav.module.css";
import Logo from "../assets/icons/nihams-logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/services/actions/logoutUser";
import useUserInfo from "@/hooks/useUserInfo";
import { SheetTrigger } from "@/components/ui/sheet";
import MenuCartBtn from "@/components/client/cart/MenuCartBtn";

const MidNav = () => {
  const [trackUserInfo, setTrackUserInfo] = useState<any | null>(null);
  const [open, setOpen] = useState(false);
  const userInfo = useUserInfo();
  const router = useRouter();

  useEffect(() => {
    setTrackUserInfo(userInfo);
  }, [userInfo]);

  const handleLogOut = () => {
    logoutUser(router);
    setTrackUserInfo(null);
  };

  const [visible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  const handleOpenCart = () => {
    setOpen(true);
  };

  const handleCloseCart = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 px-6 py-3">
        <Link href="/">
          <Image src={Logo} width={180} height={180} alt="Nihams Mart Logo" />
        </Link>
        <div className={`${Styles.inputContainer} hidden lg:block`}>
          <input
            type="text"
            className={Styles.inputBox}
            placeholder="Search For Products"
          />
          <Search className={Styles.inputBtn} />
        </div>
        <div className="flex items-center justify-end gap-3">
          <Search
            size={25}
            className="block lg:hidden cursor-pointer"
            onClick={toggleVisibility}
          />
          <Heart size={25} />

          <button onClick={handleOpenCart}>
            <ShoppingCart size={25} />
          </button>

          {trackUserInfo?.userId ? (
            <LogOut
              className=" cursor-pointer"
              onClick={handleLogOut}
              size={25}
            />
          ) : (
            <Link href="/login">
              <UserRound size={25} />
            </Link>
          )}
        </div>
      </div>
      <div>
        <div
          className={`${Styles.mobileInputContainer} ${
            visible ? Styles.visible : ""
          }`}
        >
          <input
            type="text"
            className={Styles.mobileInputBox}
            placeholder="Search For Products"
          />
          <Search
            className={Styles.mobileInputBtn}
            onClick={toggleVisibility}
          />
        </div>
      </div>
      <MenuCartBtn open={open} onClose={handleCloseCart} />
    </div>
  );
};

export default MidNav;

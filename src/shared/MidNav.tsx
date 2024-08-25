"use client";

import React, { useEffect, useState } from "react";
import { Heart, LogOut, Search, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";
import Styles from "../styles/MidNav.module.css";
import Logo from "../assets/icons/nihams-logo.png";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  logout,
  setCredentials,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";
import Spinner from "@/loader/Spinner";

const MidNav = () => {
  const [visible, setIsVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
    setLoading(false);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setIsLoggedIn(false);
  };

  const toggleVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 px-6 py-4">
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
          <ShoppingCart size={25} />
          {isLoggedIn ? (
            <LogOut
              onClick={handleLogout}
              size={25}
              className="text-orange-600 cursor-pointer"
            />
          ) : (
            <Link href="login">
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
    </div>
  );
};

export default MidNav;

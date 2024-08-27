"use client";

import React, { useEffect, useState } from "react";
import { Heart, LogOut, Search, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";
import Styles from "../styles/MidNav.module.css";
import Logo from "../assets/icons/nihams-logo.png";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";

const MidNav = () => {
  const [visible, setIsVisible] = useState(false);
  const dispatch = useAppDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      setIsLoggedIn(true);
    }

    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem("accessToken");
      if (updatedToken) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setIsLoggedIn(false);
  };

  const toggleVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
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

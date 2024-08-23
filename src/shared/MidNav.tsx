"use client";

import React, { useState } from "react";
import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";
import Styles from "../styles/MidNav.module.css";

const MidNav = () => {
  const [visible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 px-6 py-5">
        <div>
          <h1 className="text-2xl lg:text-3xl font-extrabold">Nihams Ecom</h1>
        </div>
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
          <Link href="login">
            <UserRound size={25} />
          </Link>
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

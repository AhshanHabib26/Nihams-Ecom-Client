import React from "react";
import Styles from "../styles/Spinner.module.css";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className={Styles.loader}></div>
    </div>
  );
};

export default Spinner;

import Container from "@/lib/Container";
import { Send } from "lucide-react";
import React from "react";
import Styles from "../../styles/Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className=" mt-14 bg-orange-500 p-4">
      <Container>
        <div className="flex items-center lg:justify-between justify-center flex-col lg:flex-row gap-2">
          <div className="flex items-center gap-4">
            <Send size={20} />
            <p className="text-xl font-semibold">Sign up to Newsletter</p>
          </div>
          <div>
            <p className="text-md">
              ..and receive{" "}
              <span className=" font-semibold">
                $20 coupon for first shopping
              </span>
            </p>
          </div>
          <div className={Styles.SubscribeContainer}>
            <input
              className={Styles.SubscribeInput}
              placeholder="Enter your email address"
              type="email"
            />
            <input
              className={Styles.SubscribeBtn}
              type="submit"
              value="SignUp"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;

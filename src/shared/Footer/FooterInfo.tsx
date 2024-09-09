import Container from "@/lib/Container";
import { Copyright } from "lucide-react";
import Link from "next/link";
import React from "react";

const FooterInfo = () => {
  const getYear = new Date().getFullYear();
  return (
    <div  className=" bg-orange-600 p-3 text-white">
      <Container>
        <div className="flex items-start lg:items-center justify-center gap-1">
          <Copyright size={16} className="mt-1 lg:mt-0" />
          <p className="text-md poppins-normal">
          2023 - {getYear} All rights reserved by{" "}
            <Link href="/" className=" font-semibold  hover:underline">
              Nihams Mart
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default FooterInfo;

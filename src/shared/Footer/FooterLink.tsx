import React from "react";
import Container from "@/lib/Container";
import logo from "../../assets/icons/nihams-logo.png";
import Image from "next/image";
import {
  FaLinkedin,
  FaRss,
  FaSquareFacebook,
  FaSquarePinterest,
  FaSquareWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Link from "next/link";

const productLink = {
  title: "Choose Your Product",
  categories: [
    { title: "Laptop & Computers", href: "/" },
    { title: "Camera & Photography", href: "/" },
    { title: "Home Theaters", href: "/" },
    { title: "Smart Phones & Tablets", href: "/" },
    { title: "Vide Games & Consoles", href: "/" },
    { title: "DVD Players", href: "/" },
    { title: "Audio-video Accessories", href: "/" },
  ],
};

const usefulLink = {
  title: "Useful Link",
  categories: [
    { title: "About", href: "/" },
    { title: "Contact", href: "/" },
    { title: "Wishlist", href: "/" },
    { title: "Compare", href: "/" },
    { title: "FAQ", href: "/" },
    { title: "Store Directory", href: "/" },
  ],
};

const cutomerCare = {
  title: "Customer Care",
  categories: [
    { title: "My Account", href: "/" },
    { title: "Track Your Order", href: "/" },
    { title: "Customer Service", href: "/" },
    { title: "Returns & Exchange", href: "/" },
    { title: "Product Support", href: "/" },
  ],
};

const FooterLink = () => {
  return (
    <div className="my-10">
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div>
            <div>
              <Image src={logo} alt="Website logo" className="w-[180px]" />
              <p>Shop Smart, Live Better</p>
            </div>
            <div className="flex items-center gap-3 my-3 cursor-pointer">
              <FaSquareFacebook size={20} className=" hover:text-blue-600" />
              <FaXTwitter size={20} className=" hover:text-gray-600" />
              <FaLinkedin size={20} className=" hover:text-blue-700" />
              <FaSquarePinterest size={20} className=" hover:text-rose-600" />
              <FaSquareWhatsapp size={20} className=" hover:text-green-600" />
              <FaYoutube size={20} className=" hover:text-red-500" />
              <FaRss size={20} className=" hover:text-orange-600" />
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold">{productLink.title}</h1>
            <div>
              {productLink.categories.map((i, index) => (
                <div className="mb-1" key={index}>
                  <Link
                    className="text-md hover:text-orange-500 cursor-pointer"
                    href={i.href}
                  >
                    {i.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold">{usefulLink.title}</h1>
            <div>
              {usefulLink.categories.map((i, index) => (
                <div className="mb-1" key={index}>
                  <Link
                    className="text-md hover:text-orange-500 cursor-pointer"
                    href={i.href}
                  >
                    {i.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold">{cutomerCare.title}</h1>
            <div>
              {cutomerCare.categories.map((i, index) => (
                <div className="mb-1" key={index}>
                  <Link
                    className="text-md hover:text-orange-500 cursor-pointer"
                    href={i.href}
                  >
                    {i.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterLink;

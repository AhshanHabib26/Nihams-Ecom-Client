"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Menu,
  Tv,
  Smartphone,
  MonitorSmartphone,
  Camera,
  Car,
  BookText,
  Gamepad2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const menuItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "TV & Audio",
    href: "/",
    icon: Tv,
    subcategories: [
      { title: "Smart Tvs", href: "/" },
      { title: "Speakers", href: "/" },
      { title: "Home Theaters", href: "/" },
      { title: "Headphones", href: "/" },
      { title: "Projectors", href: "/" },
      { title: "DVD Players", href: "/" },
      { title: "Audio-video Accessories", href: "/" },
    ],
  },
  {
    title: "Smart Phones",
    href: "/",
    icon: Smartphone,
    subcategories: [
      { title: "Headsets", href: "/" },
      { title: "Cables & Chargers", href: "/" },
      { title: "Electronics Accessories", href: "/" },
      { title: "Selfie Sticks", href: "/" },
      { title: "Internal Batteries", href: "/" },
    ],
  },
  {
    title: "Laptop & Desktops",
    href: "/",
    icon: MonitorSmartphone,
    subcategories: [
      { title: "Laptops & Desktops", href: "/" },
      { title: "Gaming Laptops", href: "/" },
      { title: "Budget Laptops", href: "/" },
      { title: "Business Laptops", href: "/" },
      { title: "2-in-1 Laptops", href: "/" },
      { title: "PC Accessories", href: "/" },
    ],
  },
  {
    title: "Cameras & Accessories",
    href: "/",
    icon: Camera,
    subcategories: [
      { title: "DSLR Cameras", href: "/" },
      { title: "Digital Cameras", href: "/" },
      { title: "Security & Surveillance", href: "/" },
      { title: "Camcorders", href: "/" },
      { title: "Consoles", href: "/" },
    ],
  },
  {
    title: "GPS & Car",
    href: "/",
    icon: Car,
    subcategories: [
      { title: "Music Systems", href: "/" },
      { title: "Video Systems", href: "/" },
      { title: "Speakers", href: "/" },
      { title: "Car Monitors", href: "/" },
      { title: "Car Parts", href: "/" },
      { title: "Monitoring", href: "/" },
      { title: "Network Jammers", href: "/" },
      { title: "Car Accessories", href: "/" },
      { title: "Audio Products", href: "/" },
    ],
  },
  {
    title: "Books",
    href: "/",
    icon: BookText,
    subcategories: [
      { title: "Arts & Photography", href: "/" },
      { title: "Biographies", href: "/" },
      { title: "Calendars", href: "/" },
      { title: "Children's Books", href: "/" },
      { title: "Education & Teaching", href: "/" },
      { title: "Health & Fitness", href: "/" },
      { title: "History", href: "/" },
      { title: "Law", href: "/" },
      { title: "Medical", href: "/" },
      { title: "Reference", href: "/" },
    ],
  },
  {
    title: "Movies & Games",
    href: "/",
    icon: Gamepad2,
    subcategories: [
      { title: "All Movies", href: "/" },
      { title: "TV Shows", href: "/" },
      { title: "Blu-ray", href: "/" },
      { title: "4K Ultra HD", href: "/" },
      { title: "New Releases", href: "/" },
      { title: "Pre-orders", href: "/" },
      { title: "Kids & Family", href: "/" },
    ],
  },
];

const MainNavbar = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const handleCategoryClick = (title: string | null) => {
    setOpenCategory(openCategory === title ? null : title);
  };

  return (
    <div>
      <div className="flex w-full flex-col">
        <header className="flex h-14 items-center bg-orange-600 text-white px-4 md:px-6">
          <nav className="hidden w-full items-center justify-center flex-col gap-2 text-lg font-medium md:flex md:flex-row md:gap-2 md:text-sm lg:gap-5">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative group text-[16px]"
                onMouseEnter={() =>
                  item.subcategories && handleCategoryClick(item.title)
                }
                onMouseLeave={() =>
                  item.subcategories && handleCategoryClick(null)
                }
              >
                <button className="flex items-center gap-1">
                  {item.title}
                  {item.subcategories && <ChevronDown className="h-4 w-4" />}
                </button>
                {/* Subcategories dropdown */}
                {item.subcategories && (
                  <div
                    className={`absolute left-0 mt-4 bg-white shadow-xl p-4 z-10 transition-all duration-300 ease-in-out overflow-hidden ${
                      openCategory === item.title
                        ? "max-h-[70vh] opacity-100 w-[250px]"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col space-y-2">
                      {item.subcategories.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block py-1 text-black hover:text-orange-600 whitespace-nowrap"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="default"
                size="icon"
                className="shrink-0 md:hidden bg-transparent text-white hover:bg-transparent"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[350px] overflow-auto p-0">
              <nav className="grid text-md font-medium mt-6">
                {menuItems.map((item) => (
                  <div
                    key={item.title}
                    className="relative group border-b-[1px] border-gray-100 py-2 px-3"
                  >
                    <button
                      onClick={() =>
                        item.subcategories && handleCategoryClick(item.title)
                      }
                      className="flex w-full items-center justify-between hover:text-orange-600"
                    >
                      <span>{item.title}</span>
                      {item.subcategories &&
                        (openCategory === item.title ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        ))}
                    </button>

                    <div
                      className={` mt-2 transition-all duration-300 ease-in-out overflow-auto ${
                        openCategory === item.title
                          ? "max-h-screen opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.subcategories &&
                        item.subcategories.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block py-2 border-t-[1px] hover:text-orange-600 "
                          >
                            {subItem.title}
                          </Link>
                        ))}
                    </div>
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  );
};

export default MainNavbar;

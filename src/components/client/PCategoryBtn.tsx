import Link from "next/link";
import React from "react";

const category = [
  { id: "1", title: "Best Deals", href: "/" },
  { id: "2", title: "TV & Audio", href: "/shop" },
  { id: "3", title: "Smart Phones", href: "/shop" },
  { id: "4", title: "Laptop & Desktops", href: "/shop" },
  { id: "5", title: "Camera", href: "/shop" },
  { id: "6", title: "GPS & Car", href: "/shop" },
  { id: "7", title: "Books", href: "/shop" },
  { id: "8", title: "Movies", href: "/shop" },
  { id: "9", title: "Accessories", href: "/shop" },
];

const PCategoryBtn = () => {
  return (
    <div className="max-w-6xl mx-auto border-b-[1px] border-gray-200">
      <div className="flex overflow-x-auto space-x-5 py-2 px-4 scrollbar-thin scrollbar-thumb-orange-600 scrollbar-track-orange-50 select-none">
        {category.map((item, index) => (
          <div
            key={item.id}
            className={`relative mb-3 ${
              index === 0 ? "text-orange-600" : ""
            } hover:text-orange-600 flex-shrink-0`}
          >
            <Link href={item.href} className="block">
              {item.title}
            </Link>
            {index === 0 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-1">
                <svg
                  className="h-3 w-3 text-orange-600 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PCategoryBtn;

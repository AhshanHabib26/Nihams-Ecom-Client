import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { getCommonData } from "@/data/commonData";
import Image from "next/image";
import { Trash2, X } from "lucide-react";
import Link from "next/link";

interface IMenuCartBtnProps {
  open: boolean;
  onClose: () => void;
}

const MenuCartBtn: React.FC<IMenuCartBtnProps> = ({ open, onClose }) => {
  const data = getCommonData();

  const handleClose = () => {
    onClose();
  };
  

  return (
    <div>
      <Sheet open={open} onOpenChange={onClose}>
        <SheetContent className="w-[350px] flex flex-col scrollbar-thumb-orange-700 scrollbar-track-gray-100 scrollbar-thin overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Cart Item</SheetTitle>
          </SheetHeader>

          <div className="flex-grow">
            {data.slice(0, 4).map((item) => (
              <div
                className="flex gap-2 items-center border border-dashed border-gray-200 mb-2 p-2 rounded-md"
                key={item.id}
              >
                <Image
                  className="w-[50px] h-[50px] flex-shrink-0"
                  src={item.image}
                  alt={item.title}
                />
                <div className="flex flex-col w-full">
                  <h1 className="text-md font-light">{item.title}</h1>
                  <div className="flex items-center gap-2">
                    <p className="text-md">1</p>
                    <X size={15} className="text-orange-500" />
                    <p className="text-md font-semibold">${item.price}</p>
                  </div>
                  <button className="flex items-end justify-end">
                    <Trash2
                      size={16}
                      className="text-rose-500 cursor-pointer"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Buttons - Always at the bottom */}
          <div className="sticky bottom-0 bg-white py-3">
            <div className="flex items-center justify-between px-4">
              <Link
                href="/cart"
                onClick={handleClose}
                className="bg-rose-600 px-4 py-3 text-white text-md font-medium rounded hover:bg-rose-500"
              >
                View Cart
              </Link>
              <Link
                href="/checkout"
                onClick={handleClose}
                className="bg-green-600 px-4 py-3 text-white text-md font-medium rounded hover:bg-green-500"
              >
                Checkout
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuCartBtn;

import { getCommonData } from "@/data/commonData";
import Container from "@/lib/Container";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import CouponInput from "@/utils/CouponInput";
import Link from "next/link";

const CartPage = () => {
  const data = getCommonData();

  return (
    <div>
      <Container>
        <h1 className="text-center my-8 text-3xl font-semibold">Cart</h1>
        <div className="max-w-6xl mx-auto">
          <div className=" border border-gray-100">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Product</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead className="text-right">Subtotal</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.slice(0, 5).map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className=" w-full">
                      <div className="flex items-center flex-col lg:flex-row gap-2">
                        <Image
                          src={item.image}
                          alt={item.title}
                          className="w-[50px]"
                        />
                        <div>
                          <h1 className="text-[14px] lg:text-lg font-light flex">
                            {item.title}
                          </h1>
                          <p className=" text-sm bg-gray-200 inline-block p-1 rounded text-gray-800 font-extralight">
                            {item.category}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="flex items-center font-semibold">
                        ${item.price}
                      </p>
                    </TableCell>
                    <TableCell className=" w-full">
                      <div className="flex items-center gap-2 border px-4 py-2 rounded border-dashed border-gray-300">
                        <button>
                          <Plus size={18} className="text-gray-600" />
                        </button>
                        <p>1</p>
                        <button>
                          <Minus size={18} className="text-gray-600" />
                        </button>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">$1250.00</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between my-8 flex-col lg:flex-row">
            <CouponInput />
            <div>
              <Link
                className="bg-orange-600 hover:bg-orange-500 p-4 text-lg font-medium text-white rounded mt-5 inline-block"
                href="/checkout"
              >
                Proceed to checkout
              </Link>
            </div>
          </div>
          <div className=" flex items-end justify-end mt-10">
            <div className="inline-block w-[450px]">
              <h1 className="text-xl font-semibold p-2">Cart Totals</h1>
              <hr className="border-[0.5] border-gray-200" />
              <div>
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <h2>Subtotal</h2>
                    <p className="text-md font-semibold">$4850</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <h2>Estimated Shipping</h2>
                    <p className="text-md font-semibold">$15</p>
                  </div>
                </div>
                <hr className="border-[0.5] border-gray-100" />
                <div className="px-3 py-1 flex items-center justify-between">
                  <h2 className="text-md font-semibold">Total</h2>
                  <p className="text-md font-semibold">$4896</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;

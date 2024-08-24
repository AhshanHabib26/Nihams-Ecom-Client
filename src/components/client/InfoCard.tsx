import Container from "@/lib/Container";
import { DollarSign, HandHeart, RefreshCcw, Tag, Truck } from "lucide-react";
import React from "react";

const infoItem = [
  {
    id: "1",
    title: "Free Delievry",
    slogan: "form $50",
    icon: Truck,
  },
  {
    id: "2",
    title: "99% Positive",
    slogan: "feedbacks",
    icon: HandHeart,
  },
  {
    id: "3",
    title: "365 Days",
    slogan: "for free return",
    icon: RefreshCcw,
  },
  {
    id: "4",
    title: "Payment",
    slogan: "secure System",
    icon: DollarSign,
  },
  {
    id: "5",
    title: "Always Best",
    slogan: "quality",
    icon: Tag,
  },
];

const InfoCard = () => {
  return (
    <div className="mt-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 border-[1px] border-gray-200 shadow rounded">
          {infoItem.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center justify-center gap-5 p-5 
                border-b-[1px] border-gray-200 
                lg:border-b-0 lg:border-r-[1px]  select-none
                ${index === infoItem.length - 1 ? "lg:border-r-0" : ""}`}
            >
              <item.icon className="h-7 w-7 text-orange-600" />
              <div>
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <span className="text-md text-orange-600">{item.slogan}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default InfoCard;

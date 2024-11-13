import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";

interface ItemP {
  Item: {
    id: number;
    title: string;
    icon: React.ElementType;
    number: number;
    growth: number;
    state: string;
    from: string;
    color: string;
    bgColor: string;
  };
}

const UsersStat: React.FC<ItemP> = ({ Item }) => {
  const IconComponent = Item.icon;

  return (
    <div className="min-w-[200px] p-4 bg-white border rounded-10 relative md:flex-grow">
      <p className="text-sm text-nowrap font-semibold opacity-70 lg:text-base">
        {Item.title}
      </p>
      <p className="font-bold text-[22px] lg:text-[28px] mt-2">{Item.number}</p>

      <div
        className="icon absolute top-2 right-2 p-2 rounded-20"
        style={{ backgroundColor: Item.bgColor }}
      >
        <IconComponent className="text-[35px]" style={{ color: Item.color }} />
      </div>

      <div className="flex items-center mt-5 gap-1">
        {Item.state === "up" ? (
          <BsGraphUpArrow className="text-green-500" />
        ) : (
          <BsGraphDownArrow className="text-red-500" />
        )}
        <p
          className={`text-sm ${
            Item.state === "up" ? "text-green-500" : "text-red-500"
          }`}
        >
          {Item.growth}%
        </p>
        <p className="text-sm">From {Item.from}</p>
      </div>
    </div>
  );
};

export default UsersStat;

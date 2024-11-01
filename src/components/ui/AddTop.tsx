import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import React from "react";

interface AddTopProps {
    text: string;
    url: string;
}

const AddTop:React.FC<AddTopProps> = ({text, url}) => {

    const navigate = useNavigate();

  return (
    <div className="top w-full flex items-center justify-between pb-5 sticky top-0 bg-creme">
      <div className="title flex items-center gap-1">
        <button className="lg:hidden" onClick={() => navigate("/structure")}>
          <IoIosArrowRoundBack className="text-[18px]" />
        </button>
        <p className="font-medium capitalize text-sm lg:text-base">
          {text}
        </p>
      </div>
      <button
        className="text-[16px] lg:text-[20px]"
        onClick={() => navigate(`${url}`)}
      >
        <FaPlus />
      </button>
    </div>
  );
}

export default AddTop

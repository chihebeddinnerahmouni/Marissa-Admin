import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const Elements = () => {
  const { elements } = useParams();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div
      className={`w-full mt-[80px] rounded-10 flex flex-col gap-3
      ${isMobile ? (elements ? "block" : "hidden") : "block"}
      `}
    >
      <div className="top w-full flex items-center justify-between">
        <div className="title flex items-center gap-1">
          <button>
            <IoIosArrowRoundBack className="text-[18px]" />
          </button>
          <p className="font-medium capitalize text-sm">{elements}</p>
        </div>
        <button className="text-[16px]">
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default Elements;

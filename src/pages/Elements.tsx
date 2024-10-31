import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import CatagoriesComp from "../containers/CetegoriesCont";

const Elements = () => {
  const { elements, id } = useParams();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const navigate = useNavigate();

  return (
    <div
      className={`w-full mt-[80px] rounded-10 flex flex-col gap-3
      ${isMobile ? (elements && !id ? "block" : "hidden") : "block"}
      `}
    >
      <div className="top w-full flex items-center justify-between pb-5">
        <div className="title flex items-center gap-1">
          <button onClick={() => navigate("/structure")}>
            <IoIosArrowRoundBack className="text-[18px]" />
          </button>
          <p className="font-medium capitalize text-sm">{elements}</p>
        </div>
        <button className="text-[16px]">
          <FaPlus />
        </button>
      </div>

      {elements === "categories" && <CatagoriesComp />} 







    </div>
  );
};

export default Elements;

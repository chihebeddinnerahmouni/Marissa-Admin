import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import CatagoriesComp from "../containers/CetegoriesCont";
import FeaturesCont from "../containers/FeaturesCont";

const Elements = () => {
  const { elements, id } = useParams();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const navigate = useNavigate();

  return (
    <div
      className={`relative w-full mt-[80px] flex flex-col gap-3 overflow-auto
      ${isMobile ? (elements && !id ? "block" : "hidden") : (elements ? "block" : "hidden")}
      lg:col-span-4 lg:border-r lg:border-main lg:pr-5 sectionCss
      `}
    >
      <div className="top w-full flex items-center justify-between pb-5 sticky top-0 bg-creme">
        <div className="title flex items-center gap-1">
          <button className="lg:hidden" onClick={() => navigate("/structure")}>
            <IoIosArrowRoundBack className="text-[18px]" />
          </button>
          <p className="font-medium capitalize text-sm lg:text-base">{elements}</p>
        </div>
        <button className="text-[16px] lg:text-[20px]">
          <FaPlus />
        </button>
      </div>

      {elements === "categories" && <CatagoriesComp />} 
      {elements === "features" && <FeaturesCont />} 







    </div>
  );
};

export default Elements;

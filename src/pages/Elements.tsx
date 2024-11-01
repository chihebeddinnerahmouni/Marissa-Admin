import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import CatagoriesComp from "../containers/elements/CetegoriesCont";
import FeaturesCont from "../containers/elements/FeaturesCont";
import RegionsCont from "../containers/elements/RegionsCont";

const Elements = () => {
  const { elements, id } = useParams();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div
      className={`relative w-full mt-[80px] flex flex-col gap-3 overflow-auto
      ${isMobile ? (elements && !id ? "block" : "hidden") : (elements ? "block" : "hidden")}
      lg:col-span-4 lg:border-r lg:border-main lg:pr-5 sectionCss
      `}
    >

      {elements === "categories" && <CatagoriesComp />} 
      {elements === "features" && <FeaturesCont />} 
      {elements === "regions" && <RegionsCont />} 







    </div>
  );
};

export default Elements;

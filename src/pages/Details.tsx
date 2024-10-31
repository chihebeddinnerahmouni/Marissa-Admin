import { useMediaQuery } from 'react-responsive'
import { useParams } from 'react-router-dom'
import CategoryDetailsCont from '../containers/details/CategoryDetailsCont'
import FeaturesDetailsComp from '../containers/details/FeaturesDetailsComp'




const Details = () => {

    const { id, elements } = useParams();
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div
      className={`w-full mt-20 
      ${isMobile ? (id ? "block" : "hidden") : (id ? "block" : "hidden")}
      lg:col-span-6 sectioCss
      `}
    >
      {elements === "categories" && <CategoryDetailsCont />}
      {elements === "features" && <FeaturesDetailsComp />}
    </div>
  );
}

export default Details

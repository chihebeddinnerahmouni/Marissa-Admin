import { useMediaQuery } from 'react-responsive'
import { useParams } from 'react-router-dom'
import CategoryDetailsCont from '../containers/details/CategoryDetailsCont'
import CategoryAddCont from '../containers/add/CategoryAddCont'
import FeaturesDetailsComp from '../containers/details/FeaturesDetailsComp'
import FeaturesAddCont from '../containers/add/FeaturesAddCont'
import RegionDetailsCont from '../containers/details/RegionDetailsCont'
import RegionAddCont from '../containers/add/RegionAddCont'



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
      {elements === "categories" && (id === "add-category" ? <CategoryAddCont/> : (id && <CategoryDetailsCont /> ))}
      {elements === "features" && (id === "add-feature" ? <FeaturesAddCont/> : (id && <FeaturesDetailsComp />))}
      {elements === "regions" && (id === "add-region" ? <RegionAddCont/> : (id && <RegionDetailsCont />))}
    </div>
  );
}

export default Details

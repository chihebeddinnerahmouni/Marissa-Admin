import { useMediaQuery } from 'react-responsive'
import { useParams } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import CategoryDetailsCont from '../containers/details/CategoryDetailsCont'




const Details = () => {

    const { id, elements } = useParams();
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const navigate = useNavigate();

  return (
    <div
      className={`w-full mt-20 
      ${isMobile ? (id ? "block" : "hidden") : (id ? "block" : "hidden")}
      lg:col-span-6 sectioCss
      `}
    >
          {/* <button className='lg:hidden' onClick={() => navigate(`/structure/${elements}`)}>
            <IoIosArrowRoundBack className="text-[18px]" />
          </button> */}

      {elements === "categories" && <CategoryDetailsCont />}
    </div>
  );
}

export default Details

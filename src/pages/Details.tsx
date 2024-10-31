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
      ${isMobile ? (id ? "block" : "hidden") : "block"}
      `}
    >
      <div className="top w-full flex items-center justify-between pb-7">
        <div className="title flex items-center gap-1">
          <button onClick={() => navigate(`/structure/${elements}`)}>
            <IoIosArrowRoundBack className="text-[18px]" />
          </button>
          <p className="font-medium capitalize text-sm">{id}</p>
        </div>
      </div>

          
          {elements === "categories" && <CategoryDetailsCont />}
    </div>
  );
}

export default Details

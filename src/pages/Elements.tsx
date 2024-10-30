import { useMediaQuery } from 'react-responsive'
import { useParams } from 'react-router-dom';


const Elements = () => {


    const { elements } = useParams()
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  
  
    return (
    <div
      className={`w-full bg-white shadow-hardShadow p-3 mt-[80px] rounded-10 flex flex-col gap-3
      ${isMobile ? (elements ? "block" : "hidden") : "block"}
      `}
    >
      jfzùhoeh
    </div>
  );
}

export default Elements

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


interface ElementCompProps {
    image: string;
  text: string;
  id:number
}
    

const ElementComp: React.FC<ElementCompProps> = ({ image, text, id }) => {
  
  const navigate = useNavigate();
  const { elements } = useParams();



  return (
    <div
      className="element w-full flex gap-2 items-center cursor-pointer lg:gap-3"
      onClick={() => navigate(`/structure/${elements}/${id}`)}
    >
      <img
        src={image ? image : "/file.png"}
        alt="image"
        className="w-[33px] h-[33px] object-cover rounded-10 md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[45px]"
      />
      <p className="text-[14px] font-medium capitalize lg:text-[16px]">{text}</p>
    </div>
  );
}

export default ElementComp

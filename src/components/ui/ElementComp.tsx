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
    <div className="element w-full flex gap-3 items-center" onClick={()=>navigate(`/structure/${elements}/${id}`)}>
      <img
        src={image}
        alt="image"
        className="w-[33px] h-[33px] object-cover rounded-10"
      />
      <p className='text-[13px] font-medium'>{text}</p>
    </div>
  );
}

export default ElementComp

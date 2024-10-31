import React from 'react'
import { useNavigate } from 'react-router-dom';


interface StructureCompProps {
    item: {
        id: number;
        title: string;
        icon: any;
    },
    setSelectedStructure: React.Dispatch<React.SetStateAction<number>>;
    selectedStructure: number;
    }

const StructureComp: React.FC<StructureCompProps> = ({
  item,
    setSelectedStructure,
    selectedStructure,
}) => {

  const navigate = useNavigate();

  return (
    <div
      className={` w-full cursor-pointer bg-opacity-15 flex items-center gap-2 p-1 rounded-10 transition-all duration-100 ${selectedStructure === item.id ? "bg-main text-main" : "text-writingGrey"
        }`}
      onClick={() => {
        navigate(`/structure/${item.title}`);
        setSelectedStructure(item.id);
      }}
    >
      <item.icon className="w-8 h-8" />
      <p>{item.title}</p>
    </div>
  );
};

export default StructureComp

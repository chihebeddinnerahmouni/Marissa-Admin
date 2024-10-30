import StructureComp from "../components/structure/StructureComp"
import classes_array from "../assets/files/structure/classes"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useMediaQuery } from "react-responsive";

const Structure = () => {

  const [selectedStructure, setSelectedStructure] = useState(1);
  const { elements } = useParams()
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });



  return (
    <div
      className={`w-full bg-white shadow-hardShadow p-3 mt-[80px] rounded-10 flex flex-col gap-3
      ${isMobile ? elements ? "hidden" : "block" : "block"}
      lg:col-span-3`}
    >
      {classes_array.map((item) => (
        <StructureComp
          key={item.id}
          item={item}
              setSelectedStructure={setSelectedStructure}
                selectedStructure={selectedStructure}
        />
      ))}
    </div>
  );
}

export default Structure

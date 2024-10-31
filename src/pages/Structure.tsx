import StructureComp from "../components/structure/StructureComp"
import classes_array from "../assets/files/structure/classes"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useMediaQuery } from "react-responsive";

const Structure = () => {

  const [selectedStructure, setSelectedStructure] = useState(0);
  const { elements } = useParams()
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });



  return (
    <div
      className={`w-full mt-[80px] flex flex-col gap-3 overflow-auto
      ${isMobile && elements ? "hidden" : "block"}
      lg:col-span-2 lg:border-r lg:border-main lg:pr-5 sectionCss`}
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

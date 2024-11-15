import { useState } from "react";
import CategoriesCont from "../../containers/boats/CategoriesCont";
import BoatsCont from "../../containers/boats/BoatsCont";

const categories = [
  { id: 1, name: "test", image: "anonyme.jpg" },
  { id: 2, name: "test2", image: "anonyme.jpg" },
  { id: 3, name: "tst3", image: "anonyme.jpg" },
  { id: 4, name: "test4", image: "anonyme.jpg" },
];

const Boats = () => {

    const [ctegoriesArray, setCategoriesArray] = useState(categories);
      const [selectedType, setSelectedType] = useState(categories[0].id);


  return (
    <div className="p-4 md:p-8 mx-auto lg:max-w-[1700px]">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text">
        Listing Management
      </h1>
      <p className="text-sm md:text-base text-gray-600 mb-8">
        Explore and manage all boats with detailed insights into each boat
        available for rental.
      </p>
      <CategoriesCont
        shipsTypes={ctegoriesArray}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
          />
        <BoatsCont selectedType={selectedType} />
    </div>
  );
}

export default Boats

import RegionComp from "../components/regions/RegionComp";
import AddRegionModal from "../components/regions/AddRegionModal";
import { useState } from "react";



const regions_array = [
  {
    id: 1,
    name: "Riyadh",
    photo:
      "https://i0.wp.com/www.touristsaudiarabia.com/wp-content/uploads/2023/05/shutterstock_1224851173.jpg?resize=800%2C534&ssl=1",
  },
  {
    id: 2,
    name: "Jeddah",
    photo:
      "https://i0.wp.com/www.touristsaudiarabia.com/wp-content/uploads/2023/05/shutterstock_1224851173.jpg?resize=800%2C534&ssl=1",
  },
  {
    id: 3,
    name: "Dammam",
    photo:
      "https://i0.wp.com/www.touristsaudiarabia.com/wp-content/uploads/2023/05/shutterstock_1224851173.jpg?resize=800%2C534&ssl=1",
  },
  {
    id: 4,
    name: "Makkah",
    photo:
      "https://i0.wp.com/www.touristsaudiarabia.com/wp-content/uploads/2023/05/shutterstock_1224851173.jpg?resize=800%2C534&ssl=1",
  },
];

const Regions = () => {

  const [isAddRegionOpen, setIsAddRegionOpen] = useState(false);


  return (
    <div className="p-4 md:p-8 lg:max-w-[1100px] mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center">
        Regions Management
      </h1>
      <p className="text-sm md:text-base text-gray-600 mb-6 text-center">
        Explore and manage regions across Saudi Arabia with detailed insights
        into each city.
      </p>

      {/* Add Region Button */}
      <div className="flex justify-end mb-6">
        <button className="bg-main hover:bg-mainHover text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
        onClick={() => setIsAddRegionOpen(true)}
        >
          + Add Region
        </button>
        {isAddRegionOpen && (
          <AddRegionModal setClose={setIsAddRegionOpen} />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regions_array.map((region) => (
          <div key={region.id} className="flex flex-col items-center">
            <RegionComp region={region} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Regions;
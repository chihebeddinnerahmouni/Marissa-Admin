import FeaturesTable from '../components/features/FeaturesTable'
// import { useState } from 'react';


const rowsArray = [
  {
    id: 1,
    englishName: "bluetooth",
    arabicName: "نلؤكسهعؤل",
  },
];


const Features = () => {

  // const [rows, setRows] = useState<any>(rowsArray)
  const rows = rowsArray  

  return (
    <div className="p-4 md:p-8 lg:max-w-[1000px] mx-auto px-4 md:px-[40px]">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text">
        Features Management
      </h1>
      <p className="text-sm md:text-base text-gray-600 mb-8">
        Explore and manage boat Features with detailed insights into each type
        of boat available for rental.
      </p>

      <FeaturesTable rows={rows} />
    </div>
  );
}

export default Features

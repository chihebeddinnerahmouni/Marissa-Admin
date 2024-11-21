import { useMediaQuery } from '@mui/material';
import AddQuestionCat from '../../components/help/AddQuestionCat';
import { useState } from 'react';


const CatQsts = ({ helpCat, selectedCat, handleCategoryClick }: any) => {


    const isMobile = useMediaQuery('(max-width: 648px)');
    const [isAddQstOpen, setIsAddQstOpen] = useState(false);


  return (
    <div className="container flex w-full items-start justify-between">
      <div className="overflow-auto whitespace-nowrap mb-4 max-w-[260px] md:max-w-[400px] lg:max-w-[600px]">
        {helpCat.map((cat: any) => (
          <div
            key={cat.id}
            className={`inline-block px-4 py-2 cursor-pointer ${
              selectedCat === cat.id
                ? "text-black border-b-2 border-black"
                : "text-writingGrey"
            }`}
            onClick={() => handleCategoryClick(cat.id)}
          >
            {cat.name}
          </div>
        ))}
      </div>
      <button
        className="bg-main text-white px-4 py-2 rounded"
        onClick={() => setIsAddQstOpen(true)}
      >
        {isMobile ? "+" : "Add Category"}
      </button>
      {isAddQstOpen && <AddQuestionCat setClose={setIsAddQstOpen}/>}
    </div>
  );
};

export default CatQsts

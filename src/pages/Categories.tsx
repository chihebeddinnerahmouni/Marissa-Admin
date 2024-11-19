import React from "react";
import CategoriesTable from "../components/categories/CategoriesTable";



interface Category {
  id: number;
  enName: string;
  arName: string;
  image?: string;
}


const Categories: React.FC = () => {
  const categories = initialCategories





  


  return (
    <div
      className={`md:p-8 mx-auto p-4 md:px-[40px] lg:max-w-[700px]`}
    >
      <div className="">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text">
          Categories Management
        </h1>
        <p className="text-sm md:text-base text-gray-600 mb-8">
          Explore and manage boat categories with detailed insights into each
          type of boat available for rental.
        </p>
        <CategoriesTable categories={categories} />
      </div>
    </div>
  );
};

export default Categories;

const initialCategories: Category[] = [
  { id: 1, enName: "engine", arName: "محرك", image: "hirbae.jpg" },
  { id: 2, enName: "sail", arName: "شراع", image: "hirbae.jpg" },
  { id: 3, enName: "motor", arName: "موتور", image: "hirbae.jpg" },
  { id: 4, enName: "yacht", arName: "يخت", image: "hirbae.jpg" },
];
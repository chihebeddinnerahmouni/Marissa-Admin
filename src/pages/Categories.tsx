import React
// {, useState }
  from "react";
// import {
//   IoAddCircleOutline,
// } from "react-icons/io5";
import CategoriesTable from "../components/categories/CategoriesTable";
// import AddCategoryModal from "../components/categories/AddCategoryModal";



interface Category {
  id: number;
  enName: string;
  arName: string;
  image?: string;
}


const Categories: React.FC = () => {
  // const [categories, setCategories] = useState<Category[]>(initialCategories);
  const categories = initialCategories
  // const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  // const mainColor = "#FF385C";




  


  return (
    <div
      className={`md:p-8 mx-auto px-4 md:px-[40px] lg:max-w-[700px]`}
    >
      <div className="">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text">
          Categories Management
        </h1>
        <p className="text-sm md:text-base text-gray-600 mb-8">
          Explore and manage boat categories with detailed insights into each
          type of boat available for rental.
        </p>

        {/* Add Category Section */}
        {/* <div className="flex h-[50px] justify-end mb-6 gap-3 items-center">
          {isAddCategoryModalOpen && (
            <AddCategoryModal setClose={setIsAddCategoryModalOpen} />
          )}

          <button
            onClick={() => setIsAddCategoryModalOpen(true)}
            className="flex items-center justify-center bg-main text-white text-[20px] rounded-lg min-w-[50px] h-full"
          >
            <IoAddCircleOutline />
          </button>
        </div> */}

        {/* Categories Table */}
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
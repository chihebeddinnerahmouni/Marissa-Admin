import React, { useState } from "react";
import {
  TextField,
} from "@mui/material";
import {
  IoAddCircleOutline,
} from "react-icons/io5";
import CategoriesTable from "../components/categories/CategoriesTable";
import AddCategoryModal from "../components/categories/AddCategoryModal";



interface Category {
  id: number;
  enName: string;
  arName: string;
}

const initialCategories: Category[] = [
  { id: 1, enName: "engine", arName: "محرك" },
  { id: 2, enName: "sail", arName: "شراع" },
  { id: 3, enName: "motor", arName: "موتور" },
  { id: 4, enName: "yacht", arName: "يخت" },
  { id: 5, enName: "fishing", arName: "صيد" },
  { id: 6, enName: "cruise", arName: "رحلة بحرية" },
  { id: 7, enName: "luxury", arName: "فخامة" },
  { id: 8, enName: "speed", arName: "سرعة" },
  { id: 9, enName: "party", arName: "حفلة" },
  { id: 10, enName: "tour", arName: "جولة" },
  { id: 11, enName: "diving", arName: "غوص" },
  { id: 12, enName: "jet ski", arName: "جت سكي" },
  { id: 13, enName: "kayak", arName: "كاياك" },
  { id: 14, enName: "canoe", arName: "قارب كانو" },
  { id: 15, enName: "paddle board", arName: "لوح تجديف" },
  { id: 16, enName: "pedal boat", arName: "قارب بدال" },
  { id: 17, enName: "banana boat", arName: "قارب موزي" },
  { id: 18, enName: "ferry", arName: "عبارة" },
  { id: 19, enName: "catamaran", arName: "قطارة" },
  { id: 20, enName: "sailing boat", arName: "قارب شراعي" },
  { id: 21, enName: "fishing boat", arName: "قارب صيد" },
  { id: 22, enName: "cruise ship", arName: "سفينة سياحية" },

];

const Categories: React.FC = () => {
  // const [categories, setCategories] = useState<Category[]>(initialCategories);
  const categories = initialCategories
  const [newCategory, setNewCategory] = useState<string>("");
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const mainColor = "#FF385C";




  


  return (
    <div className="p-4 md:p-8 lg:max-w-[700px] mx-auto">
      <div className="">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text">
          Categories Management
        </h1>
        <p className="text-sm md:text-base text-gray-600 mb-8">
          Explore and manage boat categories with detailed insights into each
          type of boat available for rental.
        </p>


        {/* Add Category Section */}
        <div className="flex h-[50px] justify-end mb-6 gap-3 items-center">
          {isAddCategoryModalOpen && <AddCategoryModal setClose={setIsAddCategoryModalOpen} />}
          <TextField
            label="Category Name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
                      variant="outlined"
                      fullWidth
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "grey",
                },
                "&:hover fieldset": {
                  borderColor: "grey",
                },
                "&.Mui-focused fieldset": {
                  borderColor: mainColor,
                },
              },
              "& .MuiInputLabel-root": {
                color: "gray",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: mainColor,
              },
            }}
          />
          <button
            onClick={()=>setIsAddCategoryModalOpen(true)}
            className="flex items-center justify-center bg-main text-white text-[20px] rounded-lg min-w-[50px] h-full"
          >
            <IoAddCircleOutline />
          </button>
        </div>
        
        {/* Categories Table */}
        <CategoriesTable
          categories={categories}
        />
      </div>
    </div>
  );
};

export default Categories;

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
  name: string;
}

const initialCategories: Category[] = [
  { id: 1, name: "Riyadh" },
  { id: 2, name: "Jeddah" },
  { id: 3, name: "Dammam" },
  { id: 4, name: "Makkah" },
];

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [newCategory, setNewCategory] = useState<string>("");
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [editingName, setEditingName] = useState<string>("");
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const mainColor = "#FF385C";




  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
    setEditingName(category.name);
  };

  const handleUpdateCategory = () => {
    if (editingCategory) {
      setCategories(
        categories.map((category) =>
          category.id === editingCategory.id
            ? { ...category, name: editingName }
            : category
        )
      );
      setEditingCategory(null);
      setEditingName("");
    }   
  };

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
          handleEditCategory={handleEditCategory}
          handleUpdateCategory={handleUpdateCategory}
          categories={categories}
          editingCategory={editingCategory}
          setEditingCategory={setEditingCategory}
          editingName={editingName}
          setEditingName={setEditingName}
        />
      </div>
    </div>
  );
};

export default Categories;

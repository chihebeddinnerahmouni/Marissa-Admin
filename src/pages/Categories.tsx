import React, { useState } from "react";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import {
  IoAddCircleOutline,
  IoPencilSharp,
  IoTrashSharp,
} from "react-icons/io5";

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
  const mainColor = "#FF385C";

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, { id: Date.now(), name: newCategory }]);
      setNewCategory("");
    }
  };

  const handleDeleteCategory = (id: number) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

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
            onClick={handleAddCategory}
            className="flex items-center justify-center bg-main text-white text-[20px] rounded-lg min-w-[50px] h-full"
          >
            <IoAddCircleOutline />
          </button>
        </div>
        {/* Categories Table */}
        <TableContainer component={Paper} className="rounded-lg">
          <Table>
            <TableHead className="bg-red-100 text-white">
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>
                    {editingCategory && editingCategory.id === category.id ? (
                      <TextField
                        value={editingName}
                        onChange={(e) => setEditingName(e.target.value)}
                        variant="outlined"
                        size="small"
                      />
                    ) : (
                      category.name
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {editingCategory && editingCategory.id === category.id ? (
                      <button
                        onClick={handleUpdateCategory}
                        className="mr-2 bg-main text-white px-2 py-1 rounded-lg shadow-hoverShadow"
                      >
                        Save
                      </button>
                    ) : (
                      <IconButton
                        onClick={() => handleEditCategory(category)}
                        className="text-main"
                        size="small"
                      >
                        <IoPencilSharp />
                      </IconButton>
                    )}
                    <IconButton
                      onClick={() => handleDeleteCategory(category.id)}
                      className="text-main"
                      size="small"
                    >
                      <IoTrashSharp />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Categories;

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField
} from "@mui/material";
import {
  IoPencilSharp,
  IoTrashSharp
} from "react-icons/io5";
import DeleteCategoryModal from "./DeleteCategoryModal";
import { useState } from "react";

const CategoriesTable = ({
  handleUpdateCategory,
  handleEditCategory,
  categories,
  editingCategory,
  editingName,
  setEditingName,
}: any) => {

  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const handleDeleteClick = (category: any) => {
    setSelectedCategory(category);
    setIsDeleteOpen(true);
  };

  return (
    <>
      {isDeleteOpen && <DeleteCategoryModal setClose={setIsDeleteOpen} category={selectedCategory} />}
      <TableContainer component={Paper} className="rounded-lg">
        <Table>
          <TableHead className="bg-red-100 text-white">
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category: any) => (
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
                      size="small"
                    >
                      <IoPencilSharp />
                    </IconButton>
                  )}
                  <IconButton
                    size="small"
                    sx={{ color: "red" }}
                    onClick={() => handleDeleteClick(category)}
                  >
                    <IoTrashSharp />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CategoriesTable;
import {
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
  IoTrashSharp
} from "react-icons/io5";
import DeleteCategoryModal from "./DeleteCategoryModal";
import { useState } from "react";

const CategoriesTable = ({
  categories,
}: any) => {

  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const handleDeleteClick = (category: any) => {
    setSelectedCategory(category);
    setIsDeleteOpen(true);
  };

  return (
    <>
      {isDeleteOpen && (
        <DeleteCategoryModal
          setClose={setIsDeleteOpen}
          category={selectedCategory}
        />
      )}
      <TableContainer component={Paper} className="rounded-lg">
        <Table>
          <TableHead className="bg-red-100 text-white">
            <TableRow>
              <TableCell>English Name</TableCell>
              <TableCell>Arabic Name</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category: any) => (
              <TableRow key={category.id}>
                <TableCell align="center">{category.enName}</TableCell>
                <TableCell align="center">{category.arName}</TableCell>
                <TableCell align="center">
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
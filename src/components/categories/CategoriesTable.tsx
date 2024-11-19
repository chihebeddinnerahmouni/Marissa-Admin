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
  IoTrashSharp, IoAddCircleOutline
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
          <TableHead sx={{ fontSize: "bold" }}>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Picture
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                English Name
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Arabic Name
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                <IconButton
                  size="medium"
                  sx={{ color: "red" }}
                  onClick={() => {}}
                >
                  <IoAddCircleOutline />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category: any) => (
              <TableRow key={category.id}>
                <TableCell
                  align="center"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    src={category.image}
                    alt={`${category.image}'s profile`}
                    className="w-[40px] h-[40px] rounded-full object-cover object-center"
                  />
                </TableCell>
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
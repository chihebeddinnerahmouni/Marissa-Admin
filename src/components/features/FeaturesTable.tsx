import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { IoTrashSharp } from "react-icons/io5";
import DeleteFeatureModal from "./DeleteFeatureModal";
import AddFeature from "./AddFeature";

export default function BasicTable({ rows }: any) {
  const [selectedRowId, setSelectedRowId] = useState<any>(null);
  const [isDeleteOpen, setIsDeleteopen] = useState<boolean>(false);
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);

  return (
    <>
      {isDeleteOpen && (
        <DeleteFeatureModal
          setClose={setIsDeleteopen}
          feature={selectedRowId}
        />
      )}
      {isAddOpen && (
        <AddFeature
          setClose={setIsAddOpen}
        />
      )}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                English name
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Arabic name
              </TableCell>
              <TableCell
                align="center"
                size="medium"
                sx={{ fontWeight: "bold", color: "red", cursor: "pointer" }}
                onClick={()=>setIsAddOpen(true)}
              >
                +
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.englishName}</TableCell>
                <TableCell align="center">{row.arabicName}</TableCell>
                <TableCell align="center">
                  <IconButton
                    size="small"
                    sx={{ color: "red" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsDeleteopen(true);
                      setSelectedRowId(row);
                    }}
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
}
import React, { Fragment } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";

export default function BasicTable({ products, onDeleteProduct, title }) {
  return (
    <Fragment>
      <h2>{title}</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 250 }} aria-label="simple table">
          <TableBody>
            {products.map((item, index) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}.
                </TableCell>
                <TableCell align="left">
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </TableCell>
                {/* <TableCell align="left">
                  {item.group.charAt(0).toUpperCase() + item.group.slice(1)}
                </TableCell> */}
                <TableCell align="left">
                  <IconButton
                    onClick={() => onDeleteProduct(item.id)}
                    edge="end"
                    aria-label="delete"
                  >
                    <RemoveIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}

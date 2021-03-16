import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import EditIcon from "@material-ui/icons/Edit";
import { InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { search } from "../Api";

const Actions = () => {
  return (
    <>
      <EditIcon />
      <InsertDriveFileIcon />
    </>
  );
};

export default function BasicTable({ data, setData }) {
  const getSearch = (e) => {
    // let data = search(e.target.value);
    // console.log({ data });
    // setData();
  };

  return (
    <TableContainer component={Paper}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.7rem 3vw",
        }}
      >
        <h2 style={{ margin: "0px" }} className="head">
          Shipment
        </h2>

        <TextField
          id="standard-search"
          type="search"
          onChange={getSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Actions</TableCell>
            <TableCell>BL Number</TableCell>
            <TableCell>Status</TableCell>
            {/* <TableCell align="right">Status</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                <Actions />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.blnumber}
              </TableCell>
              <TableCell>{row.status}</TableCell>
              {/* <TableCell align="right">{row.status}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

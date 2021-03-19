import React, { useState } from "react";
// import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

import EditForm from "./EditForm";
import { IconButton } from "@material-ui/core";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import EditIcon from "@material-ui/icons/Edit";
import UniversalSearch from "./UniversalSearch";

const useStyles = makeStyles((theme) => ({
  head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  // seeMore: {
  //   marginTop: theme.spacing(3),
  // },
}));

export default function Results({ data, setData }) {
  const classes = useStyles();

  // Open Edit Form
  const [editForm, setEditForm] = useState(null);

  return (
    <React.Fragment>
      <div className={classes.head}>
        <Title className={classes.title}>Shipment Details</Title>
        <UniversalSearch className={classes.search} setData={setData} />
      </div>
      <Table size="small">
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
                <IconButton
                  onClick={() => setEditForm(row)}
                  // onClick={() => setEditForm(true)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <InsertDriveFileIcon />
                </IconButton>
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

      <EditForm
        form={editForm}
        setForm={setEditForm}
        data={data}
        setData={setData}
      />
    </React.Fragment>
  );
}

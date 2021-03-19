import { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import Title from "./Title";

import { find } from "../Api";

export default function SearchForm({ setData }) {
  // for first searching form
  const [sform, setSform] = useState({
    blnumber: "",
    status: "",
  });

  useEffect(() => {
    // calling api "/find" whenever search form field values are changing
    find(sform, (res) => {
      // console.log({ res });
      // And setting the results/response in the satte
      setData(res);
    });
  }, [sform]);

  return (
    <>
      <Title>Shipment Search</Title>
      <TextField
        fullWidth
        margin="normal"
        id="normal-basic"
        label="BL Number"
        className="search__input"
        // Getting value from the state & putting it in the HTML
        value={sform.slnumber}
        // Getting value from the HTML & putting it in the state
        onChange={(e) => setSform({ ...sform, blnumber: e.target.value })}
      />
      <FormControl className="search__input" margin="normal">
        <InputLabel id="demo-simple-select-normal-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-normal-label"
          id="demo-simple-select-normal"
          value={sform.status}
          onChange={(e) => setSform({ ...sform, status: e.target.value })}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Onboard">Onboard</MenuItem>
          <MenuItem value="Arrived Depot">Arrived Depot</MenuItem>
          <MenuItem value="Delivered">Delivered</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

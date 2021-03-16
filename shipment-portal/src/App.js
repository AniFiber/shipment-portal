import { useEffect, useState } from "react";
import Login from "./Login";
import "./App.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import ResultTable from "./components/ResultTable";

// import axios from "axios";
import { find, TotalOnboard } from "./Api";

function App() {
  const [auth, setAuth] = useState(false);
  const [totalOnboard, setTotalOnboard] = useState(0);
  const [data, setData] = useState([]); // set shipment data

  const [sform, setSform] = useState({
    blnumber: "",
    status: "",
  });

  const refreshTotalOnboard = () => {
    TotalOnboard((count) => setTotalOnboard(count));
  };
  useEffect(() => {
    // fetch initail data when Authenticated
    if (auth) {
      // Fetching Total Onboard Shipments
      refreshTotalOnboard();
      // // Fetching AllData At start
      // axios.get("http://localhost:5000/api/shipment/all").then((res) => {
      //   console.log(res);
      //   setData({ ...data, shipment: res.data });
      // });
    }
  }, [auth]);

  useEffect(() => {
    find(sform, (res) => {
      // console.log({ res });
      setData(res);
    });
  }, [sform]);

  if (!auth) {
    return <Login loginUser={setAuth} />;
  }
  return (
    <>
      <nav>
        <h1 className="head">Shipment Portal</h1>
        <button className="logout" onClick={() => setAuth(false)}>
          Logout
        </button>
      </nav>
      <div className="Dash">
        <div className="col1">
          <div className="search wbox">
            <TextField
              id="filled-basic"
              label="BL Number"
              variant="filled"
              className="search__input"
              value={sform.slnumber}
              onChange={(e) => setSform({ ...sform, blnumber: e.target.value })}
            />
            <FormControl variant="filled" className="search__input">
              <InputLabel id="demo-simple-select-filled-label">
                Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={sform.status}
                onChange={(e) => setSform({ ...sform, status: e.target.value })}
              >
                {/* <MenuItem value="">
                <em>None</em>
              </MenuItem> */}
                <MenuItem value="Onboard">Onboard</MenuItem>
                <MenuItem value="Arrived Depot">Arrived Depot</MenuItem>
                <MenuItem value="Delivered">Delivered</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="onboard wbox">
            <p>Number of Onboard Shipment</p>
            <h1 onClick={refreshTotalOnboard}>{totalOnboard}</h1>
          </div>
        </div>

        <div className="col2 wbox">
          <ResultTable data={data} setData={setData} />
        </div>
      </div>
    </>
  );
}

export default App;

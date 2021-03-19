import React, { useEffect, useState } from "react";
// import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import { TotalOnboard } from "../Api";

// function preventDefault(event) {
//   event.preventDefault();
// }

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // fontWeight: "600",
    cursor: "pointer",
  },
});

export default function Onboard() {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const refreshCount = () => {
    // Fetching onboard count from the api and putting it in the state
    TotalOnboard((count) => setCount(count));
  };

  // Refresh onMount (Run's the funtion whenever code is called/attached to the DOM)
  useEffect(() => {
    refreshCount();
  }, []);

  return (
    <React.Fragment>
      <Title>Shipment's Onboard</Title>
      <Typography
        component="p"
        variant="h1"
        align="center"
        className={classes.depositContext}
        onClick={refreshCount}
      >
        {count}
      </Typography>

      <Typography color="textSecondary">Click Anywhere to Refresh!</Typography>
      {/* <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Refresh
        </Link>
      </div> */}
    </React.Fragment>
  );
}

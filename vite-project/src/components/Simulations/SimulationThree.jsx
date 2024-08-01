import { Box, Grid, Typography } from "@mui/material";
import nandone from "../../assets/nand.jpg";
import styles from "./SimulationTwo.module.css";
// import { useState } from "react";
// import { Link, Outlet } from "react-router-dom";

// const MAX = 5;
// const MIN = 0;
// const marks = [
//   {
//     value: MIN,
//     label: "",
//   },
//   {
//     value: MAX,
//     label: "",
//   },
// ];

function SimulationTwo() {
  // const [showGraph, setShowGraph] = useState(false);
  // const [showOne, setShowOne] = useState(0.63);
  // const [val, setVal] = useState(MIN);
  // const handleChange = (_, newValue) => {
  //   setVal(newValue);
  //   setShowOne(showOne * 2);
  // };

  return (
    <>
      <Box sx={{ padding: "20px 40px" }}>
        <Typography variant="h4" align="center" sx={{ fontSize: "18px" }}>
          Characterization of Digital Logic Families - Experiment II
        </Typography>
        <Grid
          container
          sx={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box className={styles.ttlmiddleGrid}>
            <img
              loading="lazy"
              src={nandone}
              className="img-fluid"
              alt="Responsive image"
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default SimulationTwo;

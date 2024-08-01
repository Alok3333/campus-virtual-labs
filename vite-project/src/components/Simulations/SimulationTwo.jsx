import { Box, Grid, Typography, Slider, Button } from "@mui/material";
import ttlNand from "../../assets/ttl_nand.jpg";
import styles from "./SimulationTwo.module.css";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import { useSnackbar } from "notistack";

const MAX = 5;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];

function SimulationTwo() {
  // const [inputRange, setInputRange] = useState(0);
  const [showGraph, setShowGraph] = useState(false);
  const [showOne, setShowOne] = useState(0.63);
  const [val, setVal] = useState(MIN);
  const handleChange = (_, newValue) => {
    // console.log(newValue, "newValue");
    setVal(newValue);
    setShowOne(showOne*2);
  };

  return (
    <>
      <Box sx={{ padding: "20px 40px" }}>
        <Typography variant="h4" align="center" sx={{ fontSize: "18px" }}>
          Characterization of Digital Logic Families - Experiment I
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
          {!showGraph ? (
            <Box className={styles.ttlmiddleGrid}>
              <Box
                sx={{
                  width: 155,
                  position: "absolute",
                  top: "118px",
                  left: "5px",
                  padding: "0",
                }}
              >
                <Slider
                  marks={marks}
                  step={0.2}
                  value={val}
                  valueLabelDisplay="auto"
                  min={MIN}
                  max={MAX}
                  onChange={handleChange}
                />
              </Box>
              <img src={ttlNand} className={styles.ttlImg} />
              <Box
                sx={{
                  minWidth: "34px",
                  background: "green",
                  color: "white",
                  textAlign: "center",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 8px grey",
                  position: "absolute",
                  top: "72px",
                  left: "83px",
                }}
              >
                <Typography>{val}</Typography>
              </Box>
              <Box
                sx={{
                  minWidth: "34px",
                  background: "green",
                  color: "white",
                  textAlign: "center",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 8px grey",
                  position: "absolute",
                  top: "110px",
                  left: "196px",
                }}
              >
                <Typography onChange={handleChange}>{showOne}</Typography>
              </Box>
              <Box
                sx={{
                  minWidth: "34px",
                  background: "green",
                  color: "white",
                  textAlign: "center",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 8px grey",
                  position: "absolute",
                  top: "153px",
                  left: "221px",
                }}
              >
                <Typography>{val}</Typography>
              </Box>
              <Box
                sx={{
                  minWidth: "34px",
                  background: "green",
                  color: "white",
                  textAlign: "center",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 8px grey",
                  position: "absolute",
                  top: "108px",
                  left: "303px",
                }}
              >
                <Typography>{val}</Typography>
              </Box>
              <Box
                sx={{
                  minWidth: "34px",
                  background: "green",
                  color: "white",
                  textAlign: "center",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 8px grey",
                  position: "absolute",
                  right: "144px",
                  bottom: "123px",
                }}
              >
                <Typography>{val}</Typography>
              </Box>
              <Box
                sx={{
                  minWidth: "34px",
                  background: "green",
                  color: "white",
                  textAlign: "center",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 8px grey",
                  position: "absolute",
                  right: "64px",
                  top: "67px",
                }}
              >
                <Typography>{val}</Typography>
              </Box>
              <Box
                sx={{
                  minWidth: "34px",
                  background: "green",
                  color: "white",
                  textAlign: "center",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 8px grey",
                  position: "absolute",
                  top: "115px",
                  right: "67px",
                }}
              >
                <Typography>{val}</Typography>
              </Box>
              <Box
                sx={{
                  minWidth: "34px",
                  background: "green",
                  color: "white",
                  textAlign: "center",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 8px grey",
                  position: "absolute",
                  bottom: "127px",
                  right: "16px",
                }}
              >
                <Typography>{val}</Typography>
              </Box>

              <Box>
                <Link to="characteristicplot">
                  <Button onClick={() => setShowGraph(!showGraph)}>
                    Graph Of Characteristic Plot
                  </Button>
                </Link>
              </Box>
            </Box>
          ) : (
            <Box>
              <Outlet />
              <Box sx={{ minWidth: 800 }}>
                <Link to="/simulation">
                  <Button onClick={() => setShowGraph(!showGraph)}>
                    Back to previous
                  </Button>
                </Link>
              </Box>
            </Box>
          )}
        </Grid>
      </Box>
    </>
  );
}

export default SimulationTwo;

import { Box, Grid, Typography, Slider } from "@mui/material";
import ttlNand from "../../assets/ttl_nand.jpg";
import styles from "./SimulationTwo.module.css";
import { useState } from "react";
// import { useSnackbar } from "notistack";

const MAX = 100;
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
  const [val, setVal] = useState(MIN);
  const handleChange = (_, newValue) => {
    setVal(newValue);
  };
  //   const [isVccOne, setIsVccOne] = useState(false);
  //   const [isGndThree, setIsGndThree] = useState(false);

  //   const { enqueueSnackbar } = useSnackbar();

  //   const handleClickBtn = () => {
  //     setIsVccOne(!isVccOne);
  //     enqueueSnackbar("connect all Vcc and Gnd correctly", {
  //       variant: "success",
  //       anchorOrigin: {
  //         vertical: "bottom",
  //         horizontal: "center",
  //       },
  //       autoHideDuration: 1000,
  //       preventDuplicate: true,
  //     });
  //   };

  return (
    <>
      <Box sx={{ padding: "20px 40px" }}>
        <Typography variant="h4" align="center">
          Characterization of Digital Logic Families - Experiment I
        </Typography>
        <Grid container sx={{ marginTop: "20px" }}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box className={styles.ttlmiddleGrid}>
                <Box
                  sx={{
                    width: 155,
                    position: "absolute",
                    top: "118px",
                    left: "5px",
                    padding: "0"
                  }}
                >
                  <Slider
                    marks={marks}
                    step={10}
                    value={val}
                    valueLabelDisplay="auto"
                    min={MIN}
                    max={MAX}
                    onChange={handleChange}
                  />
                  {/* <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="body2"
                      onClick={() => setVal(MIN)}
                      sx={{ cursor: "pointer" }}
                    >
                      {MIN} min
                    </Typography>
                    <Typography
                      variant="body2"
                      onClick={() => setVal(MAX)}
                      sx={{ cursor: "pointer" }}
                    >
                      {MAX} max
                    </Typography>
                  </Box> */}
                </Box>
                <img src={ttlNand} className={styles.ttlImg} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Box>
    </>
  );
}

export default SimulationTwo;

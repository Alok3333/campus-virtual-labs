import { Box, Card, Grid, Typography } from "@mui/material";
import chobi from "../../assets/chobi.jpg";
import redbtn from "../../assets/switchOff.png";
import greenbtn from "../../assets/switchOn.png";
import onlight from "../../assets/on.jpg";
import offlight from "../../assets/off.jpg";
import styles from "./Simulation.module.css";
import { useState } from "react";
import { useSnackbar } from "notistack";

function SimulationOne() {
  const [isVccOne, setIsVccOne] = useState(false);
  const [isGndOne, setIsGndOne] = useState(false);
  const [isRedOne, setIsRedOne] = useState(false);
  const [isRedTwo, setIsRedTwo] = useState(false);
  const [isRedThree, setIsRedThree] = useState(false);
  const [isRedFour, setIsRedFour] = useState(false);
  const [isVccTwo, setIsVccTwo] = useState(false);
  const [isGndTwo, setIsGndTwo] = useState(false);
  const [isVccThree, setIsVccThree] = useState(false);
  const [isGndThree, setIsGndThree] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleClickBtn = () => {
    setIsVccOne(!isVccOne);
    enqueueSnackbar("connect all Vcc and Gnd correctly", {
      variant: "success",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center",
      },
      autoHideDuration: 1000,
      preventDuplicate: true,
    });
  };

  return (
    <>
      <Box sx={{ padding: "20px 40px" }}>
        <Typography variant="h4" align="center" sx={{ fontSize: "18px" }}>
          Analysis and Synthesis of Boolean Expressions using Basic Logic Gates
          - Experiment IV
        </Typography>
        <Grid container sx={{ marginTop: "20px" }}>
          {/* <Grid item xs={3}></Grid> */}
          <Grid item>
            <Card sx={{ minWidth: 275 }} className={styles.middleGrid}>
              <img
                loading="lazy"
                src={chobi}
                className="img-fluid"
                alt="Responsive image"
              />
              {/* <img src={chobi} /> */}

              {!isVccOne ? (
                <img
                  width="46"
                  height="34"
                  src={redbtn}
                  onClick={handleClickBtn}
                  className={styles.img1}
                />
              ) : (
                <img
                  width="50"
                  height="35"
                  src={greenbtn}
                  onClick={() => setIsVccOne(!isVccOne)}
                  className={styles.img2}
                />
              )}

              {!isGndOne ? (
                <img
                  width="46"
                  height="34"
                  src={redbtn}
                  onClick={() => setIsGndOne(!isGndOne)}
                  className={styles.img3}
                />
              ) : (
                <img
                  width="50"
                  height="35"
                  src={greenbtn}
                  onClick={() => setIsGndOne(!isGndOne)}
                  className={styles.img4}
                />
              )}

              {!isRedOne ? (
                <img
                  width="46"
                  height="34"
                  src={redbtn}
                  onClick={() => setIsRedOne(!isRedOne)}
                  className={styles.img5}
                />
              ) : (
                <img
                  width="50"
                  height="35"
                  src={greenbtn}
                  onClick={() => setIsRedOne(!isRedOne)}
                  className={styles.img6}
                />
              )}

              {!isRedTwo ? (
                <img
                  width="46"
                  height="34"
                  src={redbtn}
                  onClick={() => setIsRedTwo(!isRedTwo)}
                  className={styles.img7}
                />
              ) : (
                <img
                  width="50"
                  height="35"
                  src={greenbtn}
                  onClick={() => setIsRedTwo(!isRedTwo)}
                  className={styles.img8}
                />
              )}

              {!isRedThree ? (
                <img
                  width="46"
                  height="34"
                  src={redbtn}
                  onClick={() => setIsRedThree(!isRedThree)}
                  className={styles.img9}
                />
              ) : (
                <img
                  width="50"
                  height="35"
                  src={greenbtn}
                  onClick={() => setIsRedThree(!isRedThree)}
                  className={styles.img10}
                />
              )}

              {!isRedFour ? (
                <img
                  width="46"
                  height="34"
                  src={redbtn}
                  onClick={() => setIsRedFour(!isRedFour)}
                  className={styles.img11}
                />
              ) : (
                <img
                  width="50"
                  height="35"
                  src={greenbtn}
                  onClick={() => setIsRedFour(!isRedFour)}
                  className={styles.img12}
                />
              )}

              {!isVccTwo ? (
                <img
                  width="46"
                  height="34"
                  src={redbtn}
                  onClick={() => setIsVccTwo(!isVccTwo)}
                  className={styles.img13}
                />
              ) : (
                <img
                  width="50"
                  height="35"
                  src={greenbtn}
                  onClick={() => setIsVccTwo(!isVccTwo)}
                  className={styles.img14}
                />
              )}

              {!isGndTwo ? (
                <img
                  width="46"
                  height="34"
                  src={redbtn}
                  onClick={() => setIsGndTwo(!isGndTwo)}
                  className={styles.img15}
                />
              ) : (
                <img
                  width="50"
                  height="35"
                  src={greenbtn}
                  onClick={() => setIsGndTwo(!isGndTwo)}
                  className={styles.img16}
                />
              )}

              {!isVccThree ? (
                <img
                  width="46"
                  height="34"
                  src={redbtn}
                  onClick={() => setIsVccThree(!isVccThree)}
                  className={styles.img17}
                />
              ) : (
                <img
                  width="50"
                  height="35"
                  src={greenbtn}
                  onClick={() => setIsVccThree(!isVccThree)}
                  className={styles.img18}
                />
              )}

              {!isGndThree ? (
                <img
                  width="46"
                  height="34"
                  src={redbtn}
                  onClick={() => setIsGndThree(!isGndThree)}
                  className={styles.img19}
                />
              ) : (
                <img
                  width="50"
                  height="35"
                  src={greenbtn}
                  onClick={() => setIsGndThree(!isGndThree)}
                  className={styles.img20}
                />
              )}

              {/* --------------- work start from here */}
              {isVccOne && isVccTwo && isVccThree ? (
                isRedOne && isRedThree ? (
                  <img src={onlight} className={styles.imgOnLight} />
                ) : <img src={offlight} className={styles.imgOffLight} /> &&
                  isRedTwo &&
                  isRedThree ? (
                  <img src={onlight} className={styles.imgOnLight} />
                ) : <img src={offlight} className={styles.imgOffLight} /> &&
                  isRedTwo &&
                  isRedFour ? (
                  <img src={onlight} className={styles.imgOnLight} />
                ) : <img src={offlight} className={styles.imgOffLight} /> &&
                  isRedOne &&
                  isRedFour ? (
                  <img src={onlight} className={styles.imgOnLight} />
                ) : (
                  <img src={offlight} className={styles.imgOffLight} />
                )
              ) : (
                <img src={offlight} className={styles.imgOffLight} />
              )}

              {/* <img src={onlight} className={styles.imgOnLight} /> */}
              {/* <img src={offlight} className={styles.imgOffLight} /> */}
            </Card>
          </Grid>
          {/* <Grid item xs={3}></Grid> */}
        </Grid>
      </Box>
    </>
  );
}

export default SimulationOne;

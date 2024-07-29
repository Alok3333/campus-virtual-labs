import { Box, Card, Grid, Typography } from "@mui/material";
import chobi from "../../assets/chobi.jpg";
import redbtn from "../../assets/red.jpg";
import greenbtn from "../../assets/green.jpg";
import styles from "./Simulation.module.css";
import { useState } from "react";

function Simulation() {
  const [isRed, setIsRed] = useState(false);
  const [isRedOne, setIsRedOne] = useState(false);
  const [isRedTwo, setIsRedTwo] = useState(false);
  const [isRedThree, setIsRedThree] = useState(false);
  const [isRedFour, setIsRedFour] = useState(false);
  const [isRedFive, setIsRedFive] = useState(false);
  const [isRedSix, setIsRedSix] = useState(false);
  const [isRedSeven, setIsRedSeven] = useState(false);
  const [isRedEight, setIsRedEight] = useState(false);
  const [isRedNine, setIsRedNine] = useState(false);

  return (
    <>
      <Box sx={{ padding: "20px 40px" }}>
        <Typography variant="h4" align="center">
          Analysis and Synthesis of Boolean Expressions using Basic Logic Gates
          - Test III
        </Typography>
        <Grid container sx={{ marginTop: "20px" }}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Card sx={{ minWidth: 275 }} className={styles.middleGrid}>
              <img src={chobi} />

              {!isRed ? (
                <img
                  src={redbtn}
                  onClick={() => setIsRed(!isRed)}
                  className={styles.img1}
                />
              ) : (
                <img
                  src={greenbtn}
                  onClick={() => setIsRed(!isRed)}
                  className={styles.img2}
                />
              )}

              {!isRedOne ? (
                <img
                  src={redbtn}
                  onClick={() => setIsRedOne(!isRedOne)}
                  className={styles.img3}
                />
              ) : (
                <img
                  src={greenbtn}
                  onClick={() => setIsRedOne(!isRedOne)}
                  className={styles.img4}
                />
              )}

              {!isRedTwo ? (
                <img
                  src={redbtn}
                  onClick={() => setIsRedTwo(!isRedTwo)}
                  className={styles.img5}
                />
              ) : (
                <img
                  src={greenbtn}
                  onClick={() => setIsRedTwo(!isRedTwo)}
                  className={styles.img6}
                />
              )}

              {!isRedThree ? (
                <img
                  src={redbtn}
                  onClick={() => setIsRedThree(!isRedThree)}
                  className={styles.img7}
                />
              ) : (
                <img
                  src={greenbtn}
                  onClick={() => setIsRedThree(!isRedThree)}
                  className={styles.img8}
                />
              )}

              {!isRedFour ? (
                <img
                  src={redbtn}
                  onClick={() => setIsRedFour(!isRed)}
                  className={styles.img9}
                />
              ) : (
                <img
                  src={greenbtn}
                  onClick={() => setIsRedFour(!isRedFour)}
                  className={styles.img10}
                />
              )}

              {!isRedFive ? (
                <img
                  src={redbtn}
                  onClick={() => setIsRedFive(!isRedFive)}
                  className={styles.img11}
                />
              ) : (
                <img
                  src={greenbtn}
                  onClick={() => setIsRedFive(!isRedFive)}
                  className={styles.img12}
                />
              )}

              {!isRedSix ? (
                <img
                  src={redbtn}
                  onClick={() => setIsRedSix(!isRedSix)}
                  className={styles.img13}
                />
              ) : (
                <img
                  src={greenbtn}
                  onClick={() => setIsRedSix(!isRedSix)}
                  className={styles.img14}
                />
              )}

              {!isRedSeven ? (
                <img
                  src={redbtn}
                  onClick={() => setIsRedSeven(!isRedSeven)}
                  className={styles.img15}
                />
              ) : (
                <img
                  src={greenbtn}
                  onClick={() => setIsRedSeven(!isRedSeven)}
                  className={styles.img16}
                />
              )}

              {/* --------------- here */}

              {!isRedEight ? (
                <img
                  src={redbtn}
                  onClick={() => setIsRedEight(!isRedEight)}
                  className={styles.img17}
                />
              ) : (
                <img
                  src={greenbtn}
                  onClick={() => setIsRedEight(!isRedEight)}
                  className={styles.img18}
                />
              )}

              {!isRedNine ? (
                <img
                  src={redbtn}
                  onClick={() => setIsRedNine(!isRedNine)}
                  className={styles.img19}
                />
              ) : (
                <img
                  src={greenbtn}
                  onClick={() => setIsRedNine(!isRedNine)}
                  className={styles.img20}
                />
              )}
            </Card>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Simulation;

// import React from 'react'

import { Box } from "@mui/material";
import styles from "./Experiments.module.css";

function Main() {
  return (
    <>
      <Box sx={{ marginTop: "30px" }}>
        <a href="https://www.vlab.co.in/broad-area-electronics-and-communications">
          Electronics and Electrical Communication Engineering
        </a>
        <h1 style={{ textAlign: "center" }}>
          Digital Electronic Circuits Laboratory
        </h1>
        <Box className={styles.links}>
          <ol type="1">
            <li>
              <a href="https://dec-iitkgp.vlabs.ac.in/exp/7-segment-led-display/">
                Analysis of Functions of BCD-TO-7-segment Decoder / Driver and
                Operation of 7-segment LED Display
              </a>
            </li>
            <li>
              <a href="https://dec-iitkgp.vlabs.ac.in/exp/digital-logic-families/">
                Characterization of Digital Logic Families
              </a>
            </li>
            <li>
              <a href="https://dec-iitkgp.vlabs.ac.in/exp/basic-logic-gates/">
                Analysis and Synthesis of Boolean Expressions using Basic Logic
                Gates
              </a>
            </li>
            <li>
              <a href="https://dec-iitkgp.vlabs.ac.in/exp/functions-using-decoders">
                Analysis and Synthesis of Logic Functions using Decoders
              </a>
            </li>
            <li>
              <a href="https://dec-iitkgp.vlabs.ac.in/exp/digital-comparators">
                {" "}
                Analysis and Synthesis of Boolean Relations using Digital
                Comparators
              </a>
            </li>
            <li>
              <a href="https://dec-iitkgp.vlabs.ac.in/exp/digital-comparators">
                Analysis and Synthesis of Boolean Relations using Digital
                Comparators
              </a>
            </li>
            <li>
              <a href="https://dec-iitkgp.vlabs.ac.in/exp/arithmetic-expressions">
                Analysis and Synthesis of Arithmetic Expressions using Adders /
                Subtractors
              </a>
            </li>
            <li>
              <a href="https://dec-iitkgp.vlabs.ac.in/exp/sequential-circuits/">
                Analysis and Synthesis of Sequential Circuits using Basic
                Flip-Flops
              </a>
            </li>
            <li>
              <a href="https://dec-iitkgp.vlabs.ac.in/exp/multi-bit-sequential-circuits/">
                Analysis and Synthesis of Multi-bit Sequential Circuits using
                Shift Registers
              </a>
            </li>
            <li>
              <a href="https://dec-iitkgp.vlabs.ac.in/exp/arithmetic-logic-unit/">
                Design of Arithmetic Logic Unit (ALU)
              </a>
            </li>
          </ol>
        </Box>
      </Box>
    </>
  );
}

export default Main;

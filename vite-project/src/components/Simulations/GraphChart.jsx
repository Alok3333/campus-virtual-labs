// import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

// const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const GraphChart = () => {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title: {
      text: "TTL NAND GATE GRAPH",
    },
    axisY: {
      title: "NAND output((v)",
      suffix: "",
      minimum: 0,
      maximum: 4,
      interval: 0.5,
    },
    axisX: {
      title: "NAND Input (v)",
      prefix: "",
      minimum: 0,
      maximum: 5,
      interval: 0.5,
    },
    data: [
      {
        type: "line",
        toolTipContent: "Week {x}: {y}",
        dataPoints: [
          { x: 0, y: 3.94 },
          { x: 0.2, y: 3.92 },
          { x: 0.4, y: 3.76 },
          { x: 0.6, y: 3.53 },
          { x: 0.8, y: 3.22 },
          { x: 1, y: 2.02 },
          { x: 1.2, y: 0.31 },
          { x: 1.4, y: 0.17 },
          { x: 1.6, y: 0.15 },
          { x: 1.8, y: 0.15 },
          { x: 2, y: 0.15 },
          { x: 2.2, y: 0.15 },
          { x: 2.4, y: 0.15 },
          { x: 2.6, y: 0.15 },
          { x: 2.8, y: 0.15 },
          { x: 3, y: 0.15 },
          { x: 3.2, y: 0.15 },
          { x: 3.4, y: 0.15 },
          { x: 3.6, y: 0.15 },
          { x: 3.8, y: 0.15 },
          { x: 4, y: 0.15 },
          { x: 4.2, y: 0.15 },
          { x: 4.4, y: 0.15 },
          { x: 4.6, y: 0.15 },
          { x: 4.8, y: 0.15 },
          { x: 5, y: 0.15 },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </div>
  );
};

export default GraphChart;

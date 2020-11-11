import React from "react";
import ReactFC from "react-fusioncharts";

const dataSource = {
  chart: {
    caption: "Pressure",
    captionontop: "0",
    origw: "380",
    origh: "250",
    gaugestartangle: "135",
    gaugeendangle: "45",
    gaugeoriginx: "190",
    gaugeoriginy: "220",
    gaugeouterradius: "190",
    theme: "fusion",
    showvalue: "1",
    numbersuffix: " MPa",
    valuefontsize: "25",
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "0.2",
        code: "#62B58F",
      },
      {
        minvalue: "0.2",
        maxvalue: "0.4",
        code: "#FFC533",
      },
      {
        minvalue: "0.4",
        maxvalue: "0.6",
        code: "#F2726F",
      },
    ],
  },
  dials: {
    dial: [
      {
        value: "0.3",
        tooltext: "Moderate Pressure",
      },
    ],
  },
};

const chartConfigs = {
  type: "angulargauge",
  width: 600,
  height: 400,
  dataFormat: "json",
  dataSource: dataSource,
};
function Gauge() {
  return (
    <div>
      <ReactFC {...chartConfigs} />
    </div>
  );
}

export default Gauge;

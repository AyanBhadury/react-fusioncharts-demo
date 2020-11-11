import React from "react";
import "./App.css";
import Gauge from "./Components/Gauge";
import FusionCharts from "fusioncharts";
import Widgets from "fusioncharts/fusioncharts.widgets";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";
ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

function App() {
  return (
    <div className="App">
      <Gauge />
    </div>
  );
}

export default App;

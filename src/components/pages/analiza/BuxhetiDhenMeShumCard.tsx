import React from "react";
import LineChart from "./charts/LineChart";

const BuxhetiDhenMeShumCard = () => {
  return (
    <div aria-label="Budget graphic" className="buxhetiDhenMeShmCard">
      <h2>Buxheti i dhën më shumë</h2>
      <div aria-label="Graphic card container" id="analiz-bar_chart-container">
        <LineChart />
      </div>
    </div>
  );
};

export default BuxhetiDhenMeShumCard;

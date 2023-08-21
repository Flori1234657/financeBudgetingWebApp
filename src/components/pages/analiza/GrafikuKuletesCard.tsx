import React from "react";
import GraphChart from "./charts/GraphChart";

const GrafikuKuletesCard = () => {
  return (
    <div aria-label="Wallet graphic card" className="kuletaGraphicCard">
      <h2>Wallet graphic</h2>
      <div
        aria-label="Wallet daily graphic"
        id="analiz-graph-container"
        className="daily-graph-chart"
      >
        <GraphChart />
      </div>
    </div>
  );
};

export default GrafikuKuletesCard;

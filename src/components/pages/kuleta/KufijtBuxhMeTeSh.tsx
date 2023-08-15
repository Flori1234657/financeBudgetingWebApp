import React from "react";
import PieCh from "./charts/PieCh";
import GraphChart from "./charts/GraphChart";

const KufijtBuxhMeTeSh = () => {
  return (
    <div aria-label="Budgeting limits card">
      <h2>Kufijtë buxhetor më të shumtë</h2>
      {window.innerWidth < 900 ? (
        <>
          {" "}
          <div aria-label="Pie chart">
            <PieCh />
          </div>
          <div aria-label="graph" className="graphicLineChart">
            <GraphChart />
          </div>
        </>
      ) : (
        <div className="kreu_tabWLastCard_charts_group">
          <div aria-label="Pie chart">
            <PieCh />
          </div>
          <div aria-label="graph" className="graphicLineChart">
            <GraphChart />
          </div>
        </div>
      )}
    </div>
  );
};

export default KufijtBuxhMeTeSh;

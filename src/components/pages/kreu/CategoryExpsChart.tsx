import React from "react";
import PieChart from "./charts/PieChart";

const CategoryExpsChart: React.FC = () => {
  return (
    <div
      className="krGrphUp-card2"
      aria-label="Expense category pie chart cart"
    >
      <h2>Shpenzuar më shumë kategori</h2>
      <div aria-label="Pie chart group">
        <PieChart />
      </div>
    </div>
  );
};

export default CategoryExpsChart;

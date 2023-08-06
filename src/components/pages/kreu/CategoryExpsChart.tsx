import React from "react";

const CategoryExpsChart: React.FC = () => {
  return (
    <div
      className="krGrphUp-card2"
      aria-label="Expense category pie chart cart"
    >
      <h2>Shpenzuar më shumë kategori</h2>
      <div aria-label="Pie chart group">
        <div>{/* Pie CHART */}</div>
        <ul>
          <li>Kategoria1</li>
          <li>Kategoria2</li>
          <li>Kategoria3</li>
          <li>Kategoria4</li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryExpsChart;

import React, { useState } from "react";
import { ChartData } from "./interfaces";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const VerticalLineChart = () => {
  const [data, setData] = useState<ChartData>({
    labels: ["Ushqimore", "Higjenike", "Shtepiake", "Veshje"],
    datasets: [
      {
        label: "Shpenzuar LEK",
        data: [120, 345, 1223, 432],
        backgroundColor: ["#dafffb", "#176b87", "#cc6666", "#6680cc"],
      },
    ],
  });

  return (
    <Bar
      data={data}
      options={{
        scales: {
          x: {
            ticks: {
              font: {
                size: 7.5, // Change X-axis label font size
              },
            },
          },
          y: {
            ticks: {
              font: {
                size: 7.5, // Change Y-axis label font size
              },
            },
          },
        },
      }}
    />
  );
};

export default VerticalLineChart;

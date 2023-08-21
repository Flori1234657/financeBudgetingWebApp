import React, { useEffect, useState } from "react";
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
import { ChartData } from "../../kreu/charts/interfaces";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data: ChartData = {
  labels: ["Lab1", "Exp1", "Exp2", "Exp3"],
  datasets: [
    {
      label: "Dataset 1",
      data: [123, 456, 789, 212],
      backgroundColor: ["rgb(218, 255, 251)"],
    },
  ],
};
const LineChart = () => {
  //Kodi posht InshaaAllah eshte per te rregulluar heightin
  const [chartData, setChartData] = useState<any>({});

  useEffect(() => {
    const resizeHandler = () => {
      // Get the container element
      const container = document.getElementById("analiz-bar_chart-container");

      // Update the chart's height to match the container's height
      if (container) {
        const newHeight = container.clientHeight;
        setChartData({
          ...data,
          options: {
            ...chartData.options,
            maintainAspectRatio: false, // Disable the default aspect ratio
          },
          height: newHeight,
        });
      }
    };

    // Add resize listener
    window.addEventListener("resize", resizeHandler);

    // Call the resize handler once to set the initial height
    resizeHandler();

    // Clean up the resize listener
    return () => window.removeEventListener("resize", resizeHandler);
  }, []); // Run this effect only once on component mount

  return (
    <Bar data={data} options={chartData.options} height={chartData.height} />
  );
};

export default LineChart;

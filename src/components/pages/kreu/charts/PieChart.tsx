import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ChartData } from "./interfaces";

ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = () => {
  const [data, setData] = useState<ChartData>({
    labels: ["Ushqimore", "Higjenike", "Shtepiake", "Veshje"],
    datasets: [
      {
        label: "Shpenzuar LEK",
        data: [120, 345, 1223, 432],
        backgroundColor: ["#dafffb", "#176b87", "#cc6666", "#6680cc"],
        borderColor: ["transparent"],
        borderWidth: 1,
      },
    ],
  });

  return <Pie data={data} />;
};

export default PieChart;

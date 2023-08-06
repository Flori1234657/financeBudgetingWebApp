import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartData } from "./interfaces";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [data, setData] = useState<ChartData>({
    labels: [
      "Qer",
      "Qer",
      "Qer",
      "Korr",
      "Korr",
      "Korr",
      "Korr",
      "Gush",
      "Gush",
      "Gush",
    ],
    datasets: [
      {
        label: "Shpenzimet ",
        data: [120, 345, 1223, 432, 313, 871, 232, 2131, 1212, 423],
        borderColor: "#176b87",
        borderWidth: 1,
      },
    ],
  });

  const options = {
    scales: {
      x: {
        ticks: {
          color: "#dafffb", // Change the x-axis label text color here
        },
      },
      y: {
        ticks: {
          color: "#dafffb", // Change the y-axis label text color here
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#176b87", // Change the dataset label text color here
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;

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
import { ChartData } from "../../kreu/charts/interfaces";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const GraphChart = () => {
  const [data, setData] = useState<ChartData>({
    labels: [
      "23Qer",
      "24Qer",
      "25Qer",
      "26Qer",
      "27Qer",
      "28Qer",
      "29Qer",
      "30Qer",
      "1Korr",
      "2Korr",
    ],
    datasets: [
      {
        label: "Grafiku i Kuletës ",
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
          font: {
            size: 7.5, // Change X-axis label font size
          },
        },
      },
      y: {
        ticks: {
          color: "#dafffb", // Change the y-axis label text color here
          font: {
            size: 7.5, // Change Y-axis label font size
          },
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

export default GraphChart;

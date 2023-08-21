import { useState, useEffect } from "react";
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

  //Kodi posht InshaaAllah eshte per te rregulluar heightin
  const [chartData, setChartData] = useState<any>({});

  useEffect(() => {
    const resizeHandler2 = () => {
      // Get the container element
      const container = document.getElementById("analiz-graph-container");

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
    window.addEventListener("resize2", resizeHandler2);

    // Call the resize handler once to set the initial height
    resizeHandler2();

    // Clean up the resize listener
    return () => window.removeEventListener("resize2", resizeHandler2);
  }, []); // Run this effect only once on component mount

  return (
    <Line
      data={data}
      options={chartData.options}
      height={window.innerWidth < 900 ? "" : chartData.height}
    />
  );
};

export default GraphChart;

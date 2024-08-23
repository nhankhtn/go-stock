"use client";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { Line } from "react-chartjs-2";

const data = {
  labels: ["", "", "", "", "", "", "", "", "", ""],
  datasets: [
    {
      label: "",
      data: [90, 85, 70, 60, 55, 50, 45, 40, 35, 30],
      borderColor: "red",
      fill: true,
      backgroundColor: "red",
      pointRadius: 0,
      pointHoverRadius: 2,
      spanGaps: true,
      borderWidth: 1,
      tension: 0.1,
    },
  ],
};
const options = {
  scales: {
    x: {
      display: true,
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      display: true,
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: { display: false },
  },
};

export default function ChartBasic() {
  return <Line data={data} options={options} />;
}

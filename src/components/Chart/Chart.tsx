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
  ChartOptions,
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
import styles from "./Chart.module.scss";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["15", "16", "17", "18", "19", "20", "21", "22"],
  datasets: [
    {
      label: "",
      data: [100, 200, 150, 250, 180, 160, 140, 200],
      borderColor: "green",
      backgroundColor: "rgba(0, 164, 241, 0.1)",
      pointBorderColor: "green",
      pointBackgroundColor: "green",
      pointRadius: 5,
      pointHoverRadius: 7,
      fill: true,
      tension: 0.3,
    },
  ],
};

const options: ChartOptions<"line"> = {
  scales: {
    x: {
      grid: {
        offset: true,
        drawTicks: false,
      },
      type: "category",
      ticks: {
        callback(value: string | number, index: number) {
          var daysOfWeek = [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun",
            "Mon",
          ];
          return daysOfWeek[index];
        },
      },
    },
    y: {
      beginAtZero: true,
      min: 50,
      max: 300,
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (tooltipItem: any) {
          return "$" + tooltipItem.formattedValue;
        },
        title: function (tooltipItems: any) {
          return tooltipItems[0].label + " Sep on 12:00";
        },
      },
    },
  },
};

export default function Chart() {
  return <Line data={data} options={options} />;
}

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

// Đăng ký các thành phần cần thiết
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
      backgroundColor: "rgba(255, 0, 0, 0.1)",
      borderWidth: 2,
      tension: 0.4, // Để đường cong mềm mại hơn
    },
  ],
};
const options = {
  scales: {
    x: { display: false },
    y: { display: false },
  },
  plugins: {
    legend: { display: false },
  },
};

export default function ChartBasic() {
  return <Line data={data} options={options} />;
}

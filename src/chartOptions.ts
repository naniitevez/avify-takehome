import { ChartOptions } from "chart.js/auto";

const options: ChartOptions<"bar"> = {
  maintainAspectRatio: true,
  indexAxis: "y",
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        color: "#C0BEC9",
      },
      grid: {
        color: "#363636",
      },
    },
    y: {
      ticks: {
        color: "#C0BEC9",
      },
      grid: {
        color: "#363636",
      },
    },
  },
  plugins: {
    datalabels: {
      formatter: (value, context) => `${value}%`,
      color: "#dfdede",
      align: "center",
      anchor: "end",
      display: "auto",
    },
    legend: {
      display: true,
      position: "top",
    },
  },
};

export default options;

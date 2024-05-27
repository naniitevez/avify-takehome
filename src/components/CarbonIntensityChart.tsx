import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  ChartData,
  ChartOptions,
  Chart,
  LinearScale,
  CategoryScale,
  BarElement,
} from "chart.js";
import fetchData from "../fetchData";
import { Generationmix } from "../types";
import Loading from "./loader/Loading";
Chart.register(LinearScale, CategoryScale, BarElement);

const CarbonIntensityChart: React.FC = () => {
  const [generationData, setGenerationData] = useState<Generationmix[]>([]);

  useEffect(() => {
    fetchData()
      .then((data) => setGenerationData(data))
      .catch(console.error);
  }, []);

  const data: ChartData<"bar"> = {
    labels: generationData ? generationData.map((d) => d.fuel) : [],
    datasets: [
      {
        label: "Percentage of Energy Generation",
        data: generationData ? generationData.map((d) => d.perc) : [],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <>
      <h1>UK Energy Generation Mix</h1>
      <section className="chart_container">
        {generationData?.length > 0 ? (
          <Bar data={data} options={options} />
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
};

export default CarbonIntensityChart;

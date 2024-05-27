import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  ChartData,
  Chart,
  LinearScale,
  CategoryScale,
  BarElement,
} from "chart.js";
import options from "../ChartOptions";
import ChartDataLabels from "chartjs-plugin-datalabels";
import fetchData from "../fetchData";
import { Generationmix } from "../types";
import Loading from "./loader/Loading";
Chart.register(LinearScale, CategoryScale, BarElement, ChartDataLabels);

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
        hoverBackgroundColor: "rgba(75, 192, 192, 0.8)",
        hoverBorderColor: "rgba(75, 192, 192, 1)",
        borderColor: "rgba(75, 192, 192, 1)",
        hoverBorderWidth: 2,
        borderWidth: 1,
      },
    ],
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

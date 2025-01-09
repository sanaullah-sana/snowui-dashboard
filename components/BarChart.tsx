"use client"; // Needed for client-side rendering in Next.js
import React, { useEffect, useRef } from "react";
import { Chart, BarElement, CategoryScale, LinearScale, ChartOptions, ChartData } from "chart.js";

// Register necessary Chart.js components
Chart.register(BarElement, CategoryScale, LinearScale);

const BarChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const data: ChartData<"bar"> = {
      labels: ["January", "February", "March", "April"],
      datasets: [
        {
          label: "Sales",
          data: [10, 20, 30, 40],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const options: ChartOptions<"bar"> = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Create the chart instance
    new Chart(ctx, {
      type: "bar",
      data,
      options,
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarChart;

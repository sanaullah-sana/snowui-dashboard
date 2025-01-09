"use client"; // Enables client-side rendering in Next.js
import React, { useEffect, useRef } from "react";
import { Chart, DoughnutController, ArcElement, Tooltip, Legend, ChartOptions, ChartData } from "chart.js";

// Register necessary Chart.js components
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const DonutChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const data: ChartData<"doughnut"> = {
      labels: ["Red", "Blue", "Yellow", "Green"],
      datasets: [
        {
          label: "Votes",
          data: [300, 50, 100, 150],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 2,
        },
      ],
    };

    const options: ChartOptions<"doughnut"> = {
      responsive: true,
      plugins: {
        legend: {
          position: "right",
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const value = context.raw as number;
              return `${context.label}: ${value} votes`;
            },
          },
        },
      },
      cutout: "70%", // Creates the donut effect
    };

    // Create the chart instance
    new Chart(ctx, {
      type: "doughnut",
      data,
      options,
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default DonutChart;

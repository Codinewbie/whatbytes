import React from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Registering Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ myScore }) => {
  // Calculate the percentage of score achieved
  const maxScore = 15;
  const scorePercentage = ((myScore / maxScore) * 100).toFixed(2);


  // Doughnut chart data
  const data = {
    labels: ["Score Achieved", "Remaining"],
    datasets: [
      {
        data: [scorePercentage, 100 - scorePercentage], // Data for the doughnut chart
        backgroundColor: ["#3b82f6", "#e5e7eb"], // Blue for achieved score, gray for remaining
        borderWidth: 1,
      },
    ],
  };

  // Doughnut chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw;
            if (context.dataIndex === 0) {
              return `${value}% of Max Score Achieved`;
            }
            return `${value}% Remaining`;
          },
        },
      },
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="w-full h-48">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;

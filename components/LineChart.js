import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Registering Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ myScore, othersScores }) => {
  // Count occurrences of each score among others
  const scoreCounts = othersScores.reduce((acc, score) => {
    acc[score] = (acc[score] || 0) + 1;
    return acc;
  }, {});

  // Extract unique scores and sort them
  const labels = Object.keys(scoreCounts).map(Number).sort((a, b) => a - b);
  const counts = labels.map((label) => scoreCounts[label]);

  // Ensure `myScore` is part of the labels
  console.log("myScore: ", myScore);
  console.log("labels: ", labels);

  // Chart data with point highlight logic
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Number of Students",
        data: counts,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
        tension: 0.3,
        // Manually hardcode the highlight condition
        pointBackgroundColor: labels.map((label) => {
          // Direct comparison to ensure exact match
          if (label == myScore) {
            console.log(`Highlighting score: ${label}`); // Debugging the exact match
            return "#3b82f6"; // Red highlight for `myScore`
          } else {
            return "white"; // Default blue for other points
          }
        }),
        // pointBorderColor: labels.map((label) =>
        //   label == myScore ? "darkorange" : "#3b82f6"
        // ),
        pointRadius: labels.map((label) =>
          label == myScore ? 6 : 5 // Larger radius for `myScore`
        ),
        pointHoverBackgroundColor: labels.map((label) =>
          label == myScore ? "#3b82f6" : "white"
        ),
        // pointHoverBorderColor: labels.map((label) =>
        //   label == myScore ? "darkorange" : "#3b82f6"
        // ),
        pointHoverRadius: labels.map((label) =>
          label == myScore ? 8 : 6 // Larger radius on hover for `myScore`
        ),
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const index = context.dataIndex;
            const score = labels[index];
            const count = counts[index];
            return ` ${score==myScore ? `Your Percentile - ${score}%`: `${count} Students scored ${score}%`} `;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Percentiles",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Students",
        },
      },
    },
  };

  return (
    <div className="w-full h-96">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;

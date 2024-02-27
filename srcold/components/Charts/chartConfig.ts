export const options = {
  responsive: true,
  layout: {
    padding: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
    },
  },
  scales: {
    r: {
      grid: {
        circular: true,
        color: "rgba(255, 255, 255, 0.5)", // Lighter grid lines against the dark background
      },
      angleLines: {
        color: "rgba(255, 255, 255, 0.5)", // Lighter angle lines
      },
      pointLabels: {
        color: "#fff", // Text color for the labels
        padding: -5,
        backdropColor: "#8289D5",
        backdropPadding: 2,
        borderRadius: 7,
        font: {
          size: 14,
        },
      },
      ticks: {
        display: false, // This will hide the tick labels such as 100, 90, 80, etc.
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "#fff", // Color of the legend labels
      },
    },
    tooltip: {
      // Tooltip configuration, if needed
    },
  },
  elements: {
    line: {
      borderWidth: 2, // Width of the radar line
    },
    point: {
      radius: 3, // Radius of the points on the radar
    },
  },
  maintainAspectRatio: false, // Set to false to allow custom sizes
};

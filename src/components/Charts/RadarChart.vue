<template>
  <div class="chart-container-outer">
    <div class="chart-container">
      <canvas ref="radarChart"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const radarChart = ref(null);
let chartInstance: Chart<"radar", number[], string> | null = null;
const createChart = () => {
  const body = document.body;
  let stline = "rgba(255, 255, 255, 0.5)";
  console.log(body.classList.contains("dark"));
  if (body.classList.contains("dark")) {
    stline = "#fff";
    console.log("light");
  } else {
    stline = "#BDBDBD";
    console.log("dark");
  }
  console.log("Chart ", stline);
  if (chartInstance) {
    chartInstance.destroy();
  }
  const ctx = radarChart.value.getContext("2d");
  chartInstance = new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [
        {
          label: "My First Dataset",
          fill: true,
          backgroundColor: "rgba(165,206,61,0.5)",
          borderColor: "rgba(165,206,61,1)",
          pointBackgroundColor: "rgba(165,206,61,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#000",
          pointHoverBorderColor: "rgba(165,206,61,1)",
          data: [28, 100, 100, 20, 30, 70, 100],
        },
      ],
    },
    options: {
      scales: {
        r: {
          beginAtZero: true,

          //   angleLines: {
          //     display: false // Hide angle lines
          //   },

          grid: {
            circular: true,
            color: stline,
            lineWidth: 2,
          },
          ticks: {
            display: false, // Hide the ticks
            stepSize: 18,

            // stepSize: .9,
          },
          angleLines: {
            color: stline,
          },
          pointLabels: {
            color: "#fff", // Text color for the labels
            padding: 0,
            backdropColor: "#8289D5",

            backdropPadding: 5,
            borderRadius: 10,
            font: {
              size: 12,
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false, // Hide legend
        },
      },
      elements: {
        point: {
          radius: 1, // Radius of the points on the radar
        },
      },
      layout: {
        padding: {
          top: 10,
          right: 10,
          bottom: 15,
          left: 10,
        },
      },
      // Ensure the background is transparent
    },
  });
};
onMounted(() => {
  console.log("Here so ado;");
  createChart();
});
</script>

<style scoped>
.chart-container {
  width: 300px;
  border-radius: 50%;
  border: solid 2px #3c3c41;
  border-width: 3px 3px 3px 3px;
  border-color: var(--my-chart-border);
}

.chart-container-outer {
  height: 350px;
  width: 350px;
  padding: 25px;
  position: relative;
  margin: auto;
}

.chart-container-outer::before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: 0px;
  bottom: 0px;
  border-radius: inherit;
  filter: blur(11.5px);
  z-index: -1;
  border: 0.959px solid #8289D5;
  box-shadow: 0px 3.834px 3.834px 0px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
}

canvas {
  border-radius: 50%;
  background: rgba(130, 137, 213, 0.10);
  /* background-color: transparent; Transparent background for the canvas */
}
</style>

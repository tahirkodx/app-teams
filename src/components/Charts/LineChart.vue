<template>
  <div class="chart-container">
    <canvas ref="lineChartCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const lineChartCanvas = ref<HTMLCanvasElement | null>(null);
let lineChartInstance: Chart | null = null;

const createLineChart = () => {
  if (!lineChartCanvas.value) return;
  const context = lineChartCanvas.value.getContext("2d");
  if (!context) return;
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

  if (lineChartInstance) {
    lineChartInstance.destroy();
  }

  lineChartInstance = new Chart(context, {
    type: "line",
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [
        {
          label: "Dataset 1",
          backgroundColor: "rgba(165,206,61,0.5)",
          borderColor: "rgba(165,206,61,0.5)",
          data: [0, 10, 5, 2, 20, 30, 45],

          pointBackgroundColor: "rgba(165,206,61,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#000",
          pointHoverBorderColor: "rgba(165,206,61,1)",
          tension: 0.5,
          
        },
      ],
    },
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
      scales: {
        r: {
          //   angleLines: {
          //     display: false // Hide angle lines
          //   },

          grid: {
            circular: true,
            color: stline,
            lineWidth: 10,
          },
          ticks: {
            display: false, // Hide the ticks
            stepSize: 50,

            // stepSize: .9,
          },
        },
      },
      plugins: {
        legend: {
          display: false, // Hide legend
        },
      },
      elements: {
        line: {
          borderWidth: 5, // Radius of the points on the radar
        },
        bar :{
          borderWidth :10,
          borderColor : "rgba(165,206,61,1)",
          
        }
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

onMounted(createLineChart);
</script>
<style scoped>
.chart-container {
  height: 300px;
}
.chart-container-outer {
  height: 350px;
  width: 350px;
  padding: 25px 25px 25px 25px;
  position: relative;
  margin: auto;
  overflow: hidden;
}
canvas {
  background: var(--my-lineChart-background);
  /* background-color: transparent; Transparent background for the canvas */
}
</style>

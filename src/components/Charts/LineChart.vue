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
    
  } else {
    stline = "#BDBDBD"; 
  }

  if (lineChartInstance) {
    lineChartInstance.destroy();
  }

  lineChartInstance = new Chart(context, {
    type: "line",
    data: {
      labels: ["JAN", "FEB", "MAR", "ARP", "MAY", "JUN"],
      datasets: [
        {
          borderColor: "rgba(44, 58, 209, 0.50)",
          data: [1, 3, 5, 7.5, 4.2, 7.3, 8],
          fill: true,
          backgroundColor: "rgba(44, 58, 209, 0.10)",
          pointHoverBackgroundColor: "#000",
          tension: 0,
          stepped: false
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
            lineWidth:10

          },
          ticks: {
            display: false, // Hide the ticks
            
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
          borderWidth: 2, // Radius of the points on the radar
        },
        point:{
          radius : 6,
          borderColor : "rgba(44, 58, 209, 0.50)",
          backgroundColor : "white",
          borderWidth : 1,
          
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
  margin: 10px;
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

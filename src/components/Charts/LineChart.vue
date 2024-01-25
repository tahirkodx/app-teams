<template>
  <div class="chart-container">
    <canvas ref="lineChartCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Chart, registerables } from "chart.js";
import { usePlaybookStore } from "@/store";
const playbookStore = usePlaybookStore()
const emit = defineEmits(["update"]);
const props = defineProps(["data"]);
const selectedData = ref();
const formatter = new Intl.DateTimeFormat("en-US", {
  // year: 'numeric',
  month: "short",
  // day: 'numeric',
});
console.log(props.data)
const scoresArray = props.data.map(
  (element: { score: any; date: any }) => element.score
);
const datesArray = props.data.map((element: { score: any; date: any }) =>
  formatter.format(new Date(element.date))
);
const showScoreOnClick = () => {
  console.log(selectedData.value.date)
  playbookStore.filteredNotesByDate(selectedData.value.date)
  // todo need to correct login about date and onclick functuon
  emit("update", selectedData.value.score, selectedData.value.date);
};
Chart.register(...registerables);
const lineChartCanvas = ref<HTMLCanvasElement | null>(null);
let lineChartInstance: Chart | null = null;

const createLineChart = () => {
  if (!lineChartCanvas.value) return;
  const context = lineChartCanvas.value.getContext("2d");
  if (!context) return;
  const body = document.body;
  let stline = "rgba(255, 255, 255, 0.5)";
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
      labels: datesArray,
      datasets: [
        {
          borderColor: "rgba(44, 58, 209, 0.50)",
          data: scoresArray,
          fill: true,
          backgroundColor: "rgba(44, 58, 209, 0.10)",
          pointHoverBackgroundColor: "#fff",
          pointBackgroundColor : "#fff",
          tension: 0,
          stepped: false,
        },
        {
          label: "line-1",
          borderColor: "rgb(255, 0, 0)",
          data: props.data,
          // hidden
          hidden: true,
        },
      ],
    },
    options: {
      onClick: (event, elements) => {
        if (elements.length > 0) {
          const index = elements[0].index;
          const hiddenData = lineChartInstance?.data.datasets[1].data[index]; // Assuming the hidden dataset is the second one
          selectedData.value = hiddenData;
          showScoreOnClick();
        }
      },
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
          },
        },
      },
      plugins: {
        legend: {
          display: false, // Hide legend
        },

        tooltip: {
          caretSize: 5,
          boxWidth: 0,
          boxHeight: 0,
          cornerRadius: 15,
          padding: 12,
          caretPadding: 10,
          backgroundColor: "rgba(44, 58, 209, 0.50)",
          yAlign: "bottom",
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) {
                label += "";
              }
              if (context.parsed.y !== null) {
                label = context.parsed.y + "/10";
              }
              return label;
            },
            title: function (context) {
              // showScoreOnClick(context[0].raw, context[0].label);
              let label = "";
              return label;
            },
          },
        },
      },
      elements: {
        line: {
          borderWidth: 2, // Radius of the points on the radar
        },
        point: {
          radius: 6,
          borderColor: "rgba(44, 58, 209, 0.50)",
          backgroundColor: "#fff",
          borderWidth: 1,
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

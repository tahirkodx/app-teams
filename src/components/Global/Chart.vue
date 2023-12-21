<template>
  <div class="graph-box">
    <Radar :data="chartData" :options="chartOptions" />
  </div>
  
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import { Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'

// Register the necessary Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,

)

// Assuming chartConfig.js exports an object with `data` and `options` properties
// Make sure to adjust the import path to your chartConfig.js file
import { options } from './chartConfig';

// Reactive references for chart data and options
// const chartData = ref(data);
const chartOptions = ref(options);
const chartData = {
    labels: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7'
    ],
    datasets: [
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(165,206,61,1)',
        borderColor: 'rgba(165,206,61,1)',
        pointBackgroundColor: 'rgba(165,206,61,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(165,206,61,1)',
        data: [28, 48, 40, 19, 96, 27, 100]
      }
    ]
  }
</script>
<style scoped>
.chart-canvas {
  display: flex;
  align-items: flex-start; /* Aligns items to the start of the container's cross axis */
  box-sizing: border-box;
  width: 390px; /* Adjust as needed */
  height: 793.333px; /* Adjust as needed */
  /* Additional styles */
}
.graph-box {
  
  height: 300px; /* Adjust as needed */
  /* Additional styles */
}
</style>

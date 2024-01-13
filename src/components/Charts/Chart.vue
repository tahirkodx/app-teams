<template>
  <div >
  <div class="graph-box">
    <Radar :data="chartData" :options="chartOptions" />
  </div>
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
        data: [28, 48, 40, 40, 96, 27, 100]
      }
    ]
  }
</script>
<style scoped>
.graph-box {
    background: #3c3c41;
    border: solid 2px #3c3c41;
    box-shadow: 0 0 0 3px #3c3c41;
    width: 100%;
    max-width: 300px; /* Maximum size */
    height: auto;
    aspect-ratio: 1 / 1; /* Maintain aspect ratio */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto; /* Centering the box */
}

canvas {
    width: 100% !important;
    height: auto !important;
    aspect-ratio: 1 / 1; /* Maintain aspect ratio */
    
}


/* Responsive adjustments */
/* @media (max-width: 768px) {
    .graph-box {
        max-width: 250px;
    }
}

@media (max-width: 480px) {
    .graph-box {
        max-width: 200px;
    }
} */

</style>

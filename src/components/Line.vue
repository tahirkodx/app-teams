<template>
  how are you?
  <h1>All well?</h1>
    <Line :data="props.data" :options="options" />
</template>

<script setup lang="ts">
  import { Line } from 'vue-chartjs'
  import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  ChartData,
  CategoryScale,
  LinearScale,
  } from 'chart.js'
  
  const props = defineProps<{
    data: ChartData<"line", (number | null)[], unknown>
  }>()

  ChartJS.register(
    LineController,
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale
  )
  
  ChartJS.defaults.font.size = 12;

  const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}
</script>
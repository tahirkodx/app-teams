<template>
    <Radar :data="props.data" :options="options" />
</template>

<script setup lang="ts">
  import { Radar } from 'vue-chartjs'

  import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  ChartData,
  } from 'chart.js'
  
  const props = defineProps<{
    data: ChartData<"radar", (number | null)[], unknown>
  }>()

  ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  )
  
  ChartJS.defaults.font.size = 12;

  var options = {
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 14
          }
        },
        min: 0,
        max: 100,
        ticks: {
          display: false,
          max: 5,
          maxTicksLimit: 6,
        },
        grid: {
          circular: true,

        }
      },
    },
    elements: {
      line: {
        borderWidth: 3
      },
      point:{
        radius: 0
      }
    },
  }
</script>
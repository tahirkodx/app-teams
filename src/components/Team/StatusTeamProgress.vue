<template>
    <!--Line :data=data :options=options /-->
    <!--Line :data=chartData.data :options=chartData.options /-->
</template>

<script setup lang="ts">
//  import { defineProps } from 'vue'
//  import { Line } from 'vue-chartjs'
//
//  import {
//    Chart as ChartJS,
//    CategoryScale,
//    LinearScale,
//    TimeScale,
//    PointElement,
//    LineElement,
//    Title,
//    Tooltip
//  } from 'chart.js'
//  import 'chartjs-adapter-moment'
//
//  ChartJS.register(
//    CategoryScale,
//    LinearScale,
//    PointElement,
//    LineElement,
//    TimeScale,
//    Title,
//    Tooltip
//  )
//  
//  ChartJS.defaults.font.size = 14;
//
//  const chartData = {
//  type: "line",
//  data: {
//    datasets: [{
//        label: "Température",
//        borderColor: "red",
//        backgroundColor: "red",
//        fill: false,
//        data: [{
//            x: "2020-07-05T15:38:47.933711",
//            y: 2.8224692
//          },
//          {
//            x: "2020-08-23T15:48:47.490669",
//            y: 33.63129
//          },
//          {
//            x: "2020-09-05T15:58:48.182698",
//            y: 40.540405
//          },
//          {
//            x: "2020-10-05T16:08:47.829882",
//            y: 3.0312533
//          },
//          {
//            x: "2020-11-05T16:18:47.489026",
//            y: 49.145626
//          }
//        ],
//        yAxisID: "yAxeTemperature"
//      },
//    ]
//  },
//  options: {
//    responsive: true,
//    hoverMode: "index",
//    stacked: false,
//    title: null,
//    scales: {
//      x: {
//        type: "time",
//        display: true,
//        position: "bottom",
//        id: "xAxeTime",
//        scaleLabel: {
//          display: true,
//          labelString: "Temps",
//          fontColor: "black"
//        },
//        time: {
//          unit: "month",
//          displayFormats: {
//            month: "MM"
//          },
//          tooltipFormat: "ll"
//        }
//      },
//      y: {
//          "type": "linear",
//          "display": true,
//          "position": "left",
//          "id": "yAxeTemperature",
//          "scaleLabel": {
//            "display": true,
//            "labelString": "Température",
//            "fontColor": "red"
//          }
//        }
//    }
//  }
//}
//
//
//const data = {
//  labels: [
//    new Date('2023-01-01'),
//    new Date('2023-02-01'),
//    new Date('2023-03-01'),
//    new Date('2023-04-01'),
//    new Date('2023-05-01'),
//    new Date('2023-06-01'),
//    new Date('2023-07-01'),
//    new Date(),
//  ],
//  datasets: [{
//    label: 'My First Dataset',
//    borderColor: "red",
//    backgroundColor: "red",
//    data: [106, 146, 136, 154, 290, 220, 487, 604],
//    fill: false,
//    tension: 0.1
//  }]
//};
//
//  var options = {
//    scales: {
//      x: {
//        type: 'time',
//        time: {
//          unit: 'month'
//        },
//        min: 0,
//        max: 100,
//        ticks: {
//          display: false,
//          max: 5,
//          maxTicksLimit: 6,
//        },
//        grid: {
//          circular: true,
//
//        }
//      },
//    },
//    elements: {
//      line: {
//        borderWidth: 3
//      },
//      point:{
//        radius: 0
//      }
//    },
//  }
</script>
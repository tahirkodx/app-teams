<template>
  <div v-if="chartData && chartData?.labels && chartData?.datasets">
    <radar-chart :chart-data="chartData" :options="chartOptions" />
  </div>
</template>

<script lang="ts">
import { Radar } from 'vue-chartjs';
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  components: {
    RadarChart: Radar
  },
  setup() {
    const chartData = ref({
      // Your initial chart data goes here
    });

    const chartOptions = ref({
      // Your chart options go here
    });

    onMounted(async () => {
      // If you're fetching data, do it here and then update chartData.value
    });

    return { chartData, chartOptions };
  }
});
</script>

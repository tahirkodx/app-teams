<template>
  <Radar :data=data> </Radar>
    <!--Line :data=data :options=options /-->
    <!--Line :data=chartData.data :options=chartData.options /-->
</template>

<script setup lang="ts">
  import Radar from '@/components/Radar.vue'
  import { useStatusStore } from '@/stores/status';
  import { fetchCurrent, teamID } from '@/stores/current';
  const statusStore = useStatusStore()
  await fetchCurrent()


  const data = {
    labels: statusStore.teamLastDimScores(teamID.value).labels,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: statusStore.teamLastDimScores(teamID.value).data
      }
    ]
  }
</script>
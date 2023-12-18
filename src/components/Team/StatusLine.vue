<template>
  --start statusline--
  <line-graph :data=data />
  --end statusline--
</template>

<script setup lang="ts">
  import lineGraph from '@/components/Line.vue'
  import { useStatusStore } from '@/stores/status';
  import { useTeamStore } from '@/stores/teams';
  const statusStore = useStatusStore()
  const teamStore = useTeamStore()
  await teamStore.fetch()
  await statusStore.fetch()

  const data = {
    labels: ['hi', 'there', 'how', 'are', 'you'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [0, 1, 2, 3, 4, 5]
      }
    ]
  }
</script>
<template>
  waiting for redirect. If nothing happens pres button:
  <ion-button @click="() => router.push({name: 'team'})" expand="block"></ion-button>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { IonButton } from '@ionic/vue';
  import router from '@/router/index'
  import { fetchCurrent, setActiveTeam } from '@/stores/current';
  await fetchCurrent()
  
  const route = useRoute()
  const teamID = route.params.id as string
  setActiveTeam(teamID)

  router.push({name: 'team'})

</script>

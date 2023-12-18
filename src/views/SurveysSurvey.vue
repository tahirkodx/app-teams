<template>
  <ion-page>
    <survey
      :surveyid=surveyID
      :teamid=teamID
      @done="finishSurvey"
      @cancel="() => router.push({name: 'surveys'})" />
  </ion-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router'
  import {
    IonPage,
  } from '@ionic/vue';
  import { chevronForwardOutline } from 'ionicons/icons';
  import { Radar } from 'vue-chartjs'
  import survey from '@/components/Surveys/Survey.vue'
  import router from '@/router/index'
  import { presentToast } from '@/utils/toast'
  import { useStatusStore } from '@/stores/status';
  const statusStore = useStatusStore()

  await Promise.all([
    statusStore.fetch(),
  ])

  const route = useRoute()
  const surveyID = route.params.surveyid as string
  const teamID = route.params.teamid as string
  console.log(surveyID)

  const index = ref(0)

  function finishSurvey() {
    presentToast('Survey finished. Well done!')
    router.push({name: 'surveys'})

    //router.go(-1)
  }

</script>

<style scoped>
  ion-col {
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }

</style>
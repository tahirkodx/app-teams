<template>
  <ion-page>
    <survey
      :surveyid=surveyID
      :teamid="teamID"
      @done="finishSurvey"
      @cancel="() => router.push({name: 'team'})"></survey>
  </ion-page>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import {
    IonPage,
  } from '@ionic/vue';
  import survey from '@/components/Surveys/Survey.vue'
  import router from '@/router/index'
  import { useUserStore } from '@/stores/user';
  import { useTeamStore } from '@/stores/teams';
  import { fetchCurrent, teamID } from '@/stores/current'
  import { presentToast } from '@/utils/toast';

  const userStore = useUserStore()

  const route = useRoute()
  const surveyID = route.params.surveyid as string

  const teamStore = useTeamStore()

  await Promise.all([
    teamStore.fetch(),
    userStore.fetch(),
    fetchCurrent(),
])

  function finishSurvey() {
    presentToast('Survey send')
    router.push({name: 'team'})
  }

</script>

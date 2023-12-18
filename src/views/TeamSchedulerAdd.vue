<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-title>Setup team</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <scheduler-settings v-model="surveySettings"/>      
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-button expand="block" @click="() => router.push({name: 'team'})">cancel</ion-button>
            </ion-col>
            <ion-col>
              <ion-button expand="block" @click="confirm">confirm</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-page>
    
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { 
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonButtons,
    IonBackButton,
    IonGrid,
    IonRow,
    IonCol,
  } from '@ionic/vue';
  import schedulerSettings from '@/components/Surveys/SchedulerSettings.vue'
  import { presentToast } from '@/utils/toast'
  import { useStatusStore } from "@/stores/status";
  import { useTeamStore } from "@/stores/teams";
  import { useUserStore } from '@/stores/user';
  import { fetchCurrent, teamID } from '@/stores/current'
  import router from "@/router";
  
  const userStore = useUserStore()
  const teamStore = useTeamStore()
  const statusStore = useStatusStore()
  
  await Promise.all([
    userStore.fetch(),
    statusStore.fetch(),
    teamStore.fetch(),
    fetchCurrent(),
  ])

  const now = new Date()
  const today = now.toISOString().slice(0, 10)
  const surveySettings = ref({
    duration: 72,
    period: "w",
    interval: 2,
    spacer_period: "w",
    day_count: 1,
    week_count: 1,
    start_date: today,
    time: "12:00:00",
    team: teamID
  })

  function confirm() {
    statusStore.schedulers.create(surveySettings.value)
    presentToast('New survey schedule made')
    router.push({name: 'team'})
  }

</script>
  
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

        <ion-checkbox v-model="sendNow" label-placement="end">Send survey now</ion-checkbox>
        <ion-checkbox v-model="setupPeriodically" label-placement="end">Setup survey cadence</ion-checkbox>

        <scheduler-settings v-model="surveySettings"/>
      
      <ion-button expand="block" router-link="/team/survey/invite" >Done</ion-button>

      </ion-content>
    </ion-page>
    
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { 
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonButtons,
    IonBackButton,
    IonCheckbox,
  } from '@ionic/vue';

  import schedulerSettings from '@/components/Surveys/SchedulerSettings.vue'

  const sendNow = ref(true)
  const setupPeriodically = ref(true)

  // -----------------------------------------------
  // Create default survey settings
  // -----------------------------------------------

  // Create datetime of now
  const now = new Date() 

  // Slide of date part of datetime string
  const today = now.toISOString().slice(0, 10)

  // Create default survey settings
  const surveySettings = ref({
    duration: 72,
    period: "w",
    interval: 2,
    spacer_period: "w",
    day_count: 1,
    week_count: 1,
    start_date: today,
    time: "12:00:00"
})

  </script>
  
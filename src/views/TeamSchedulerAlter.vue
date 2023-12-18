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
        <scheduler-settings v-model="surveySettings" :min-start-day="schedule.start_date"/>
        <ion-button id="present-delete-alert" expand="block" color='danger'>Delete</ion-button>
        <ion-alert
          trigger="present-delete-alert"
          header="Confirm delete"
          :buttons="deleteAlertButtons"
        />
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
  import { ref } from "vue";
  import { useRoute } from 'vue-router'
  import { 
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonAlert,
    IonButtons,
    IonBackButton,
    IonGrid,
    IonRow,
    IonCol,
  } from '@ionic/vue';
  import router from '@/router/index'
  import schedulerSettings from '@/components/Surveys/SchedulerSettings.vue'
  import { presentToast } from '@/utils/toast'
  import { useStatusStore } from "@/stores/status";
import { ISchedule } from "@/stores/status";

  const route = useRoute()

  const statusStore = useStatusStore()
  await statusStore.fetch()
  const schedule = JSON.parse(JSON.stringify(statusStore.schedulers.value.find((s: ISchedule) => s.id == route.params.scheduleid)))

  const surveySettings = ref(schedule)

  function confirm() {
    statusStore.schedulers.update_object(route.params.scheduleid as string, surveySettings.value)
    presentToast('Schedule updated')
    router.push({name: 'team'})
  }

  const deleteAlertButtons = [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            statusStore.schedulers.delete(route.params.scheduleid as string)
            router.push({name: 'team'})
          },
        },
      ];

  </script>
  
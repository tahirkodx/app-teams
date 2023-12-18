<template>
  <ion-page>
    <ion-header>
      <score></score>
      <ion-breadcrumbs>
          <ion-breadcrumb @click="() => router.push({name: 'exercises'})">Exercises</ion-breadcrumb>
          <ion-breadcrumb >A-team</ion-breadcrumb>
        </ion-breadcrumbs>
    </ion-header>
    <ion-content :fullscreen="true">

 
      <ion-card @click="routeTeamCoach()">
        <ion-card-header>
          <ion-card-title>
            Team coach
          </ion-card-title>
        </ion-card-header>
        <ion-card-content v-if="teamStore.hasCoach(teamID)">
          Share questions with team coach
        </ion-card-content>
        <ion-card-content v-else>
          Get a team coach
        </ion-card-content>
      </ion-card>

      <ion-card @click="() => router.push({name: 'exercisesupportnetwork', params: {exerciseid: route.params.exerciseid}})">
        <ion-card-header>
          <ion-card-title>
            Network
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Check your network to see who has done the exercise before
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>
            Forum
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Post my question to the forum
        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import {
  IonPage, 
  IonHeader,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonContent,
  IonBreadcrumbs,
  IonBreadcrumb,
} from '@ionic/vue';
import router from '@/router/index'
import score from "@/components/All/Header.vue"
import { useTeamStore } from '@/stores/teams';
import { fetchCurrent, teamID } from '@/stores/current';
const route = useRoute()
const exerciseid = route.params.exerciseid
const teamStore = useTeamStore()

await fetchCurrent()

function routeTeamCoach() {
    if (teamStore.hasCoach(teamID.value)) {
      router.push({name: 'exercisesupportteamcoach', params: {exerciseid: exerciseid}})
    } else {
      router.push({name: 'exercisesupportgetteamcoach', params: {exerciseid: exerciseid}})
    }
  }


</script>
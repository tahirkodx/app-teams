<template>
  <ion-page>
    <ion-header>
      <score></score>
      <ion-breadcrumbs>
          <ion-breadcrumb @click="() => router.push({name: 'exercises'})">Exercises</ion-breadcrumb>
          <ion-breadcrumb @click="() => router.push({name: 'playbook'})">Playbook</ion-breadcrumb>
      </ion-breadcrumbs>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card
        v-for="[playID, play] in playbookStore.playbook.value.entries()"
        @click="() => router.push({name: 'play', params: {playid: playID}})">
        <ion-grid style="padding: 0">
          <ion-row style="padding: 0">
            <ion-col style="padding: 0" size="10">
              <ion-card-header>
                <ion-card-subtitle>{{ play.category }}</ion-card-subtitle>
                <ion-card-title>{{ play.title }}</ion-card-title>
              </ion-card-header>
            </ion-col>
            <ion-col style="padding: 0" size="2" v-show="teamID !== undefined">
              <ion-card-header style="padding-left: 0; padding-right: 0">
              <ion-card-subtitle>effect</ion-card-subtitle>
              <ion-card-title>+ {{ playbookStore.teamPlayScores.value.get(teamID)[playID] }}</ion-card-title>
            </ion-card-header>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-card-content style="padding-top: 0">
          Here's a small text description for the card content. Nothing more, nothing less.
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonPage,
    IonHeader,
    IonBreadcrumbs,
    IonBreadcrumb,
    IonContent,
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
  } from '@ionic/vue';
  import router from '@/router/index'
  import score from "@/components/All/Header.vue"
  import { usePlaybookStore } from '@/stores/playbook'
  import { useTeamStore } from '@/stores/teams'
  import { useUserStore } from '@/stores/user';
  import { fetchCurrent, teamID } from '@/stores/current'

  const userStore = useUserStore()
  const playbookStore = usePlaybookStore()
  const teamStore = useTeamStore()

  await Promise.all([
    playbookStore.fetch(),
    teamStore.fetch(),
    userStore.fetch(),
    fetchCurrent(),
  ])
  
</script>

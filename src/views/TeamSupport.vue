<template>
  <ion-page>
    <ion-header>
        <!--score></score-->
      </ion-header>
    <ion-content class="ion-padding">
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

      <ion-card
        v-show="userStore.organizationHasExternalCoach"
        @click="() => router.push({name: 'teamsupportexternalcoach'})"
      >
        <ion-card-header>
          <ion-card-title>
            External coach
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Check your network to see who has done the exercise before
        </ion-card-content>
      </ion-card>

      <ion-card @click="() => router.push({name: 'academy', params: {focus: 'team'}})">
        <ion-card-header>
          <ion-card-title>
            Academy
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Go to relevant academy courses
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
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
  } from '@ionic/vue';
  import router from '@/router/index'
  import score from "@/components/All/Header.vue"
  import { useUserStore } from '@/stores/user';
  import { useTeamStore } from '@/stores/teams';
  import { fetchCurrent, teamID } from '@/stores/current';
  const teamStore = useTeamStore()
  const userStore = useUserStore()
  
  await Promise.all([
    teamStore.fetch(),
    userStore.fetch(),
    fetchCurrent()
  ])

  function routeTeamCoach() {
    if (teamStore.hasCoach(teamID.value)) {
      router.push({name: 'teamsupportteamcoach'})
    } else {
      router.push({name: 'teamsupportgetteamcoach'})
    }
  }

</script>

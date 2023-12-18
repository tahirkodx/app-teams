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
    <alter-team
      :team="team"
      @cancel="() => router.push('/team/survey/settings')"
      @confirm="confirm" />
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
    IonButtons,
    IonBackButton,
  } from '@ionic/vue';
  import router from '@/router/index'
  import { useTeamStore } from "@/stores/teams";
  import { ITeam } from "@/stores/teams";
  import AlterTeam from '@/components/Team/AlterTeam.vue'

  const teamStore = useTeamStore()

  const defaultTeam = {
    name: "",
    members: [
      {
        first_name: "",
        last_name: "",
        email: "",
      },
    ],
    is_active: true
  } as ITeam

  const team = ref(JSON.parse(JSON.stringify(defaultTeam)))

  function confirm(team: ITeam) {
    teamStore.teams.create(team)
    router.push('/team/survey/settings')
  }
</script>

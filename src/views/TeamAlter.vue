<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Alter {{ team.name }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
    <alter-team
      :team=team
      @cancel="() => router.push({name: 'team'})"
      @confirm="confirm" />

    <ion-button expand="block" color="danger" @click="deleteTeam">Delete team</ion-button>
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
} from '@ionic/vue';
import router from '@/router/index'
import { useTeamStore } from "@/stores/teams";
import { useUserStore } from "@/stores/user";
import { fetchCurrent, teamID, team, deleteActiveTeam } from '@/stores/current'
import { ITeam } from "@/stores/teams";
import AlterTeam from '@/components/Team/AlterTeam.vue'
const teamStore = useTeamStore()
const userStore = useUserStore()

await Promise.all([
  teamStore.fetch(),
  userStore.fetch(),
  fetchCurrent(),
])

function confirm(team: ITeam) {
  teamStore.teams.update_object(teamID.value, team)
  router.push({name: 'team'})
}

function deleteTeam() {
  deleteActiveTeam()
  router.push({name: 'team'})
}
</script>

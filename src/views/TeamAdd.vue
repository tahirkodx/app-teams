<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Add team</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
    <alter-team
      :team="team"
      @cancel="() => router.push({name: 'team'})"
      @confirm="confirm" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { 
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonItem,
  IonIcon,
  IonButton,
  IonButtons,
  IonBackButton,
  IonInput,
  IonModal,
  IonList,
  IonItemOption,
  IonItemOptions,
  IonCheckbox,
} from '@ionic/vue';
import router from '@/router/index'
import { useUserStore } from "@/stores/user";
import { useTeamStore } from "@/stores/teams";
import { ITeam } from "@/stores/teams";
import AlterTeam from '@/components/Team/AlterTeam.vue'

const userStore = useUserStore()
const teamStore = useTeamStore()

await Promise.all([
  userStore.fetch(),
  teamStore.fetch()
])

const defaultTeam = {
  name: "",
  members: [{
    first_name: userStore.user.first_name,
    last_name: userStore.user.last_name,
    email: userStore.user.email,
    role: 2
  }
  ]
}

const team = ref(JSON.parse(JSON.stringify(defaultTeam)))

function confirm(team: ITeam) {
  teamStore.teams.create(team)
  router.push({name: 'team'})
}
</script>

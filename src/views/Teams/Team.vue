<template>
  <ion-page>
    <ion-header>
      <score />
    </ion-header>
    <ion-content class="ion-padding">
      <div v-if="loading">
        <h1>Loading...</h1>
      </div>
      <div v-else-if="teamStore.teamLength > 0">
        Here is done
        <status />
      </div>
      <div v-else>
        <h1>You are not enrolled in a team.</h1>
        <ion-button expand="block" @click="() => router.push({ name: 'addteam' })">
          Add team
        </ion-button>
      </div>
      <ion-fab slot="fixed" horizontal="end" vertical="bottom" @click="() => router.push({ name: 'addteam' })">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref,
  onMounted } from "vue";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonButton,
  IonIcon,
  IonFab,
  IonFabButton,
  
} from "@ionic/vue";
import { add } from "ionicons/icons";
import { useUserStore, useTeamStore } from "@/store";
import router from "@/router/index";
import score from "@/components/Header/Header.vue"
const userStore = useUserStore();
const teamStore = useTeamStore();
const loading = ref(true);

onMounted(async () => {
  await Promise.all([teamStore.getTeams()]);
  loading.value = false;
  console.log("Here is user data 1 ", teamStore.teams);

});

console.log("Here is user data ", userStore.settings);
</script>

<style scoped>
ion-datetime {
  --background: unset !important;
}
</style>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-list>
        <div v-for="request of statusStore.teamActiveSurveys(teamID)">
          <ion-item
            @click="() => router.push({name: 'survey', params: { teamid: request.team, surveyid: request.id}})"
          >
            <!-- {{ teamID }} -->
            <ion-label>
              {{ teamStore.teams.value.get(request.team).name }}
            </ion-label>
            {{ request.end.slice(0, 10) }}
            <ion-icon :icon="chevronForwardOutline"></ion-icon>
            <ion-item-options>
              <ion-item-option color="danger">Delete</ion-item-option>
            </ion-item-options>
          </ion-item>
        </div>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import {
  IonPage,
  IonContent,
  IonLabel,
  IonItem,
  IonList,
  IonItemOption,
  IonItemOptions,
  IonIcon,
} from "@ionic/vue";
import { chevronForwardOutline } from "ionicons/icons";
import router from "@/router/index";
import { useTeamStore } from "@/stores/teams";
import { useStatusStore } from "@/stores/status";
import { fetchCurrent, teamID } from "@/stores/current";
const teamStore = useTeamStore();
const statusStore = useStatusStore();

await Promise.all([teamStore.teams.fetch(), fetchCurrent()]);
</script>

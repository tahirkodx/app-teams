<template>
  <ion-page>
    <ion-header>
      <score />
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <span v-if="playbookStore.exercises.value.entries()">
          <ion-item
            v-for="[exerciseID, exercise] in [
              ...playbookStore.exercises.value.entries(),
            ].filter((l) => l[1].team == teamID)"
            @click="() =>
                router.push({
                  name: 'exercise',
                  params: { exerciseid: exerciseID },
                })
            "
          >
            <ion-grid>
                <ion-row>
                    <ion-col size="auto">
                      {{ playbookStore.playbook.value.get(exercise.play).title }}
                    </ion-col>
                    <ion-col style="text-align: right;">
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="12">
                      <div v-if="playbookStore.teamExerciseScores.value.get(teamID)">
                        <ion-progress-bar :buffer=1.0 :value="playbookStore.teamExerciseScore(teamID, exerciseID).score / 10"></ion-progress-bar>
                      </div>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-icon :icon="chevronForwardOutline"></ion-icon>
            <ion-item-options>
              <ion-item-option color="danger">Delete</ion-item-option>
            </ion-item-options>
          </ion-item>
        </span>
      </ion-list>
      <ion-fab
        slot="fixed"
        horizontal="end"
        vertical="bottom"
        @click="() => router.push({ name: 'playbook' })"
      >
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonFab,
  IonFabButton,
  IonContent,
  IonItem,
  IonIcon,
  IonProgressBar,
  IonList,
  IonItemOption,
  IonItemOptions,
  IonCol,
  IonRow,
  IonGrid,
} from "@ionic/vue";
import { chevronForwardOutline, add } from "ionicons/icons";
import router from "@/router/index";
import score from "@/components/All/Header.vue";
import { usePlaybookStore } from "@/stores/playbook";
import { useTeamStore } from "@/stores/teams";
import { useUserStore } from "@/stores/user";
import { fetchCurrent, teamID } from "@/stores/current";

const userStore = useUserStore();
const teamStore = useTeamStore();
const playbookStore = usePlaybookStore();
await Promise.all([
  userStore.fetch(),
  playbookStore.fetch(),
  teamStore.fetch(),
  fetchCurrent(),
]);
</script>

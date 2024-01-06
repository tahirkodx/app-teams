<template>
  <ion-page>
    <ion-header>
      <score />
    </ion-header>
    <ion-content :fullscreen="true">
      <h4 class="titleStyle">Practice</h4>
      <ion-reorder-group @ionItemReorder="doReorder" :disabled="false">
        <ion-card 
        v-for="[exerciseID, exercise] in [
              ...playbookStore.exercises.value.entries(),
            ].filter((l) => l[1].team == teamID)"
            @click="() =>
                router.push({
                  name: 'exercise',
                  params: { exerciseid: exerciseID },
                })
            "
        class="practice-card">
          <div class="card-content">
            <ion-reorder slot="end">
              <img src="/src/pictures/threeDot.svg" class="drag-handle-icon" />
            </ion-reorder>

            <ion-thumbnail slot="end">
              <img src="/src/pictures/Illustration 6.svg" />
            </ion-thumbnail>
            <div class="title-progress-container">
              <ion-label>  {{ playbookStore.playbook.value.get(exercise.play).title }} </ion-label>
              <ion-progress-bar :value="playbookStore.teamExerciseScore(teamID, exerciseID).score / 10" color="success" class="progress-bar"></ion-progress-bar>
            </div>
            <ion-icon :icon="chevronForwardOutline" slot="end" class="arrow-icon" />
          </div>
        </ion-card>
      </ion-reorder-group>
       <ion-fab
       class="addStyle"
          slot="fixed"
          horizontal="end"
          vertical="bottom"
          @click="() => router.push({ name: 'addteam' })"
        >
          <ion-fab-button>
            <ion-icon src="/src/pictures/answer-correct-icon 1.svg"></ion-icon>
          </ion-fab-button>
        </ion-fab>
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
  IonCard,
  IonLabel,
  IonThumbnail,
  IonProgressBar,
  IonReorderGroup,
  IonReorder,
  IonIcon,
} from "@ionic/vue";
import { chevronForwardOutline, add } from "ionicons/icons";
import type { ReorderEventDetail } from "@ionic/core";
import score from "@/components/Header/Header.vue";
import router from "@/router/index";
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
  // teamStore.fetch(),
  // fetchCurrent(),
]);
const practiceItems = ref([
  {
    title: "Communication",
    imgSrc: "/src/pictures/Illustration 6.svg",
    progress: 0.5,
  },
  {
    title: "Celebrate and Collaborate",
    imgSrc: "/src/pictures/Illustration 7.svg",
    progress: 0.3,
  },
  {
    title: "Effective Feedback",
    imgSrc: "/src/pictures/Illustration 5.svg",
    progress: 0.7,
  },
  {
    title: "Active Listening",
    imgSrc: "/src/pictures/Illustration 4.svg",
    progress: 0.2,
  },
  // ... other items
]);

const doReorder = (event: CustomEvent<ReorderEventDetail>) => {
  const fromIndex = event.detail.from;
  const toIndex = event.detail.to;
  practiceItems.value.splice(
    toIndex,
    0,
    practiceItems.value.splice(fromIndex, 1)[0]
  );
  event.detail.complete();
};
</script>

<style scoped>
.practice-card {
  margin-bottom: 8px;
  --ion-item-background: transparent;
  --background: transparent;
  box-shadow: none;
  /* Remove shadow if present */
  display: flex;
  flex-direction: column;
  padding: 0px 0px 4px 0px;
}

.card-content {
  display: flex;
  align-items: center;
  padding: 16px;
  /* Add padding if needed */
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.title-progress-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

ion-label {
  font-size: 1rem;
  margin-bottom: 11px;
  /* Space between title and progress bar */
}

.progress-bar {
  --progress-background: #e6e0e9;
  /* --buffer-background: transparent; */
  --progress-color: #a5ce3e;
  width: 60%;
      margin-bottom: 15px;

  /* Adjust width as needed */
}

.arrow-icon {
  font-size: 1.5em;
  margin-left: auto;
  color: #303030;
  /* Ensures the arrow icon is aligned to the right */
}

ion-thumbnail {
  --border-radius: 0;
  --size: 55px;
  /* Adjust the size based on your design */
  margin-right: 8px;
  width: 105px;
  height: 60px;
  /* Spacing between image and title */
}

ion-reorder {
  color: var(--ion-color-medium);
}

.drag-handle-icon {
  width: 15px;
  height: 20px;
  margin-right: 10px;
}

.contentHeader {
  color: var(--Neutrals-black, #303030);
  /* Title Large */
  font-family: "Cabin", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  /* 127.273% */
}

.titleStyle {
  color: var(--Neutrals-black, #303030);
  /* Keep the color as is */
  font-family: "Cabin", sans-serif;
  /* No change needed */
  font-size: 22px;
  /* Keep the font size as is unless it needs to change */
  font-weight: 500;
  /* Keep the font weight as is */
  line-height: 28px;
  /* Keep the line height as is */
  text-align: left;
  /* Align to the left, right or center as per your design */
  margin-top: 25px;
  margin-bottom: -20px;
  padding-left: 15px;
}


.practiceBox {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
}
.addStyle{
    margin-bottom: 40px;
    margin: 10px ;
}
</style>

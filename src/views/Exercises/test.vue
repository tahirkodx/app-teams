<template>
  <ion-page>
    <ion-header>
      <score></score>
      <ion-toolbar color="primary">
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="createOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title class="ion-text-capitalize">A-Team</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item lines="full">
          <ion-label class="ion-text-wrap">
            <h2>Play Title</h2>
            <p>No score available</p>
          </ion-label>
          <ion-toggle slot="end" color="success"></ion-toggle>
        </ion-item>

        <!-- ... other list items for details ... -->

        <ion-item lines="full" button>
          <ion-label>Notes</ion-label>
          <ion-icon slot="end" :icon="createOutline"></ion-icon>
        </ion-item>

        <ion-item lines="full">
          <ion-label>Timeline</ion-label>
          <ion-icon slot="end" :icon="chevronDownOutline"></ion-icon>
        </ion-item>
      </ion-list>

      <ion-button expand="block" color="light" class="ion-margin">
        Alter
      </ion-button>

      <!-- ... more content ... -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonList,
  IonItem,
  IonContent,
  IonDatetime,
  IonBreadcrumbs,
  IonBreadcrumb,
  IonButton,
  IonAccordionGroup,
  IonAccordion,
  IonLabel,
} from "@ionic/vue";
import router from "@/router/index";
import { pencilOutline, createOutline } from "ionicons/icons";
import score from "@/components/Header/Header.vue";
//   import PlayDetails from '@/components/PlayDetails.vue';
//   import { usePlaybookStore } from '@/stores/playbook';
//   import { useStatusStore } from '@/stores/status';
  import { useTeamStore ,usePlaybookStore ,useStatusStore} from '@/store';
//   import { fetchCurrent, teamID } from '@/stores/current'

const route = useRoute();
const exerciseID = route.params.exerciseid as string;

//   const playbookStore = usePlaybookStore()
  const statusStore = useStatusStore()
  const teamStore = useTeamStore()
  

//   const exercise = playbookStore.exercises.value.get(exerciseID)
//   const play = playbookStore.playbook.value.get(exercise.play)
//   const showCalendar = ref(false)
//   const dateISOFormat = new Date().toISOString()
console.log(exerciseID);
const editExercise = () => {
  // Logic to edit exercise
};
const alterExercise = () => {
  // Logic to alter exercise
};
const editNotes = () => {
  // Logic to edit notes
};
const deleteExercise = () => {
  // Logic to delete the exercise
};
</script>

<style scoped>
ion-backdrop {
  opacity: 0.9;
}

#box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  z-index: 100;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: auto;
  border-radius: 10px;
}
</style>

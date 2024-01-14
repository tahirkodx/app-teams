<template>
  <ion-page>
    <ion-header>
      <score></score>
    </ion-header>
    <ion-content>
      <div class="custom-card-container" ref="cardContainer">
        <!-- todo backgound-color need to change for dark and light theme  -->
        <!-- Dynamically create cards using v-for loop -->
        <ion-card class="custom-card">
          <ion-card-header>
            <ion-card-title>exercise title</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Supporting line text lorem ipsum dolor sit amet...
          </ion-card-content>
        </ion-card>
      </div>
      <div class="tab-container">
        <div class="tabs">
          <div
            class="tab"
            :class="{ active: activeTab === 'timeline' }"
            @click="segmentChanged('timeline')"
          >
            Timeline
          </div>
          <div
            class="tab"
            :class="{ active: activeTab === 'description' }"
            @click="segmentChanged('description')"
          >
            Description
          </div>
          <div
            class="tab"
            :class="{ active: activeTab === 'details' }"
            @click="segmentChanged('details')"
          >
            Details
          </div>
        </div>
        <div class="content">
          <!-- Content based on the active tab -->
          <div v-if="activeTab === 'timeline'">
            <LineChart />
            <ion-reorder-group>
              <ion-card class="practice-card" v-for="index in 6" :key="index">
                <div class="card-content">
                  <ion-reorder slot="start"></ion-reorder>

                  <ion-label>Survey 1</ion-label>
                  <ion-icon :icon="chevronForward" slot="end" />
                </div>
                <p>
                  Date : 23 Dec Score :
                  <span> 4/5 </span>
                </p>
              </ion-card>
            </ion-reorder-group>
          </div>
          <div v-if="activeTab === 'description'">
          <VideoPlayer />
          </div>
          <div v-if="activeTab === 'details'">sf tabs</div>
        </div>
      </div>
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
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonProgressBar,
  IonReorderGroup,
  IonReorder,
} from "@ionic/vue";
import router from "@/router/index";
import { pencilOutline, chevronForward } from "ionicons/icons";
import score from "@/components/Header/Header.vue";
import LineChart from "@/components/Charts/LineChart.vue";
import VideoPlayer from "@/components/Exercise/VideoPlayer.vue";
//   import PlayDetails from '@/components/PlayDetails.vue';
//   import { usePlaybookStore } from '@/stores/playbook';
//   import { useStatusStore } from '@/stores/status';
import { useTeamStore, usePlaybookStore, useStatusStore } from "@/store";
//   import { fetchCurrent, teamID } from '@/stores/current'
const activeTab = ref("timeline"); // default active tab

const route = useRoute();
const exerciseID = route.params.exerciseid as string;
const segmentChanged = (tabName) => {
  activeTab.value = tabName;
};
//   const playbookStore = usePlaybookStore()
const statusStore = useStatusStore();
const teamStore = useTeamStore();

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
.custom-card-container {
  display: flex;
  flex-direction: row;
}

.custom-card {
  margin: 0 0;
  border-radius: 0px;
  display: inline-flex;
  padding: 8px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  /* --background: #F7F7F7; */
}

ion-card-header {
  position: relative;
  padding-bottom: 0;
}

ion-card-title {
  font-size: 1.5em;
}

ion-card-content {
  padding-top: 16px;
  font-size: 1rem;
}

/* tabs css */
.tabs {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
}

.tab-container{
    padding-top: 20px;
}
.tab {
  padding: 10px 33px;
  cursor: pointer;
  text-align: center;
  border-bottom: 3px solid transparent; /* Makes the tab seem "inactive" */
}

.tab.active {
  border-bottom: 3px solid #A5CE3E; /* Color of the active tab indicator */
}

.content {
  padding: 20px 0px 0px 0px;
  min-height: 200px; /* Adjust as needed */
  overflow-y: scroll;
    height: 520px;
}

/* style for survey  */
ion-datetime {
  --background: unset: !important;
}
.practice-card {
    --ion-item-background: transparent;
    --ion-item-padding: 0;
    --background: transparent;
    box-shadow: none;
    border-bottom: 1px solid #F2F2F2;
    border-radius: 0px;
    margin: 10px 0px 0px 0px;
    /* Remove shadow if present */
}

.card-content {
    display: flex;
    align-items: center;
    padding: 0px 15px 0px 15px;
  }
  p{
  padding: 0px 15px 0px 15px;
  margin: 0px 0px 10px 0px;

font-size: 12px;
line-height: 16px;

}
  span{
  color: var(--secondary, #FF8512);

}

ion-item {
    --padding-start: 0;
    --padding-end: 0;
    --inner-padding-end: 0;
    --inner-padding-start: 0;
}

ion-label {
    flex-grow: 1;
    font-size: 1rem;
    padding: 16px 0;

}

.progress-container {
    width: 100%;

}

ion-progress-bar {
    height: 2px;
    /* Height of progress bar, adjust as needed */
    --background: #7F7F7F;
}

ion-reorder {
    color: var(--ion-color-medium);
}

ion-icon {
    font-size: 1.5em;
    width: 24px;
    height: 24px;
    margin-top: 20px;;
}
.addStyle{
    margin-bottom: 40px;
    margin: 10px ;
}
</style>

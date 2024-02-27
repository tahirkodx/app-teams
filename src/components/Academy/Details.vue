<template>
  <div>
    <div class="custom-section">
      <!-- <p>Courses Objective:</p> -->

      <p>Lesson Time</p>
      <div class="time-details">
        <ion-icon size="small" color="primary" :icon="alarmOutline"></ion-icon>
        <span>{{ props.time }} Mins</span>
      </div>
    </div>
    <ion-card class="custom-card" v-if="props.summary">
      <ion-card-content class="card-text">
        {{ props.summary }}</ion-card-content
      >
    </ion-card>
    <div class="custom-section">
      <!-- <p>Courses Objective:</p> -->
      <!-- todo need to add this part  -->
      <p class="time-left">Video: {{mintsLeft(props.time ,academyStore?.lessonsStatus?.get(props.id.toString()).time)}} Mins Left</p>
      <div class="progress-container">
        <ion-progress-bar :buffer="1.0" :value="progressValue"></ion-progress-bar>
      </div>
    </div>
    <ion-accordion-group>
      <ion-accordion value="first">
        <ion-item slot="header" color="white">
          <ion-label>Resource Breakdown</ion-label>
        </ion-item>

        <div class="lesson-div" slot="content">
          <ion-list lines="none" class="ion-no-padding ion-no-margin">
            <ion-item
              class="ion-no-padding ion-no-margin"
              v-for="(item, index) in props.content"
              :key="index"
              @click="moveToData(item.time)"
            >
              <ion-label class="ion-no-padding ion-no-margin lesson-label"
                ><span class="lesson-time">{{ item.time }} </span>
                {{ item.description }}</ion-label
              >
            </ion-item>
          </ion-list>
        </div>
      </ion-accordion>
    </ion-accordion-group>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch,computed } from "vue";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonAccordion,
  IonAccordionGroup,
  IonFab,
  IonDatetime,
  IonFabButton,
  IonList,
  IonCard,
  IonThumbnail,
  IonProgressBar,
  IonReorderGroup,
  IonReorder,
  IonCardContent
} from "@ionic/vue";

import {
  chevronForward,
  add,
  arrowUpOutline,
  alarmOutline,
} from "ionicons/icons";
import { convertSecondsIntoMints,mintsLeft } from "@/utils/Helper";
const props = defineProps(["id", "summary", "time", "content"]);
//   console.log("Here is adil" , props.id)
import { useAcademyStore } from "@/store";
  const academyStore = useAcademyStore();
// import TinyEmitter from 'tiny-emitter';
// const emitter = new TinyEmitter();
const moveToData =(time : any) =>{
  console.log(time)
  // emitter.emit('myEvent', { message: 'Hello, TinyEmitter!' });
  
}
const progressValue = computed(() => {
  const totalTime = props.time * 60; // Convert minutes to seconds
  const elapsedTime = academyStore?.lessonsStatus?.get(props.id.toString())?.time || 0;
  return Math.min(1, elapsedTime / totalTime); // Ensure progress is between 0 and 1
});
</script>
<style scoped>
.custom-card {
  margin-top: 10px;
  --background: #f0fada; /* Replace with your desired background color */
  --border-radius: 5px; /* Adjust the border-radius as per your design */
  --padding-start: 20px; /* Left padding */
  --padding-end: 20px; /* Right padding */
  --padding-top: 5px; /* Top padding */
  --padding-bottom: 20px; /* Bottom padding */
  border: 1px solid var(--main-green, #a5ce3e);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adjust or remove shadow as needed */
}

.custom-section {
  background-color: #fff; /* Assuming you want a white background for the lower section /
    / Adjust the padding, and add any other styles as needed */
}

.custom-section p {
  /* color: #303030; */
  /* Lable large */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
  margin-bottom: 2px;
  /* Style your 'Exercise Objective:' paragraph */
}

/* You may want to add media queries to adjust the layout on different screen sizes  */
/* @media (max-width: 768px) { */
.custom-section {
  padding: 18px;
  margin-top: -35px;
  color: #404040;
  /* Body medium */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
}

/* new  */

ion-label {
  flex-grow: 1;
  font-size: 1rem;
  padding: 16px 0;
}

ion-reorder {
  color: var(--ion-color-medium);
}

ion-icon {
  font-size: 1.5em;
  width: 24px;
  height: 24px;
}
.time-details {
  display: flex;
  align-items: center;
  gap: 5px;
}
.lesson-time {
  color: #0d99ff;
  font-family: Cabin;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  letter-spacing: 0.25px;
}
.lesson-label {
  color: #303030;

  /* mobile/Lable large */
  font-family: Cabin;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
}
.lesson-div {
  padding: 0px 0px 0px 18px;
}
.time-left {
  color: #ff8512;
  font-family: Cabin;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 160% */
}
.progress-container {
  margin-top: 5px;
}
ion-progress-bar {
  --progress-background: rgba(44, 58, 209, 0.5);
  --background: rgba(44, 58, 209, 0.5);
}
</style>

<template>
    <div>
      <ion-card class="custom-card" v-if="props.summary">
        <ion-card-content class="card-text"> {{ props.summary }} </ion-card-content>
      </ion-card>
  
      <div class="custom-section">
        <p>Course Description:</p>
  
        <p>{{props.description}}</p>
        <!-- <p
            v-html="
              converter.makeHtml(
                playbookStore.playbook.get(props.id)
                  ?.description
              )
            "
          ></p> -->
      </div>
      <ion-accordion-group>
      <ion-accordion value="first">
        <ion-item slot="header" color="white">
          <ion-label>List of Play:</ion-label>
        </ion-item>

        <div class="lesson-div" slot="content">
          <ion-list lines="none" class="ion-no-padding ion-no-margin">
            <ion-item class="ion-no-padding ion-no-margin" v-for="(item, index) in props.plays" :key="index">
              <ion-label class="ion-no-padding ion-no-margin lesson-label"
                ><ion-icon color="primary" :icon="play"></ion-icon> Lesson 1</ion-label
              >
            </ion-item>
            <ion-item class="ion-no-padding ion-no-margin">
              <ion-label class="ion-no-padding ion-no-margin lesson-label"
                ><ion-icon color="primary" :icon="play"></ion-icon> Lesson 1</ion-label
              >
            </ion-item>
            <ion-item class="ion-no-padding ion-no-margin">
              <ion-label class="ion-no-padding ion-no-margin lesson-label"
                ><ion-icon color="primary" :icon="play"></ion-icon> Lesson 1</ion-label
              >
            </ion-item>

            

            
          </ion-list>
        </div>
      </ion-accordion>
    </ion-accordion-group>
    </div>
  </template>
  <script setup lang="ts">
  import { ref, onMounted, watch } from "vue";
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
  } from "@ionic/vue";
  
  import {
    chevronForward,
    add,
    arrowUpOutline,
    alarmOutline,
    play,
  } from "ionicons/icons";
  import showdown from "showdown";
    const props = defineProps(["summary","description","plays"]);
  //   console.log("Here is adil" , props.id)
  var converter = new showdown.Converter();
  //   const playbookStore = usePlaybookStore();
  </script>
  <style scoped>
  .custom-card {
    --background: #f0fada; /* Replace with your desired background color */
    --border-radius: 5px; /* Adjust the border-radius as per your design */
    --padding-start: 20px; /* Left padding */
    --padding-end: 20px; /* Right padding */
    --padding-top: 20px; /* Top padding */
    --padding-bottom: 20px; /* Bottom padding */
    border: 1px solid var(--main-green, #a5ce3e);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adjust or remove shadow as needed */
  }
  
  .custom-section {
    background-color: #fff; /* Assuming you want a white background for the lower section /
    / Adjust the padding, and add any other styles as needed */
  }
  
  .custom-section p {
    color: #303030;
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
  .lesson-div {
  padding: 0px 0px 0px 18px;
}
  </style>
  
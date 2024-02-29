<template>
  <ion-header>
    <score />
  </ion-header>
  <ion-content>
    <ProgressBar />
    <div class="outcome-title">How well would you rate the exercises below</div>
    <div class="title-line"></div>
    <div
      class="mainStyle"
      v-for="questionArray in questionArr"
      :key="questionArray.value"
    >
      <h3 class="titleStyle">
        {{ questionArray.question }}
      </h3>

      <div class="scoreRange">
        <span>
          Scores:
          <span
            ><ion-icon class="iconStyle" :icon="informationCircleOutline"
          /></span>
        </span>
        <span> Range:1-10 </span>
      </div>
      <ion-range
        aria-label="Custom range"
        :value="5"
        :pin="true"
        :min="0"
        :max="10"
        :ticks="true"
      ></ion-range>
      <div class="notes">
        <span> Notes: </span>
      </div>

      <div>
        <ion-textarea
          row="4"
          aria-label="Custom textarea"
          placeholder="Type something here"
          class="custom"
          :auto-grow="true"
        ></ion-textarea>
      </div>
      <div class="title-line"></div>
    </div>
    <ion-footer>
      <div class="button-container">
        <ion-button
          class="previousButton"
          @click="
            () =>
              router.push({
                name: 'surveyQuestion',
              })
          "
          >Previous</ion-button
        >
        <ion-button
          class="nextButton"
          @click="
            () =>
              router.push({
                name: 'surveyFinished',
              })
          "
          >Submit</ion-button
        >
      </div>
    </ion-footer>
  </ion-content>
</template>

<script setup lang="ts">
import { ref } from "vue";

import {
  IonContent,
  IonIcon,
  IonHeader,
  IonFooter,
  IonLabel,
  IonButton,
  IonRange,
  IonTextarea,
} from "@ionic/vue";
import score from "@/components/Header/Header.vue";
import ProgressBar from "@/components/ProgressBar/ProgressBar.vue";
import router from "@/router/index";

import { informationCircleOutline } from "ionicons/icons";

const questionArr = [
  {
    question:
      "Celebrate Success: Recognising Individual and Team Achievements:",
    value: "1",
  },
  { question: "Establish Effective Communication Guidelines:", value: "2" },
  { question: " Encourage Open Discussion:", value: "3" },
  { question: "Encourage Peer-to-Peer Feedback:", value: "4" },
  { question: "Practice Active Listening:", value: "5" },
  { question: "Promote Equal Participation:", value: "6" },
  { question: "Provide Effective Feedback:", value: "7" },
  { question: "Provide Opportunities for Reflection:", value: "8" },
];
</script>

<style scoped>
.titleStyle {
  color: #4d4d4d;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
  padding: 0 25px;
}
.outcome-title {
  text-align: center;
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  padding: 0 50px;
}
.container {
  padding: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.scoreRange {
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  color: #808080;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 23px;
}
.notes {
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  color: #808080;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 5px;
}

ion-range {
  --bar-background: var(--tietiary, rgba(168, 172, 215, 0.5));
  --bar-background-active: var(--tietiary, rgba(44, 58, 209, 0.5));
  --bar-height: 10px;
  --bar-border-radius: 10px;
  --knob-background: var(--tietiary, rgba(44, 58, 209, 0.5));
  --knob-size: 22px;
  --pin-background: #fff;
  --pin-color: var(--tietiary, rgba(168, 172, 215, 0.5));
  padding: 0 25px;
}

ion-range::part(pin) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  color: var(--tietiary, rgba(44, 58, 209, 0.5));
  border-radius: 4px;
  border: 0.5px solid #f2f2f2;
  transform: scale(1.01);
  top: -20px;
  min-width: 28px;
  height: 28px;
  transition: transform 120ms ease, background 120ms ease;
}

.title-line {
  border-bottom: 1px solid rgba(242, 242, 242, 0.95);
  margin-top: 15px;
}

ion-list {
  margin: 0 16px;
}
.iconStyle {
  margin-bottom: -2px;
}

.topMargin {
  margin-top: 40px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: #fff;
}

ion-button {
  flex: 1;
  margin: 0 5px;
}

ion-textarea.custom {
  --border-radius: 5px;
  --background: #f2f2f2;
  padding: 0 25px;
  --placeholder-color: rgba(128, 128, 128, 1);
  --placeholder-opacity: 0.8;
  --padding-end: 15px;
  --padding-start: 15px;
}

.previousButton {
  border-radius: 5px;
  border: 1px solid var(--main-green, #f2f2f2);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--main-green, #a5ce3e);
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  --background: #fff;
  --background-activated: #ebe5e5;
}
.nextButton {
  border-radius: 5px;
  border: 1px solid var(--main-green, #a5ce3e);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  background-color: #a5ce3e;
}
</style>

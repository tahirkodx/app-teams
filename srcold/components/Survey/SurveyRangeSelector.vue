<template>
  <div class="div-height">
    <div class="outcome-title">How well would you rate the exercises below</div>
    <div class="title-line"></div>
    <div
      class="mainStyle"
      v-for="[index, item] in playbookStore.surveyExercises"
      :key="item.exercise"
    >
      <h3 class="title-style">
        {{ playbookStore?.exercises?.get(item.exId)?.play_title }}
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
        :value="item.score"
        :pin="true"
        :min="0"
        :max="10"
        :step="1"
        :ticks="true"
        @ionChange="selectScore($event, item)"
      ></ion-range>
      <div class="notes">
        <span> Notes: </span>
      </div>

      <div>
        <ion-textarea
          :rows="4"
          aria-label="Custom textarea"
          placeholder="Type something here"
          class="custom"
          v-model="item.note"
          :auto-grow="true"
          @keyup="selectNotes(item, item.note)"
        ></ion-textarea>
      </div>
      <div class="title-line"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";

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

import { informationCircleOutline } from "ionicons/icons";
import { usePlaybookStore ,useUserStore } from "@/store";
import { teamID } from "@/store/current";
const props = defineProps(["surveyRequestId"]);
const playbookStore = usePlaybookStore();
const userStore = useUserStore();
const selectScore = (event: CustomEvent, currentItem: any) => {
  console.log(currentItem);
  const existingValue = Array.from(playbookStore.surveyExercises.values()).find(
    (entry: any) => entry.exercise === currentItem.exercise
  );
  if (existingValue) {
    existingValue.score = event.detail.value;
  }
  console.log(playbookStore.surveyExercises);
};
const selectNotes = (currentItem: any, notes: any) => {
  console.log(notes);
  const existingValue = Array.from(playbookStore.surveyExercises.values()).find(
    (entry: any) => entry.exercise === currentItem.exercise
  );
  if (existingValue) {
    existingValue.note = notes;
  }
};
playbookStore.defaultExerciseResponse(userStore.teamID,props.surveyRequestId);
</script>

<style scoped>
.div-height {
  height: 600px;
  overflow: auto;
}
.title-style {
  color: #4d4d4d;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
  padding: 10px 25px;
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
</style>

<template>
  <ion-header>
    <score />
  </ion-header>
  <ion-content>
    <ProgressBar
      :tempIndex="tempIndex + 1"
      :data="statusStore?.questionnaire?.size + 1"
    />
    <div v-if="tempIndex <= statusStore?.questionnaire?.size - 1">
      <div class="outcome-title">
        {{ statusStore?.questionnaire?.get(currentIndex).name }}
      </div>
      <div class="title-line"></div>
      <h3 class="question">How do you feel within the team?</h3>
      <p class="instruction">Select One</p>
      <ion-list>
        <ion-radio-group
          v-model="selectQuestion"
          @ionChange="
            setQuestionActive(
              'description_low',
              'description_midlow',
              'description_medium',
              'description_midhigh',
              'description_high',
              statusStore?.questionnaire?.get(currentIndex)?.question?.id
            )
          "
        >
          <ion-item
            :class="{
              'radio-item-selected':
                selectQuestion ===
                statusStore?.questionnaire?.get(currentIndex)?.question
                  ?.description_low,
            }"
            lines="full"
            class="radio-item"
          >
          <!-- <ion-label>{{ statusStore?.questionnaire?.get(currentIndex)?.question?.description_low }}</ion-label> -->
            <ion-radio
              :value="
                statusStore?.questionnaire?.get(currentIndex)?.question
                  ?.description_low
              "
              label-placement="end"
              justify="start"
            >
              {{
                statusStore?.questionnaire?.get(currentIndex)?.question
                  ?.description_low
              }}
            </ion-radio>
           
          </ion-item>
          <ion-item
            :class="{
              'radio-item-selected':
                selectQuestion ===
                statusStore?.questionnaire?.get(currentIndex)?.question
                  ?.description_midlow,
            }"
            lines="full"
            class="radio-item"
          >
            <!-- <ion-label>{{ statusStore?.questionnaire?.get(currentIndex)?.question?.description_midlow }}</ion-label> -->
            <ion-radio
              :value="
                statusStore?.questionnaire?.get(currentIndex)?.question
                  ?.description_midlow
              "
              label-placement="end"
              justify="start"
              >{{
                statusStore?.questionnaire?.get(currentIndex)?.question
                  ?.description_midlow
              }}</ion-radio
            >
           </ion-item>
          <ion-item
            :class="{
              'radio-item-selected':
                selectQuestion ===
                statusStore?.questionnaire?.get(currentIndex)?.question
                  ?.description_medium,
            }"
            lines="full"
            class="radio-item"
          >
            <!-- <ion-label>{{ statusStore?.questionnaire?.get(currentIndex)?.question?.description_medium }}</ion-label> -->
            <ion-radio
              :value="
                statusStore?.questionnaire?.get(currentIndex)?.question
                  ?.description_medium
              "
              justify="start"
              label-placement="end"
              >{{
                statusStore?.questionnaire?.get(currentIndex)?.question
                  ?.description_medium
              }}</ion-radio
            >
            
          </ion-item>
          <ion-item
            :class="{
              'radio-item-selected':
                selectQuestion ===
                statusStore?.questionnaire?.get(currentIndex)?.question
                  ?.description_midhigh,
            }"
            lines="full"
            class="radio-item"
          >
            <!-- <ion-label>{{ statusStore?.questionnaire?.get(currentIndex)?.question?.description_midhigh }}</ion-label> -->
            <ion-radio
              :value="
                statusStore?.questionnaire?.get(currentIndex)?.question
                  ?.description_midhigh
              "
              justify="start"
              label-placement="end"
              >{{
                statusStore?.questionnaire?.get(currentIndex)?.question
                  ?.description_midhigh
              }}</ion-radio
            >
           
          </ion-item>
          <ion-item
            :class="{
              'radio-item-selected':
                selectQuestion ===
                statusStore?.questionnaire?.get(currentIndex)?.question
                  ?.description_high,
            }"
            lines="full"
            class="radio-item"
          >
            <!-- <ion-label>{{ statusStore?.questionnaire?.get(currentIndex)?.question?.description_high }}</ion-label> -->
            <ion-radio
              :value="
                statusStore?.questionnaire?.get(currentIndex)?.question
                  ?.description_high
              "
              justify="start"
              label-placement="end"
              >{{
                statusStore?.questionnaire?.get(currentIndex)?.question
                  ?.description_high
              }}</ion-radio
            >
          </ion-item>
        </ion-radio-group>
      </ion-list>

      <div>
        <h3 class="question">Where is the team weak/strong?</h3>
        <p class="instruction">Select Only If Applicable</p>

        <div
          v-for="item2 in statusStore?.questionnaire?.get(currentIndex)
            ?.question?.options"
          :key="item2.id"
          class="topMargin"
        >
          <h3 class="question">{{ item2.title }}</h3>
          <div class="vision-goals-container">
            <div
              class="checkbox-container"
              :class="{
                'checkbox-container-checked':
                  selected[item2.id + '_' + item2.favourable],
              }"
              @click="
                toggleSelection(
                  'favourable',
                  item2.favourable,
                  item2.id,
                  statusStore?.questionnaire?.get(currentIndex)?.question?.id
                )
              "
            >
              <!-- :ref="'favourable_' + item2.id" -->
              <ion-checkbox
                :value="item2.id + '_' + item2.favourable"
                :checked="selected[item2.id + '_' + item2.favourable]"
              ></ion-checkbox>
              <ion-label>{{ item2.favourable }}</ion-label>
              <!-- <ion-checkbox label-placement="end" justify="start" aria-label="Label"
              :checked="selected[item2.favourable]"
                >{{ item2.favourable }}</ion-checkbox> -->
            </div>
            <div
              class="checkbox-container"
              :class="{
                'checkbox-container-checked':
                  selected[item2.id + '_' + item2.unfavourable],
              }"
              @click="
                toggleSelection(
                  'unfavourable',
                  item2.unfavourable,
                  item2.id,
                  statusStore?.questionnaire?.get(currentIndex)?.question?.id
                )
              "
            >
              <ion-checkbox
                :value="item2.id + '_' + item2.unfavourable"
                :checked="selected[item2.id + '_' + item2.unfavourable]"
              ></ion-checkbox>
              <ion-label>{{ item2.unfavourable }}</ion-label>
            </div>
          </div>
          <div class="title-line"></div>
        </div>
      </div>
    </div>
    <SurveyRangeSelector
      v-if="tempIndex >= statusStore?.questionnaire?.size"
      :surveyRequestId="surveyRequestId"
    />
    <ion-footer>
      <div class="button-container">
        <ion-button
          class="previousButton"
          @click="processBackItem"
          :disabled="tempIndex <= 0"
          >Previous</ion-button
        >
        <ion-button
          v-if="tempIndex <= statusStore?.questionnaire?.size - 1"
          @click="processNextItem"
          :disabled="tempIndex >= statusStore?.questionnaire?.size"
          class="nextButton"
          >Next</ion-button
        >
        <ion-button v-else @click="processSubmit" class="nextButton"
          >Submit</ion-button
        >
      </div>
    </ion-footer>
  </ion-content>
</template>

<script setup lang="ts">
import { ref, onMounted,watchEffect } from "vue";

import {
  IonContent,
  IonFooter,
  IonIcon,
  IonHeader,
  IonList,
  IonRadioGroup,
  IonItem,
  IonLabel,
  IonRadio,
  IonCheckbox,
  IonButton,
} from "@ionic/vue";
import score from "@/components/Header/Header.vue";
import ProgressBar from "@/components/ProgressBar/ProgressBar.vue";
import SurveyRangeSelector from "@/components/Survey/SurveyRangeSelector.vue";
import router from "@/router/index";
import { useRoute } from "vue-router";
import { useStatusStore, usePlaybookStore ,useUserStore } from "@/store";
const statusStore = useStatusStore();
const playbookStore = usePlaybookStore();
const userStore = useUserStore();

const route = useRoute();
const surveyId = route.params.surveyid as string;
const teamId = "60d84fb36d8e42838966350ddc3ac956";

// console.log(surveyId);
// console.log(teamId);

const selectQuestion: any = ref();
const surveyRequestId: any = ref(null);
const selected: any = ref({});

const toggleSelection = (
  type: any,
  checkboxValue: any,
  optionId: any,
  questionId: any
) => {
  const finalItem = optionId + "_" + checkboxValue;
  selected.value[finalItem] = !selected.value[finalItem];
  const questionResponseArray =
    statusStore.lastResponse.get("question_response");
  const existingValue = questionResponseArray.find(
    (item: { question: string }) => item.question === questionId
  );
  const optionData = existingValue.options.find(
    (item: { option: string }) => item.option === optionId
  );
  if (type === "favourable") {
    if (optionData.favourable === true) {
      optionData.favourable = false;
    } else {
      optionData.favourable = true;
    }
  } else {
    if (optionData.unfavourable === true) {
      optionData.unfavourable = false;
    } else {
      optionData.unfavourable = true;
    }
  }
  statusStore.lastResponse.set("question_response", questionResponseArray);
  console.log(statusStore.lastResponse.get("question_response"));
};
// code by adil
const currentIndex = ref("0");
const tempIndex = ref(0);

const setQuestionActive = (...types: any[]) => {
  const questionId = types.pop();
  const selectedType = types.find(
    (type) =>
      selectQuestion.value ===
      statusStore?.questionnaire?.get(currentIndex.value)?.question?.[type]
  );
  const questionResponseArray =
    statusStore.lastResponse.get("question_response");
  const existingValue = questionResponseArray.find(
    (item: { question: string }) => item.question === questionId
  );
  if (existingValue) {
    existingValue.response_low = false;
    existingValue.response_midlow = false;
    existingValue.response_medium = false;
    existingValue.response_midhigh = false;
    existingValue.response_high = false;
    if (selectedType === "description_low") {
      existingValue.response_low = true; // Replace with the property you want to update
    } else if (selectedType === "description_midlow") {
      existingValue.response_midlow = true; // Replace with the property you want to update
    } else if (selectedType === "description_medium") {
      existingValue.response_medium = true; // Replace with the property you want to update
    } else if (selectedType === "description_midhigh") {
      existingValue.response_midhigh = true; // Replace with the property you want to update
    } else {
      existingValue.response_high = true; // Replace with the property you want to update
    }
  }
  statusStore.lastResponse.set("question_response", questionResponseArray);
  console.log(statusStore.lastResponse.get("question_response"));
};
const processNextItem = () => {
  if (tempIndex.value < statusStore.questionnaire.size - 1) {
    tempIndex.value++;
    currentIndex.value = tempIndex.value.toString();
  } else {
    tempIndex.value++;
  }
  console.log(tempIndex.value);
};
const processBackItem = () => {
  if (tempIndex.value <= statusStore.questionnaire.size) {
    tempIndex.value--;
    currentIndex.value = tempIndex.value.toString();
  }
};
const processSubmit = () => {
  const data = playbookStore.surveyExercises;
  data.forEach((entry: any) => {
    // Remove the 'score' property
    delete entry.exId;
    delete entry.id;
  });
  const obj = Object.fromEntries(data);
  const dataArray = Object.values(obj);
  const jsonString = JSON.stringify(dataArray, null, 2);
  console.log(jsonString);
  const res1 = playbookStore.createSurveyExerciseResponse(jsonString);
  // const res = statusStore.submitSurvey();
  console.log(res1)
  // console.log(res)
};

onMounted(async () => {
  await Promise.all([
    // statusStore.getDimensions(),
    statusStore.getQuestionNaire(),
    playbookStore.getPlaybook(),
    // playbookStore.getExercises(userStore.teamID),
    // statusStore.getLastResponse(userStore.teamID)
  ]);
  
});
watchEffect(() => {
  if (userStore.teamID) {
    
    playbookStore.getExercises(userStore.teamID)
    statusStore.getLastResponse(userStore.teamID)
  }
  // surveyRequestId.value = statusStore.lastResponse.get("request");
});
</script>

<style scoped>
.outcome-title {
  text-align: center;
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}
.container {
  padding: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.title {
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
}

.question {
  color: #333;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
}

.title-line {
  border-bottom: 1px solid rgba(242, 242, 242, 0.95);
  margin-top: 15px;
}
.instruction {
  color: #999;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-align: center;
  margin-bottom: 10px;
}

ion-list {
  margin: 0 16px;
}

.radio-item {
  --background: #ffffff;
  --border-radius: 8px;
  --border-width: 1px;
  --border-color: #f2f2f2;
  --padding-start: 16px;
  --inner-border-width: 0;
  --inner-padding-end: 0;
  margin-bottom: 8px;
  --color: #4d4d4d;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
}

.radio-item-selected {
  --background: #ebf4e7;
  --border-color: #a5ce3e;
  color: #a5ce3e;
}

.vision-goals-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  gap: 8px;
}
.checkbox-container {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  background-color: #fcfcfc;
  color: #4d4d4d;
  width: 47%;
  height: 80px;
}

ion-checkbox::part(container) {
  border-radius: 5px;
  /* border: 2px solid var(--M3-sys-light-on-surface-variant, #a5ce3e); */
  width: 22px;
  height: 22px;
}
.checkbox-container-checked {
  border-radius: 5px;
  border: 1px solid var(--main-green, #a5ce3e);
  background: #f2f8e3;
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
ion-radio {
    --border-radius: 10px;
    --inner-border-radius: 4px;

    --color: #ddd;
   
  }
  ion-radio.ios::part(container) {
    width: 20px;
    height: 20px;

    border: 2px solid #ddd;
    border-radius: 10px;
  }
</style>

<template>
  <ion-header>
    <score />
  </ion-header>
  <ion-content>
    <ProgressBar/>
    <div class="outcome-title">Desired Outcomes</div>
    <div class="title-line"></div>
    <h3 class="question">How do you feel within the team?</h3>
    <p class="instruction">Select One</p>

    <ion-list>
      <ion-radio-group v-model="select">
        <ion-item
          v-for="option in options"
          :key="option.value"
          :class="{ 'radio-item-selected': select === option.value }"
          lines="full"
          class="radio-item"
        >
          <ion-label>{{ option.label }}</ion-label>
          <ion-radio :value="option.value" slot="start" />
        </ion-item>
      </ion-radio-group>
    </ion-list>
    
    
    <div>
      <h3 class="question">Where is the team weak/strong?</h3>
      <p class="instruction">Select Only If Applicable</p>

      <div 
      v-for="checkBoxArray in checkBoxArrays"
          :key="checkBoxArray.value"
           class="topMargin"
           >
        <h3 class="question">{{ checkBoxArray.header }}</h3>
        <div class="vision-goals-container">
          <div class="checkbox-container" 
           :class="{ 'checkbox-container-checked': selected[checkBoxArray.value] }"
        @click="toggleSelection(checkBoxArray.value)"
          >
            <ion-checkbox :value="checkBoxArray.value" :checked="selected[checkBoxArray.value]"></ion-checkbox>
        <ion-label>{{ checkBoxArray.label }}</ion-label>
      </div>
          <div class="checkbox-container"
          :class="{ 'checkbox-container-checked': selected[checkBoxArray.value] }"
        @click="toggleSelection(checkBoxArray.value)"
          >
            <ion-checkbox :value="checkBoxArray.value"  :checked="selected[checkBoxArray.value]"></ion-checkbox>
            <ion-label>{{checkBoxArray.label2}}</ion-label>
          </div>
        </div>
        <div class="title-line"></div>
      </div>
    </div>
<ion-footer>

<div class="button-container">
    <ion-button class="previousButton">Previous</ion-button>
    <ion-button class="nextButton"    
    @click="
              () =>
                router.push({
                  name: 'surveyQuestionRange',
                })"
      >Next</ion-button>
  </div>
</ion-footer>
     
  </ion-content>
</template>

<script setup lang="ts">
import { ref } from "vue";

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
import ProgressBar from "@/components/ProgressBar/ProgressBar.vue"
import router from "@/router/index";

interface RadioOption {
  label: string;
  value: string;
}
interface checkBox {
  label: string;
  value: string;
  header:string;
  label2:string;
}

const options: RadioOption[] = [
  { label: "I feel anxious and inhibited", value: "anxious" },
  { label: "I feel cautious to take risks", value: "cautious" },
  { label: "I feel comfortable expressing myself", value: "comfortable" },
  { label: "I feel secure and empowered to share", value: "secure" },
  { label: "I feel at ease, trusting and supporting", value: "ease" },
];
const checkBoxArrays:checkBox[] = [
  { label: "Unclear",header:"Vision & goals", value: "unclear",label2:"Clear" },
  { label: "Contribute to goals & vision",header:"Day-to-day work", value: "clear",label2:"Focuses on todays issue" },
  { label: "Contribute to goals & vision",header:"Roles & Responsibilities", value: "goal",label2:"Clear" },
  { label: "Unclear/Overlapping",header:"Roles & Responsibilities", value: "overlapping",label2:"Unclear/Overlapping" },
  { label: "I feel at ease, trusting and supporting",header:"Information flow between members", value: "ease",label2:"Focuses on todays issue" },
];
const select : any = ref({
  unclear: false,
  clear: false,
  goal: false,
  overlapping: false,
  ease: false,
});

const toggleSelect = (radioValue:any) => {
  select.value[radioValue] = !select.value[radioValue];
};
const selected : any = ref({
  unclear: false,
  clear: false,
  goal: false,
  overlapping: false,
  ease: false,
});

const toggleSelection = (checkboxValue:any) => {
  selected.value[checkboxValue] = !selected.value[checkboxValue];
};
 
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
  padding: 15px;
  border: 1px solid #F2F2F2;
  border-radius: 5px;
  background-color: #FCFCFC;  
  color: #4D4D4D;
  width: 45%;
  height: 70px;
}

ion-checkbox::part(container) {
  border-radius: 5px;
  /* border: 2px solid var(--M3-sys-light-on-surface-variant, #a5ce3e); */
  width: 22px;
  height: 22px;
    
}
.checkbox-container-checked {
  border-radius: 5px;
border: 1px solid var(--main-green, #A5CE3E);
background: #F2F8E3;
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
  background: #FFF; 
  
}


ion-button {
  flex: 1; 
  margin: 0 5px;
}
.previousButton{
  border-radius: 5px;
border: 1px solid var(--main-green, #F2F2F2);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
color: var(--main-green, #A5CE3E);
text-align: center; 
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.75px;
text-transform: uppercase;
--background: #FFF;
--background-activated: #ebe5e5;

}
.nextButton{
border-radius: 5px;
border: 1px solid var(--main-green, #A5CE3E);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
color: #FFF;
text-align: center;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.75px;
text-transform: uppercase;
background-color: #A5CE3E;
}
</style>

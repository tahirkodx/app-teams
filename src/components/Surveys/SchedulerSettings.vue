<template>
  <ion-item>
    <ion-select v-model="durationDays" @ion-change="setDuration()" label="Reaction time" placeholder="Select">
      <ion-select-option v-for="i of [...Array(10).keys()].map(i => i+1)" :value=i>{{ i }} {{ i == 1 ? 'day' : 'days' }}</ion-select-option>
    </ion-select>

    <ion-select v-model="durationHours" @ion-change="setDuration()" label="" placeholder="Select">
      <ion-select-option v-for="i of [...Array(24).keys()]" :value=i>{{ i }} {{ i == 1 ? 'hour' : 'hours' }}</ion-select-option>
    </ion-select>
  </ion-item>    

  <ion-list>
    <ion-item>
      <ion-select label="Period" placeholder="Select" v-model="surveySettings.period">
        <ion-select-option value="w">Weeks</ion-select-option>
        <ion-select-option value="m">Months</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-select label="Interval" placeholder="Select" v-model="surveySettings.interval">
        <ion-select-option v-for="i of [...Array(6).keys()].map(i => i+1)" :value=i>{{ i }} {{ i == 1 ? statusStore.schedulerPeriodDict[surveySettings.period as keyof ISchedulerPeriodDict].slice(0, -1) : statusStore.schedulerPeriodDict[surveySettings.period as keyof ISchedulerPeriodDict] }}</ion-select-option>
      </ion-select>
    </ion-item>

  </ion-list>

  <div v-show="surveySettings.period == 'm'">
    <ion-segment value="w" v-model="surveySettings.spacer_period">
      <ion-segment-button value="w">
        <ion-label>By weekday</ion-label>
      </ion-segment-button>
      <ion-segment-button value="m">
        <ion-label>By month day</ion-label>
      </ion-segment-button>
    </ion-segment>


    <ion-list v-show="surveySettings.spacer_period == 'w'">
      <ion-item>
        <ion-select v-model="surveySettings.week_count" label="Interval" placeholder="Select">
          <ion-select-option :value="1">First</ion-select-option>
          <ion-select-option :value="2">Second</ion-select-option>
          <ion-select-option :value="-1">Last but one</ion-select-option>
          <ion-select-option :value="-2">Last</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-select v-model="surveySettings.day_count" label="Day" placeholder="Select">
          <ion-select-option :value="1">Monday</ion-select-option>
          <ion-select-option :value="2">Tuesday</ion-select-option>
          <ion-select-option :value="3">Wednessday</ion-select-option>
          <ion-select-option :value="4">Thursday</ion-select-option>
          <ion-select-option :value="5">Friday</ion-select-option>
          <ion-select-option :value="6">Saterday</ion-select-option>
          <ion-select-option :value="7">Sunday</ion-select-option>
        </ion-select>
      </ion-item>
    </ion-list>

    <ion-list v-show="surveySettings.spacer_period == 'm'">
      <ion-item>
        <ion-select v-model="surveySettings.day_count" label="Day" placeholder="Select">
          <ion-select-option :value="1">1st</ion-select-option>
          <ion-select-option :value="2">2cnd</ion-select-option>
          <ion-select-option :value="3">3th</ion-select-option>
          <ion-select-option :value="4">4th</ion-select-option>
          <ion-select-option :value="5">5th</ion-select-option>
          <ion-select-option :value="6">6th</ion-select-option>
          <ion-select-option :value="7">7th</ion-select-option>
          <ion-select-option :value="8">8th</ion-select-option>
          <ion-select-option :value="9">9th</ion-select-option>
          <ion-select-option :value="10">10th</ion-select-option>
          <ion-select-option :value="11">11th</ion-select-option>
          <ion-select-option :value="12">12th</ion-select-option>
          <ion-select-option :value="13">13th</ion-select-option>
          <ion-select-option :value="14">14th</ion-select-option>
          <ion-select-option :value="15">15th</ion-select-option>

          <ion-select-option :value="-1">Last</ion-select-option>
          <ion-select-option :value="-2">Last but 1</ion-select-option>
          <ion-select-option :value="-3">Last but 2</ion-select-option>
          <ion-select-option :value="-4">Last but 3</ion-select-option>
          <ion-select-option :value="-5">Last but 4</ion-select-option>
          <ion-select-option :value="-6">Last but 5</ion-select-option>
          <ion-select-option :value="-7">Last but 6</ion-select-option>
          <ion-select-option :value="-8">Last but 7</ion-select-option>
          <ion-select-option :value="-9">Last but 8</ion-select-option>
          <ion-select-option :value="-10">Last but 9</ion-select-option>
          <ion-select-option :value="-11">Last but 10</ion-select-option>
          <ion-select-option :value="-12">Last but 11</ion-select-option>
          <ion-select-option :value="-13">Last but 12</ion-select-option>
          <ion-select-option :value="-14">Last but 13</ion-select-option>
          <ion-select-option :value="-15">Last but 14</ion-select-option>
        </ion-select>
      </ion-item>
    </ion-list>
  </div>

  <p>
    Start date
    <ion-datetime v-model="surveySettings.start_date" presentation="date" :min="minStartDate"/>
  </p>

</template>

<script setup lang="ts">
import { ref } from "vue";
import { 
  IonLabel,
  IonItem,
  IonDatetime,
  IonList,
  IonSelect,
  IonSelectOption,
  IonSegment,
  IonSegmentButton,
} from '@ionic/vue';
import { ISchedulerPeriodDict } from "@/stores/status";

import { useStatusStore } from "@/stores/status";
import { watch } from "vue";

const props = defineProps(['modelValue', 'minStartDay'])
const emit = defineEmits(['update:modelValue'])

const surveySettings = props.modelValue
surveySettings.start_date = surveySettings.start_date.slice(0, 10)

const statusStore = useStatusStore()

const now = new Date()
const today = now.toISOString().slice(0, 10)
var minStartDate = today
if (props.minStartDay) {
  const minStartDate = props.minStartDay
}
const durationHours = ref(0)
const durationDays = ref(3)

function setDuration(){
  surveySettings.duration = durationDays.value * 24 + durationHours.value
}

watch( surveySettings, (surveySettings, prevSurveySettings) => {
  emit('update:modelValue', surveySettings)
})

</script>

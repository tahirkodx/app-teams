<template>
    <p>
      Survey start date
      <ion-datetime
        v-model="surveySettings.start"
        placeholder="Start Date"
        :min="minSurveyDateStr"
        :max="surveySettings.end ? surveySettings.end : maxSurveyDateStr"
      />
    </p>

    <p>
      Survey end date
      <ion-datetime
        v-model="surveySettings.end"
        placeholder="End Date"
        :min="surveySettings.start ? surveySettings.start : minSurveyDateStr"
        :max="maxSurveyDateStr"
      />
    </p>

</template>

<script setup lang="ts">
import { ref } from "vue";
import { 
  IonDatetime,
} from '@ionic/vue';

import { useStatusStore } from "@/stores/status";
import { watch } from "vue";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const surveySettings = props.modelValue

const now = new Date()
const minSurveyDate = new Date()
const maxSurveyDate = new Date()

minSurveyDate.setDate(now.getDate())
maxSurveyDate.setDate(now.getDate() + 60)

const minSurveyDateStr = minSurveyDate.toISOString().slice(0, 10)
const maxSurveyDateStr = maxSurveyDate.toISOString().slice(0, 10)

const statusStore = useStatusStore()

watch( surveySettings, (surveySettings, prevSurveySettings) => {
  emit('update:modelValue', surveySettings)
})

console.log('flaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaag 7')

</script>

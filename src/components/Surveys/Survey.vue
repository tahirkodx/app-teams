<template>
  <ion-header>
    <ion-toolbar>
      <ion-item>
      <ion-title size="large">{{ teamStore.teams.value.get(teamID).name }} Survey</ion-title>
      <ion-icon :icon="closeCircleOutline" size="large" @click="emit('cancel')"></ion-icon>
    </ion-item>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <div v-if="isOnMainSurvey">
      <h1>{{ question.name }}</h1>
      <p><i>How do you feel within the team?</i></p>
      <ion-grid style="--ion-grid-columns: 5;">
        <ion-row>
          <ion-col
            size="5"
            size-md="1"
            :style="activeStyle(response.question_response[question.question.id].response_low)"
            @click="setQuestionActive('response_low')"
          >
            {{ question.question.description_low }}
          </ion-col>
          <ion-col
            size="5"
            size-md="1"
            :style="activeStyle(response.question_response[question.question.id].response_midlow)"
            @click="setQuestionActive('response_midlow')"
          >
          {{ question.question.description_midlow }}
          </ion-col>
          <ion-col
            size="5"
            size-md="1"
            :style="activeStyle(response.question_response[question.question.id].response_medium)"
            @click="setQuestionActive('response_medium')"
          >
          {{ question.question.description_medium }}
          </ion-col>
          <ion-col
            size="5"
            size-md="1"
            :style="activeStyle(response.question_response[question.question.id].response_midhigh)"
            @click="setQuestionActive('response_midhigh')"
          >
          {{ question.question.description_midhigh }}
          </ion-col>
          <ion-col
            size="5"
            size-md="1"
            :style="activeStyle(response.question_response[question.question.id].response_high)"
            @click="setQuestionActive('response_high')"
          >
          {{ question.question.description_high }}
          </ion-col>
        </ion-row>
      </ion-grid>

      <p><i>Where is the team weak/strong?</i></p>
      <ion-grid style="--ion-grid-columns: 7; margin: auto;">
        <ion-row v-for="option in question.question.options">
          <ion-col
            size="2"
            :style="activeStyle(response.question_response[question.question.id].options[option.id].unfavourable)"
            @click="response.question_response[question.question.id].options[option.id].unfavourable = !response.question_response[question.question.id].options[option.id].unfavourable"
            
          >{{ option.unfavourable }}</ion-col>
          <ion-col size="3" style="margion: auto;">{{ option.title }}</ion-col>
          <ion-col
            size="2"
            :style="activeStyle(response.question_response[question.question.id].options[option.id].favourable)"
            @click="response.question_response[question.question.id].options[option.id].favourable = !response.question_response[question.question.id].options[option.id].favourable"
            >{{ option.favourable }}</ion-col>
        </ion-row>
      </ion-grid>
      </div>
      <div v-else>
        <div v-if="exerciseResponse.length > 0">
          <h1>How well would you rate the exercises below</h1>
          <ion-list v-for="eRes in exerciseResponse">
            {{ playbookStore.playbook.value.get(playbookStore.exercises.value.get(eRes.exercise).play).title }}
            <ion-range
              label="score"
              :ticks="true"
              :snaps="true"
              :pin="true"
              :max=10
              :min=0
              v-model="eRes.score"
            />
            <ion-textarea label="Notes" v-model="eRes.note" placeholder="Type something here"></ion-textarea>
          </ion-list>
        </div>
        <div v-else>
          <i>Currently no active exercises</i>
        </div>
      </div>

      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-button v-show="index > 0" @click="previousPage()">Previous</ion-button>
          </ion-col>
          <ion-col>
            <ion-button v-show="!isOnLastPage" @click="nextPage()">Next</ion-button>
            <ion-button v-show="isOnLastPage" @click="finishSurvey()">Done</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
  </ion-content>
</template>

<script setup lang="ts">
  import { ref, reactive, computed } from 'vue';
  import {
    IonPage,
    IonRange,
    IonTextarea,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonCol,
    IonRow,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
  } from '@ionic/vue';
  import { closeCircleOutline } from 'ionicons/icons';
  import { usePlaybookStore } from '@/stores/playbook';
  import { useStatusStore } from '@/stores/status';
  import { useTeamStore } from '@/stores/teams';
  import { IQuestionResponse, IResponseQuestionOption } from '@/stores/status';
  import { IExerciseResponse } from '@/stores/playbook';

  const props = defineProps<{
    surveyid: string,
    teamid: string,
  }>()

  const emit = defineEmits([
    'cancel', 'done'
  ])

  const teamStore = useTeamStore()
  const statusStore = useStatusStore()
  const playbookStore = usePlaybookStore()

  await Promise.all([
    teamStore.teams.fetch(),
    statusStore.fetch(),
    playbookStore.fetch(),
  ])

  const surveyID = props.surveyid
  const teamID = props.teamid
  const request = statusStore.request(teamID, surveyID)

  const index = ref(0)

  const questions = JSON.parse(JSON.stringify(statusStore.questionnaire.value))
  const question = computed(() => questions[index.value])
  const response = reactive(JSON.parse(JSON.stringify(statusStore.getDefaultResponse(teamID, request.id))))
  const exerciseResponse = reactive(JSON.parse(JSON.stringify(playbookStore.defaultExerciseResponse(teamID, surveyID))))

  const hasExercisePage = computed(() => {
    return playbookStore.exercises.list.filter(e => e.team == teamID).length > 0
  })

  const isOnLastPage = computed(() => {
    if (hasExercisePage) {
      return index.value == questions.length
    } else {
      return index.value == questions.length - 1
    }
  })

  const isOnMainSurvey = computed(() => {
    return index.value < questions.length
  })
  
  function activeStyle(isActive: boolean){
    if (isActive) {
      return "background-color: var(--ion-color-primary); border: 5px solid transparent;"
    } else {
      return "background-color: var(--ion-color-step-200); border: 5px solid transparent;"
    }  
  }

  const responseFormattedToAPI = computed(() => {
    let resp = JSON.parse(JSON.stringify(response))
    let responseList = []

    for (let [questionID, questionResponse] of Object.entries(JSON.parse(JSON.stringify(resp.question_response)) as IQuestionResponse)){
      questionResponse['question'] = questionID
      let optionsList = []
      for (let [optionID, optionResponse] of Object.entries(JSON.parse(JSON.stringify(questionResponse.options)) as IResponseQuestionOption)){
        optionResponse['option' as keyof IResponseQuestionOption] = optionID
        optionsList.push(optionResponse)
      }
      questionResponse['options'] = optionsList
      responseList.push(questionResponse)
    }
    resp.question_response = responseList
    return resp
  })

  function setQuestionActive(questionName: string) {
    response.question_response[question.value.question.id].response_low = false
    response.question_response[question.value.question.id].response_midlow = false
    response.question_response[question.value.question.id].response_medium = false
    response.question_response[question.value.question.id].response_midhigh = false
    response.question_response[question.value.question.id].response_high = false

    response.question_response[question.value.question.id][questionName] = true
  }

  function previousPage() {
    index.value = index.value - 1
    let contentElement = document.querySelector('ion-content');
    if (contentElement) contentElement.scrollToTop()
  }

  function nextPage() {
    index.value = index.value + 1
    let contentElement = document.querySelector('ion-content');
    if (contentElement) contentElement.scrollToTop()
  }

  function finishSurvey() {
    exerciseResponse.forEach((r: IExerciseResponse) => {
      if (r.note && r.note.length == 0){
        delete r.note
      }
    })
    Promise.all([
      statusStore.responses.create(responseFormattedToAPI.value),
      playbookStore.exerciseResponses.create(exerciseResponse)
  ])
  .then(() => statusStore.requests.fetch())
  .then(() => emit('done'))
  }

</script>

<style scoped>
  ion-col {
    text-align: center;
  }

  ion-row {
    border: 5px solid transparent;
  }

</style>
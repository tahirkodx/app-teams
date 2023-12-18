<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>
        Settings
      </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-toggle v-model="showMessagesOnOpening" justify="space-between">
          Show messages on opening
        </ion-toggle>
      </ion-item>
      <ion-item>
        <ion-toggle v-model="sendNewSurveyNotification" justify="space-between">
          Send new survey notification
        </ion-toggle>
      </ion-item>
      <ion-item>
        <ion-toggle v-model="sendNewSurveyEmail" justify="space-between">
          Send new survey email
        </ion-toggle>
      </ion-item>
      <ion-item>
        <ion-toggle v-model="sendNewSurveySMS" justify="space-between">
          Send new survey text
        </ion-toggle>
      </ion-item>
      <ion-item>
        <ion-toggle v-model="sendSurveyResultsNotification" justify="space-between">
          Send survey results notification
        </ion-toggle>
      </ion-item>
      <ion-item>
        <ion-toggle v-model="sendSurveyResultsEmail" justify="space-between">
          Send survey results email
        </ion-toggle>
      </ion-item>
      <ion-item>
        <ion-toggle v-model="sendSurveyResultsSMS" justify="space-between">
          Send survey results text
        </ion-toggle>
      </ion-item>
      <ion-item>
        <ion-toggle v-model="availableAsCoach" :default="userStore.leadershipLevel < 5" justify="space-between">
          Available as coach (level 5 leader onwards)
        </ion-toggle>
      </ion-item>
      <ion-item>
        <ion-toggle v-model="availableForExerciseQuestions" justify="space-between">
          Available to share experience on exercises
        </ion-toggle>
      </ion-item>
      <ion-item>
        <ion-toggle v-model="showScores" justify="space-between">
          Show scores in app header
        </ion-toggle>
      </ion-item>

      <ion-button expand="block" @click="save">Save</ion-button>
    </ion-content>
  </ion-page>
    
</template>
  
<script setup lang="ts">
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonItem,
    IonToggle,
    IonButton,
  } from '@ionic/vue';
  import { ref } from 'vue';

  import { useUserStore } from "@/stores/user";
import router from '@/router';
  const userStore = useUserStore()
  await userStore.fetch()

  const showMessagesOnOpening = ref(userStore.settings.value.get('show_messages_on_opening'))
  const sendNewSurveyNotification = ref(userStore.settings.value.get('send_new_survey_notification'))
  const sendNewSurveyEmail = ref(userStore.settings.value.get('send_new_survey_email'))
  const sendNewSurveySMS = ref(userStore.settings.value.get('send_new_survey_SMS'))
  const sendSurveyResultsNotification = ref(userStore.settings.value.get('send_survey_results_notification'))
  const sendSurveyResultsEmail = ref(userStore.settings.value.get('send_survey_results_email'))
  const sendSurveyResultsSMS = ref(userStore.settings.value.get('send_survey_results_SMS'))
  const availableAsCoach = ref(userStore.settings.value.get('available_as_coach'))
  const availableForExerciseQuestions = ref(userStore.settings.value.get('available_for_exercise_questions'))
  const showScores = ref(userStore.settings.value.get('show_scores'))

  async function save(){
    let newSettings = {
      show_messages_on_opening: showMessagesOnOpening.value,
      send_new_survey_notification: sendNewSurveyNotification.value,
      send_new_survey_email: sendNewSurveyEmail.value,
      send_new_survey_SMS: sendNewSurveySMS.value,
      send_survey_results_notification: sendSurveyResultsNotification.value,
      send_survey_results_email: sendSurveyResultsEmail.value,
      send_survey_results_SMS: sendSurveyResultsSMS.value,
      available_as_coach: availableAsCoach.value,
      available_for_exercise_questions: availableForExerciseQuestions.value,
      show_scores: showScores.value
    }
    await userStore.settings.update_values(newSettings)
    router.go(-1)
  }

</script>
  
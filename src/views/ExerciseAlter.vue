<template>
  <ion-page>
    <ion-header>
      <score></score>
      <ion-breadcrumbs>
          <ion-breadcrumb @click="() => router.push({name: 'exercises'})">Exercises</ion-breadcrumb>
          <ion-breadcrumb >A-team</ion-breadcrumb>
        </ion-breadcrumbs>
    </ion-header>
    <ion-content class="ion-padding">

      <ion-list>
        <ion-item>
          <ion-select label="Responsible person" v-model="newStatus.responsible">
            <ion-select-option v-for="member in teamStore.teams.value.get(newStatus.team).members" :value="member.email">{{ member.first_name }} {{ member.last_name }}</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-checkbox justify="space-between" v-model="newStatus.active" @ion-change="changeActive">Exercises is active</ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-checkbox justify="space-between" v-model="newStatus.completed" @ion-change="changeCompleted">Exercises is completed</ion-checkbox>
        </ion-item>
      </ion-list>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-button expand="block" @click="cancel">Cancel</ion-button>       
          </ion-col>
          <ion-col>
            <ion-button expand="block" @click="confirm">Confirm</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import {
  IonPage, 
  IonHeader,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonBreadcrumbs,
  IonBreadcrumb,
  IonButton,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonCheckbox,
} from '@ionic/vue';
import router from '@/router/index'
import score from "@/components/All/Header.vue"
import { usePlaybookStore } from '@/stores/playbook';
import { useTeamStore } from '@/stores/teams';

const route = useRoute()
const exerciseID = route.params.exerciseid as string

const playbookStore = usePlaybookStore()
const teamStore = useTeamStore()
await Promise.all([
  playbookStore.fetch(),
  teamStore.fetch(),
])

const exercise = playbookStore.exercises.value.get(exerciseID)
const newStatus = ref(JSON.parse(JSON.stringify(exercise)))

function changeActive(){
  if (newStatus.value.active && newStatus.value.completed){
    newStatus.value.completed = false
  }
}

function changeCompleted(){
  if (newStatus.value.active && newStatus.value.completed){
    newStatus.value.active = false
  }
}

function confirm() {
  playbookStore.exercises.update_object(exerciseID, newStatus.value)
  router.push({name: 'exercise', params: {exerciseid: exerciseID}})
}

function cancel() {
  router.push({name: 'exercise', params: {exerciseid: exerciseID}})
}

</script>

<template>
  <ion-page>
    <ion-header>
      <score></score>
      <ion-breadcrumbs>
          <ion-breadcrumb @click="() => router.push({name: 'exercises'})">Exercises</ion-breadcrumb>
          <ion-breadcrumb >A-team</ion-breadcrumb>
        </ion-breadcrumbs>
    </ion-header>
    <ion-content>
      <div class="ion-padding">
        <!--Line :data="data"></Line-->
        <h2 style="text-align: center">{{ play.title }}</h2>
        <div v-if="statusStore.getNotesReport(teamID, exerciseID)['score']">
          <center><h3><i>Score: {{ statusStore.getNotesReport(teamID, exerciseID)['score'] }} / 10</i></h3></center>
        </div>
        <div v-else>
          <center><h3><i>No score available</i></h3></center>
        </div>
        <ion-list>
          <ion-item>
            Responsible: {{ teamStore.getTeamMember(exercise.team, exercise.responsible).first_name }} {{ teamStore.getTeamMember(exercise.team, exercise.responsible).last_name }}
          </ion-item>
          <ion-item>
            Created at: {{ exercise.created_at.slice(0, 10) }}
          </ion-item>
        </ion-list>
        <ion-button expand="block" @click="() => router.push({name: 'exercisealter', params: {exerciseid: exerciseID}})">Alter</ion-button>
      </div>

      <ion-accordion-group :multiple="true" :value="['notes', 'timeline']">
        <!-- Notes -->
        <ion-accordion value="notes">
          <ion-item slot="header" color="light">
            <ion-label>Notes</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-list>
              <ion-item v-for="note in statusStore.getNotesReport(teamID, exerciseID)['notes']">
                "<i>{{ note }}</i>"
              </ion-item>
            </ion-list>
          </div>
        </ion-accordion>

        <!-- Score history -->
        <ion-accordion value="timeline">
          <ion-item slot="header" color="light">
            <ion-label>Timeline</ion-label>
          </ion-item>
          <div>Hello</div>
        </ion-accordion>
      </ion-accordion-group>


      <play-details :play="play" />
    </ion-content>

    <div id="box" v-show="showCalendar">
      <ion-datetime v-model=dateISOFormat :max="new Date().toISOString()" presentation="date"></ion-datetime>
      <ion-button expand="block" @click="showCalendar=false">close</ion-button>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import {
  IonPage, 
  IonHeader,
  IonList,
  IonItem,
  IonContent,
  IonDatetime,
  IonBreadcrumbs,
  IonBreadcrumb,
  IonButton,
  IonAccordionGroup,
  IonAccordion,
  IonLabel,
} from '@ionic/vue';
import router from '@/router/index'
import score from "@/components/All/Header.vue"
import PlayDetails from '@/components/PlayDetails.vue';
import { usePlaybookStore } from '@/stores/playbook';
import { useStatusStore } from '@/stores/status';
import { useTeamStore } from '@/stores/teams';
import { fetchCurrent, teamID } from '@/stores/current'

const route = useRoute()
const exerciseID = route.params.exerciseid as string

const playbookStore = usePlaybookStore()
const statusStore = useStatusStore()
const teamStore = useTeamStore()
await Promise.all([
  teamStore.fetch(),
  statusStore.notes.fetch(),
  playbookStore.fetch(),
  fetchCurrent(),
])

const exercise = playbookStore.exercises.value.get(exerciseID)
const play = playbookStore.playbook.value.get(exercise.play)
const showCalendar = ref(false)
const dateISOFormat = new Date().toISOString()
</script>

<style scoped>
  ion-backdrop {
    opacity: 0.9;
  }

  #box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    z-index: 100;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: auto;
    border-radius: 10px;
  }
</style>
<template>
  <ion-page>
    <ion-header>
      <score></score>
      <ion-breadcrumbs>
          <ion-breadcrumb @click="() => router.push({name: 'exercises'})">Exercises</ion-breadcrumb>
          <ion-breadcrumb >A-team</ion-breadcrumb>
        </ion-breadcrumbs>
    </ion-header>
    <ion-content :fullscreen="true">

      <ion-accordion-group>
        <ion-accordion value="filters">
          <ion-item slot="header" color="light">
            <ion-label>Filters</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-item>
              <ion-checkbox v-model="includeExperienceAsMember" justify="space-between">Experience as member</ion-checkbox>
            </ion-item>
            <ion-item>
              <ion-checkbox v-model="includeExperienceAsLeader" justify="space-between">Experience as leader</ion-checkbox>
            </ion-item>
            <ion-item>
              <ion-checkbox v-model="includeExperienceAsCoach" justify="space-between">Experience as coach</ion-checkbox>
            </ion-item>
            <ion-item>
              <ion-checkbox v-model="includeKnownViaTeam" justify="space-between">Known via Team</ion-checkbox>
            </ion-item>
            <ion-item>
              <ion-checkbox v-model="includeKnownViaNetwork" justify="space-between">Known via Network</ion-checkbox>
            </ion-item>
            <ion-item>
              <ion-checkbox v-model="includeKnownViaOrganization" justify="space-between">Known via Organization</ion-checkbox>
            </ion-item>
          </div>
        </ion-accordion>
      </ion-accordion-group>

      <ion-grid>
        <ion-row>
          <ion-col>
            <b>name</b>
          </ion-col>
          <ion-col>
            <b>Experience as</b>
          </ion-col>
          <ion-col>
            <b>Fit</b>
          </ion-col>
        </ion-row>
        <ion-row
          v-for="help in filteredList"
          @click="() => router.push({name: 'exercisesupportgetteamcoachprofile', params: {exerciseid: exerciseID, userid: help.userID}})"
          style="border-width: var(--inner-border-width); border-style: var(--border-style); border-color: var(--border-color);"
        >
          <ion-col>
            {{ help.first_name }} {{ help.last_name }}
          </ion-col>
          <ion-col>
            {{ help.experienceAs.join(', ') }}
          </ion-col>
          <ion-col>
            {{ help.fit }}
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  IonPage, 
  IonHeader,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonBreadcrumbs,
  IonBreadcrumb,
  IonAccordion,
  IonAccordionGroup,
  IonCheckbox,
} from '@ionic/vue';
import router from '@/router/index'
import score from "@/components/All/Header.vue"
import { usePlaybookStore } from '@/stores/playbook';
import { IExerciseHelp } from '@/stores/playbook';
const route = useRoute()
const playbookStore = usePlaybookStore()
const exerciseID = route.params.exerciseid

const includeExperienceAsMember = ref(true)
const includeExperienceAsLeader = ref(true)
const includeExperienceAsCoach = ref(true)

const includeKnownViaTeam = ref(true)
const includeKnownViaNetwork = ref(true)
const includeKnownViaOrganization = ref(true)

const filteredList = computed((): IExerciseHelp[] => {
  let potentialHelp = JSON.parse(JSON.stringify(playbookStore.exerciseHelp.value.get(route.params.exerciseid))) as IExerciseHelp[]
  let help = new Set()

  let helpAs = new Set()
  if (includeExperienceAsMember.value) potentialHelp.filter((h: IExerciseHelp) => h.experienceAs.includes(1)).forEach((item: IExerciseHelp) => helpAs.add(item))
  if (includeExperienceAsLeader.value) potentialHelp.filter((h: IExerciseHelp) => h.experienceAs.includes(2)).forEach((item: IExerciseHelp) => helpAs.add(item))
  if (includeExperienceAsCoach.value) potentialHelp.filter((h: IExerciseHelp) => h.experienceAs.includes(3)).forEach((item: IExerciseHelp) => helpAs.add(item))

  let helpFrom = new Set()
  if (includeKnownViaTeam.value) potentialHelp.filter((h: IExerciseHelp) => h.knownVia.includes('team')).forEach((item: IExerciseHelp) => helpFrom.add(item))
  if (includeKnownViaNetwork.value) potentialHelp.filter((h: IExerciseHelp) => h.knownVia.includes('network')).forEach((item: IExerciseHelp) => helpFrom.add(item))
  if (includeKnownViaOrganization.value) potentialHelp.filter((h: IExerciseHelp) => h.knownVia.includes('organization')).forEach((item: IExerciseHelp) => helpFrom.add(item))

  return [...helpAs].filter(h => [...helpFrom].includes(h)) as IExerciseHelp[]

})


</script>
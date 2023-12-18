<template>
    <ion-page>
      <ion-header>
        <score></score>
      </ion-header>
      <ion-content class="ion-padding">

      <ion-segment v-model="focus" value="courses">
        <ion-segment-button value="all">
          <ion-label>All teams</ion-label>
        </ion-segment-button>
        <ion-segment-button value="team">
          <ion-label>Current team</ion-label>
        </ion-segment-button>
      </ion-segment>

      <ion-card
        v-for="course in orderedCourses"
        @click="() => router.push({name: 'course', params: {courseid: course.id}})">
        <ion-card-header>
          <ion-card-subtitle>{{ course.category }}</ion-card-subtitle>
          <ion-card-title>{{ course.title }}</ion-card-title>
        </ion-card-header>
        <ion-card-content style="padding-top: 0">
          Here's a small text description for the card content. Nothing more, nothing less.
        </ion-card-content>
      </ion-card>

      </ion-content>
    </ion-page>
    
  </template>
  
  <script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
  import { 
    IonPage,
    IonHeader,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
  } from '@ionic/vue';

  import score from "@/components/All/Header.vue"
  import { useTeamStore } from "@/stores/teams";
  import { useAcademyStore } from '@/stores/academy'
  import { fetchCurrent, teamID } from '@/stores/current'
  import { ICourse } from "@/stores/academy";
  import router from '@/router/index'

  const route = useRoute()
  const teamStore = useTeamStore()
  const academyStore = useAcademyStore()

  await Promise.all([
    academyStore.fetch(),
    teamStore.fetch(),
    fetchCurrent(),
  ])

  const focus = ref(route.params.focus as string)
  if (focus.value == '') focus.value = 'all'

  /**
   * Get ordered list of courses. Order by score, either of the current team or of all teams
   */
  const orderedCourses = computed(() => {
    let courseList = academyStore.courses.list
    console.log(courseList)
    if (focus.value == 'all') {
      return courseList.sort((c: ICourse) => -academyStore.getAllTeamCourseScore(c.id))
    } else {
      return courseList.sort((c: ICourse) => -academyStore.getTeamCourseScore(c.id, teamID.value))
    }
  })

  </script>
  
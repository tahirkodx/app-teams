<template>
  <ion-page>
    <ion-header>
      <score />
    </ion-header>
    <ion-content :fullscreen="true">
      <h4 class="titleStyle">Academy</h4>

      <SearchBar />

      <div class="lesson-header">
        <div class="lesson-title">All Lessons</div>
        <ion-button class="all-button">
          All
          <ion-icon slot="end" name="chevron-down-outline"></ion-icon>
        </ion-button>
      </div>

      <LessonsCard />

      <ion-fab
        class="addStyle"
        slot="fixed"
        horizontal="end"
        vertical="bottom"
        @click="() => router.push({ name: 'addteam' })"
      >
        <ion-fab-button>
          <ion-icon src="/src/pictures/answer-correct-icon 1.svg"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonButton,
  IonContent,
  IonIcon,
  IonFab,
  IonFabButton,
} from "@ionic/vue";

import router from "@/router/index";
import score from "@/components/Header/Header.vue";
import myMyModal from "@/components/VideoPlayerModal/VideoPlayerModal.vue";
import { useUserStore, useAcademyStore } from "@/store";
import SearchBar from "@/components/Widgets/SearchBar.vue";
import LessonsCard from "@/components/Widgets/LessonCard.vue";

// import { useTeamStore } from "@/stores/teams";
//   import { useAcademyStore } from '@/stores/academy'
//   import { fetchCurrent, teamID } from '@/stores/current'
//   import { ICourse } from "@/stores/academy";

// const route = useRoute()
//  const teamStore = useTeamStore()
const academyStore = useAcademyStore();

await Promise.all([
  academyStore.getCourses(),
  academyStore.getCoursesScores(),
  academyStore.getCoursesStatus(),
]);
console.log("Satre: ", academyStore.courses);
// const focus = ref(route.params.focus as string)
// if (focus.value == '') focus.value = 'all'

/**
 * Get ordered list of courses. Order by score, either of the current team or of all teams
 */
// const orderedCourses = computed(() => {
//   let courseList = academyStore.courses.list
//   if (focus.value == 'all') {
//     return courseList.sort((c: ICourse) => -academyStore.getAllTeamCourseScore(c.id))
//   } else {
//     return courseList.sort((c: ICourse) => -academyStore.getTeamCourseScore(c.id, teamID.value))
//   }
// })
</script>

<style scoped>
.lesson-header {
  display: flex;
  justify-content: space-between;
  align-items: left;
  padding: 16px;
}

.lesson-title {
  color: #303030;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 55px; /* 142.857% */
  letter-spacing: 0.1px;
}

.all-button {
  color: #8b8b8b;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
  --background: #f7f7f7; /* Set your desired background color */
  --background-activated: grey; /* Background color for activated state */
  --background-focused: grey; /* Background color for focused state */
  --background-hover: grey; /* Background color for hover state */
  --border-radius: 8px; /* Adjust border-radius as needed */
  --color: #8b8b8b; /* Text color */
}

.titleStyle {
  color: var(--Neutrals-black, #303030);
  font-size: 22px;
  font-weight: 500;
  line-height: 28px;
  text-align: left;
  margin-top: 25px;
  margin-bottom: 0px;
  padding-left: 16px;
  font-style: normal;
}

.addStyle {
  margin-bottom: 40px;
  margin: 10px;
}
</style>

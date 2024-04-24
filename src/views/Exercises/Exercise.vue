<template>
  <ion-page>
    <ion-header>
      <score></score>
    </ion-header>
    <ion-content >
      <div class="header-container">
        <!-- <h1>Celebrate and Collaborate</h1> -->
        <h1 class="ion-padding">{{ playbookStore?.singleExercise?.play_title }}</h1>
        <h2>
          {{
            playbookStore?.playbook?.get(playbookStore?.singleExercise?.play)
              ?.area
          }}
        </h2>
        <div class="owner-container">
          <ion-avatar>
            <img src="/src/pictures/Ellipse 72.svg" />
          </ion-avatar>
          <h3>
            Owner :
            {{
              playbookStore?.responsiblePerson?.first_name +
              " " +
              playbookStore?.responsiblePerson?.last_name
            }}
          </h3>
        </div>
      </div>

      <div class="tab-container">
        <div class="tabs">
          <div
            class="tab"
            :class="{ active: activeTab === 'timeline' }"
            @click="segmentChanged('timeline')"
          >
            Timeline
          </div>
          <div
            class="tab"
            :class="{ active: activeTab === 'description' }"
            @click="segmentChanged('description')"
          >
            Description
          </div>
          <div
            class="tab"
            :class="{ active: activeTab === 'details' }"
            @click="segmentChanged('details')"
          >
            Details
          </div>
        </div>
        <div class="content" v-if="loading">
          <!-- Content based on the active tab -->
          <div v-if="activeTab === 'timeline'">
            <LineChart :data="chartData" @update="handleUpdate" />
            <ion-reorder-group v-if="scoreValue">
              <ion-card class="practice-card">
                <ion-text>
                  <p class="score-date">Date : {{ dateValue }}</p>
                </ion-text>
                <ion-text>
                  <p>
                    Score : <span>{{ scoreValue }}/10</span>
                  </p>
                </ion-text>
              </ion-card>
            </ion-reorder-group>
            <Notes v-if="scoreValue" />
          </div>
          <div v-if="activeTab === 'description'">
            <VideoPlayer play="/src/videos/testvideo.mp4" />
            <SummaryDescription :id="exerciseID" />
          </div>
          <div v-if="activeTab === 'details'">
            <ExerciseDetails :id="exerciseID" />
          </div>
        </div>
      </div>
      <!-- ... more content ... -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import {
  IonPage,
  IonHeader,
  IonList,
  IonItem,
  IonContent,
  IonAvatar,
  IonLabel,
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonProgressBar,
  IonReorderGroup,
  IonReorder,
  IonIcon,
  IonText,
} from "@ionic/vue";
import router from "@/router/index"; 
import score from "@/components/Header/Header.vue";
import Notes from "@/components/Exercise/Notes.vue"
import SummaryDescription from "@/components/Exercise/SummaryDescription.vue"
import LineChart from "@/components/Charts/LineChart.vue";
import VideoPlayer from "@/components/Exercise/VideoPlayer.vue";
import ExerciseDetails from "@/components/Exercise/ExerciseDetails.vue";
import { usePlaybookStore, useUserStore, useTeamStore } from "@/store";
const userStore = useUserStore();
const playbookStore = usePlaybookStore();
const loading = ref(false);
const scoreValue = ref();
const dateValue = ref();
const chartData = ref();
const route = useRoute();
const exerciseID = route.params.exerciseid as string;
const activeTab = ref("timeline"); // default active tab
const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});
const segmentChanged = (tabName: any) => {
  activeTab.value = tabName;
};
const handleUpdate = (score: any, date: any) => {
  dateValue.value = formatter.format(new Date(date));
  scoreValue.value = score;
};
onMounted(async () => {
  await Promise.all([
    playbookStore.getSingleExercise(userStore.teamID, exerciseID),
    playbookStore.getPlaybook(),
    playbookStore.getExercises(),
    playbookStore.getTeamExerciseScores(),
    playbookStore.getTeamExerciseNotes(),
  ]);

  loading.value = true;
  playbookStore.getResponsiblePerson(
    userStore.teamID,
    playbookStore?.singleExercise?.responsible
  );
  playbookStore.getSingleExerciseNotes(
    userStore.teamID,
    playbookStore.singleExercise.id
  );
  chartData.value = playbookStore.teamExerciseScoreChart(
    userStore.teamID,
    playbookStore.singleExercise.id
  );
});
</script>

<style scoped>
.custom-card-container {
  display: flex;
  flex-direction: row;
}

.custom-card {
  margin: 0 0;
  border-radius: 0px;
  display: inline-flex;
  padding: 8px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  /* --background: #F7F7F7; */
}

ion-card-header {
  position: relative;
  padding-bottom: 0;
}

ion-card-title {
  font-size: 1.5em;
}

ion-card-content {
  padding-top: 16px;
  font-size: 1rem;
}

/* tabs css */
.tabs {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
}

.tab-container{
    padding-top: 20px;
}
.tab {
  padding: 10px 33px;
  cursor: pointer;
  text-align: center;
  border-bottom: 1px solid #eaeaea; /* Makes the tab seem "inactive" */
}

.tab.active {
 border-bottom: 2px solid var(--tietiary, rgba(44, 58, 209, 0.50));
 width: 50%;
}

.content {
  padding: 20px 0px 0px 0px;
  min-height: 200px; /* Adjust as needed */
  overflow-y: scroll;
    height: auto;
}

/* style for survey  */
ion-datetime {
  --background: unset: !important;
}
.practice-card {
    --ion-item-background: transparent;
    --ion-item-padding: 0;
    --background: transparent;
    box-shadow: none;
    border-bottom: 1px solid #F2F2F2;
    border-radius: 0px;
    margin: 10px 0px 0px 0px;
    /* Remove shadow if present */
}

.card-content {
    display: flex;
    align-items: center;
    padding: 0px 15px 0px 15px;
  }
.score-date{
    color: var(--tietiary, rgba(44, 58, 209, 0.50));


font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
letter-spacing: 0.1px;


}
p{
  padding: 0px 15px 0px 15px;
  margin: 0px 0px 10px 0px;


}
  span{
  color: var(--secondary, #FF8512);

}

ion-item {
    --padding-start: 0;
    --padding-end: 0;
    --inner-padding-end: 0;
    --inner-padding-start: 0;
}

ion-label {
    flex-grow: 1;
    font-size: 1rem;
    padding: 16px 0;

}

.progress-container {
    width: 100%;
}

ion-progress-bar {
    height: 2px;
    /* Height of progress bar, adjust as needed */
    --background: #7F7F7F;
}

ion-reorder {
    color: var(--ion-color-medium);
}

ion-icon {
    font-size: 1.5em;
    width: 24px;
    height: 24px;
    margin-top: 20px;;
}
.addStyle{
    margin-bottom: 40px;
    margin: 10px ;
}






.header-container {
  text-align: center;
  border-bottom: 1px solid #F2F2F2;
background: #F7F7F7;
}

.header-container h1 {
color: var(--Neutrals-black, #303030);
text-align: center;
/* Title small */
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
letter-spacing: 0.1px;
padding-top: 8px;
margin-bottom: -15px;
}

.header-container h2 {
color: #7C7C7C;
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 150% */
letter-spacing: 0.15px;
 padding: 0px 80px;
}

.owner-container {
display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -8px; /* Adjust this value as needed for top margin */

}

.owner-container h3 {
color: #808080;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 133.333% */
margin-left: 8px;
margin-bottom: 15px;
}

ion-avatar {
--border-radius: 50%;
--size: 50px; /* Adjust the size of the avatar */
width: 20px;
height: 20px;
}

/* Additional styling for avatar image if needed */
ion-avatar img {
border-radius: 50%;

}

/* custom css */


</style>

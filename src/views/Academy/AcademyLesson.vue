<template>
  <ion-page>
    <ion-header>
      <Header isBackButton router-link="academy" />
    </ion-header>
    <ion-content>
      <!-- Header Container -->
      <div class="header-container">
        <ion-row>
          <ion-col size="9">
            <ion-text>
              <p class="resource-title">
                Resource Title:
                {{ academyStore?.singleCourse?.lessons[tempIndex]?.title }}
              </p>
            </ion-text>
          </ion-col>
          <ion-col size="3" class="ion-text-right">
            <ion-button
              fill="clear"
              class="navigation-button"
              @click="processBackItem"
              :disabled="tempIndex + 1 <= 1"
            >
              <span class="icon-background">
                <ion-icon :icon="chevronBack" slot="icon-only"></ion-icon>
              </span>
            </ion-button>
            <div class="resource-navigation">
              {{
                tempIndex + 1 + "/" + academyStore.singleCourse?.lessons?.length
              }}
            </div>
            <ion-button
              fill="clear"
              class="navigation-button"
              @click="processNextItem"
              :disabled="
                tempIndex + 1 >= academyStore.singleCourse?.lessons?.length
              "
            >
              <span class="icon-background">
                <ion-icon :icon="chevronForward" slot="icon-only"></ion-icon>
              </span>
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row class="pl-4">
          <ion-col size="9">
            <div class="resource-details">
              <div class="resource-detail">
                Video:
                {{ academyStore?.singleCourse?.total_length }}
                Mins
              </div>
              <div class="resource-detail">
                {{ MonthsAgo(academyStore?.singleCourse?.last_updated) }}
                Months ago
              </div>
              <div class="resource-detail">
                {{ academyStore?.singleCourse?.lessons?.length }}
                Lessons
              </div>
            </div>
          </ion-col>
        </ion-row>
      </div>
      <VideoPlayer play="/src/videos/testvideo.mp4" />
      <div class="tab-container">
        <div class="tabs">
          <div
            class="tab"
            :class="{ active: activeTab === 'courses' }"
            @click="segmentChanged('courses')"
          >
            Courses
          </div>
          <div
            class="tab"
            :class="{ active: activeTab === 'details' }"
            @click="segmentChanged('details')"
          >
            Details
          </div>
          <div
            class="tab"
            :class="{ active: activeTab === 'transcript' }"
            @click="segmentChanged('transcript')"
          >
            Transcript
          </div>
          <div
            class="tab"
            :class="{ active: activeTab === 'notes' }"
            @click="segmentChanged('notes')"
          >
            Notes
          </div>
        </div>
        <div class="content" v-if="loading">
          <!-- Content based on the active tab -->
          <div v-if="activeTab === 'courses'">
            <Description
              :summary="academyStore?.singleCourse?.summary"
              :description="academyStore?.singleCourse?.description"
              :plays="academyStore?.singleCourse?.plays"
            />
          </div>
          <div v-if="activeTab === 'details'">
            <Details
              :id="academyStore?.singleCourse?.lessons[tempIndex]?.id"
              :summary="academyStore?.singleCourse?.lessons[tempIndex].summary"
              :time="
                academyStore?.singleCourse?.lessons[tempIndex].video_length
              "
              :content="academyStore?.singleCourse?.lessons[tempIndex].content"
            />
          </div>
          <div v-if="activeTab === 'transcript'">
            <Transcript
              :summary="academyStore?.singleCourse?.lessons[tempIndex].summary"
              :transcript="
                academyStore.singleCourse?.lessons[tempIndex].transcript
              "
            />
          </div>
          <div v-if="activeTab === 'notes'">
            <p>Write something here</p>
          </div>
        </div>
      </div>
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
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/vue";
import router from "@/router/index";
import {
  pencilOutline,
  chevronForward,
  arrowForwardOutline,
  arrowBackOutline,
  chevronBack,
} from "ionicons/icons";
import Header from "@/components/Header/Header.vue";
import Description from "@/components/Academy/Description.vue";
import Transcript from "@/components/Academy/Transcript.vue";
import Details from "@/components/Academy/Details.vue";
import VideoPlayer from "@/components/Exercise/VideoPlayer.vue";
import {
  usePlaybookStore,
  useUserStore,
  useTeamStore,
  useAcademyStore,
} from "@/store";
import { MonthsAgo } from "@/utils/Helper";
const academyStore = useAcademyStore();
const userStore = useUserStore();
const playbookStore = usePlaybookStore();
const loading = ref(false);
const currentIndex = ref("0");
const tempIndex = ref(0);
const activeTab = ref("courses"); // default active tab
const route = useRoute();
const courseId = route.params.courseId as string;
const segmentChanged = (tabName: any) => {
  activeTab.value = tabName;
};
const processNextItem = () => {
  if (tempIndex.value < academyStore.singleCourse.lessons.length) {
    tempIndex.value++;
    currentIndex.value = tempIndex.value.toString();
  } else {
    tempIndex.value++;
  }
  console.log(tempIndex.value);
};
const processBackItem = () => {
  if (tempIndex.value <= academyStore.singleCourse.lessons.length) {
    tempIndex.value--;
    currentIndex.value = tempIndex.value.toString();
  }
};

onMounted(async () => {
  await Promise.all([
    academyStore.getCourses(),
    academyStore.getCoursesScores(),
    academyStore.getCoursesStatus(),
    academyStore.getLessonsStatus(),
    academyStore.getSingleCourse(courseId),
  ]);
  console.log(academyStore.singleCourse.lessons.length);
  loading.value = true;
});
// Other script setup code here
</script>

<style scoped>
.header-container {
  margin-bottom: 20px;

  border-bottom: 1px solid #f2f2f2;
  background: #f7f7f7;
}

.resource-title {
  padding-top: 15px;
  color: #303030;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
}

.resource-details {
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 0.8em;
  color: #666;
}

.resource-detail:not(:last-child)::after {
  content: "•";
  margin: 0 10px;
  color: #666;
  font-size: 20px;
}

.ion-text-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.navigation-button {
  --padding-start: 0;
  --padding-end: 0;
  --padding-top: 0;
  --padding-bottom: 0;
  margin: 0 5px;
}

.resource-navigation {
  display: inline-block;
  margin: 0 10px;
  font-size: 0.9em;
  color: #666;
}
/* tabs */
.tabs {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
}

.tab-container {
  padding-top: 20px;
}
.tab {
  padding: 10px 20px;
  cursor: pointer;
  text-align: center;
  border-bottom: 1px solid #eaeaea; /* Makes the tab seem "inactive" */
}

.tab.active {
  border-bottom: 2px solid var(--tietiary, rgba(44, 58, 209, 0.5));
  width: 50%;
}

.content {
  padding: 20px 0px 0px 0px;
  min-height: 200px; /* Adjust as needed */
  overflow-y: scroll;
  height: auto;
}

/* style for survey  */

.card-content {
  display: flex;
  align-items: center;
  padding: 0px 15px 0px 15px;
}
p {
  padding: 0px 15px 0px 15px;
  margin: 0px 0px 10px 0px;
}

.icon-background {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--ion-color-primary); /* example background color */
  border-radius: 50%; /* circular background */
  width: 24px; /* size of the background */
  height: 24px; /* size of the background */
  color: #fff;
}

ion-icon {
  --ionicon-stroke-width: 32px; /* example to increase icon size if needed */
}

.pl-4 {
  padding-left: 16px;
}

.text-course {
  color: var(--tietiary, rgba(44, 58, 209, 0.5));

  /* mobile/Body small */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
}
</style>

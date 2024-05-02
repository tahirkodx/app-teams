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
          <ion-col size="3" class="ion-text-right flex">
            <ion-button
              fill="clear"
              class="navigation-button"
              @click="processBackItem"
              :disabled="tempIndex + 1 <= 1"
            >
              <span class="icon-background flex">
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
              <span class="icon-background flex">
                <ion-icon :icon="chevronForward" slot="icon-only"></ion-icon>
              </span>
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row class="pl-4">
          <ion-col size="8">
            <div class="resource-details flex">
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
          <ion-col size="4" class="font-xs" id="open-modal">
            <div class="text-course">
              <span>Course Details</span>
              <ion-icon :icon="informationCircleOutline"></ion-icon>
            </div>
          </ion-col>
        </ion-row>
      </div>
      <VideoPlayer play="/src/videos/testvideo.mp4" />
      <div class="tab-container">
        <div class="tabs flex">
          <!-- <div
            class="tab"
            :class="{ active: activeTab === 'courses' }"
            @click="segmentChanged('courses')"
          >
            Courses
          </div> -->
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
          <!-- <div v-if="activeTab === 'courses'">
            <Description :summary="academyStore?.singleCourse?.summary"
              :description="academyStore?.singleCourse?.description" :plays="academyStore?.singleCourse?.plays" />
          </div> -->
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
    <ion-modal
      trigger="open-modal"
      :initial-breakpoint="1"
      :breakpoints="[0, 1]"
      ref="modal"
    >
      <ion-content>
        <div>
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
              <ion-col size="3" class="ion-text-right flex" @click="closeModal">
                <span>
                  <ion-icon
                    :icon="closeOutline"
                    slot="icon-only"
                    class="icon"
                  ></ion-icon>
                </span>
              </ion-col>
            </ion-row>
            <ion-row class="pl-4">
              <ion-col size="9">
                <div class="resource-details flex">
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
              <ion-col size="3" class="ion-text-right flex">
                <span class="bg-purple ion-margin-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M8.86389 11.9467C8.94572 11.9149 9.02048 11.8674 9.08389 11.8067L12.4172 8.47333C12.4794 8.41117 12.5287 8.33738 12.5623 8.25617C12.596 8.17495 12.6133 8.08791 12.6133 8C12.6133 7.82247 12.5428 7.6522 12.4172 7.52667C12.3551 7.46451 12.2813 7.4152 12.2001 7.38156C12.1188 7.34792 12.0318 7.33061 11.9439 7.33061C11.7664 7.33061 11.5961 7.40113 11.4706 7.52667L9.27722 9.72667V4.66667C9.27722 4.48986 9.20698 4.32029 9.08196 4.19526C8.95693 4.07024 8.78736 4 8.61055 4C8.43374 4 8.26417 4.07024 8.13915 4.19526C8.01412 4.32029 7.94389 4.48986 7.94389 4.66667V9.72667L5.75055 7.52667C5.68858 7.46418 5.61484 7.41459 5.53361 7.38074C5.45237 7.34689 5.36523 7.32947 5.27722 7.32947C5.18921 7.32947 5.10208 7.34689 5.02084 7.38074C4.9396 7.41459 4.86586 7.46418 4.80389 7.52667C4.7414 7.58864 4.69181 7.66238 4.65796 7.74362C4.62411 7.82486 4.60669 7.91199 4.60669 8C4.60669 8.08801 4.62411 8.17515 4.65796 8.25638C4.69181 8.33762 4.7414 8.41136 4.80389 8.47333L8.13722 11.8067C8.20062 11.8674 8.27539 11.9149 8.35722 11.9467C8.51953 12.0133 8.70158 12.0133 8.86389 11.9467Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </ion-col>
            </ion-row>
          </div>
          <ion-row>
            <ion-col>
              <div
                v-for="(topic, index) in lessonTopics"
                :key="index"
                @click="
                  () =>
                    router.push({
                      name: 'teamTopic',
                      params: { topicid: topic.id },
                    })
                "
                class="card-wrapper"
              >
                <div class="ion-padding-horizontal">
                  <div>
                    <div class="font-sm">{{ topic.title }}</div>
                    <span
                      :style="{ color: topic.statusColor }"
                      class="text-green"
                      >{{ topic.status }}</span
                    >
                  </div>
                  <div class="font-xs ion-margin-vertical">
                    {{ topic.description }}
                  </div>
                  <ion-progress-bar
                    :style="{ color: topic.progressColor }"
                    :value="topic.progress"
                  ></ion-progress-bar>
                  <div class="ion-border-bottom"></div>
                </div>
              </div>
              <div class="ion-padding">
                <ion-card-content>
                  <div>Course Summary:</div>
                  Lorem ipsum dolor sit amet consectetur. At a orci molestie
                  tincidunt nulla non feugiat blandit.
                </ion-card-content>
              </div>
              <div>
                <ion-label class="text-bold ion-padding"
                  >Course Description:</ion-label
                >
                <ion-text class="text-bold">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Aenean integer
                    vivamus morbi nulla et tincidunt. Platea hac sed nunc est
                    phasellus. Risus et id mi in. Facilisi tellus facilisis
                    venenatis amet. Volutpat lobortis phasellus tincidunt
                    vestibulum volutpat pharetra purus.
                  </p>
                </ion-text>
              </div>
              <ion-accordion-group>
                <ion-accordion value="first">
                  <ion-item slot="header">
                    <ion-label>List of Play:</ion-label>
                  </ion-item>
                  <div class="lesson-div" slot="content">
                    <ion-list lines="none" class="ion-no-padding ion-no-margin">
                      <ion-item
                        v-for="(lesson, index) in lessonList"
                        :key="index"
                        class="ion-no-padding ion-no-margin"
                      >
                        <ion-label
                          class="ion-no-padding ion-no-margin lesson-label"
                        >
                          <ion-icon :icon="play" color="primary"></ion-icon>
                          {{ lesson.title }}
                        </ion-label>
                      </ion-item>
                    </ion-list>
                  </div>
                </ion-accordion>
              </ion-accordion-group>
            </ion-col>
          </ion-row>
        </div>
      </ion-content>
    </ion-modal>
  </ion-page>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonIcon,
  IonText,
  IonRow,
  IonCol,
  IonModal,
  IonButton,
} from "@ionic/vue";
import router from "@/router/index";
import {
  chevronForward,
  chevronBack,
  informationCircleOutline,
  closeOutline,
  play,
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
const activeTab = ref("details"); // default active tab
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
const lessonTopics = ref([
  {
    id: 123123123213,
    title: "Lesson 1",
    status: "Completed",
    statusColor: "#A5CE3E",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean id.",
    progress: 100,
    progressColor: "#A5CE3E",
  },
  {
    id: 123123123213,
    title: "Lesson 2",
    status: "Video: 2:00 Mins Left",
    statusColor: "#2C3AD180",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean id.",
    progress: 0.5,
    progressColor: "red",
  },
  {
    id: 123123123213,
    title: "Lesson 3",
    status: "Video: 2:00 Mins Left",
    statusColor: "#2C3AD180",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean id.",
    progress: 0.5,
    progressColor: "red",
  },
  {
    id: 123123123213,
    title: "Lesson 4",
    status: "Video: 2:00 Mins",
    statusColor: "#7C7C7C",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean id.",
    progress: 0,
    progressColor: "red",
  },
]);
const lessonList = [
  { title: "Lorem Ipsum" },
  { title: "Lorem Ipsum" },
  { title: "Lorem Ipsum" },
];
const modal = ref();

const closeModal = function () {
  // Close the modal
  // Assuming you have a reference to the modal controller
  modal.value.$el.dismiss();
};
</script>

<style scoped>
ion-icon {
  width: 16px;
  height: 16px;
}

ion-card-content {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  border-radius: 5px;
  border: 1px solid var(--main-green, #a5ce3e);
  background: #f2f8e3;
}

ion-progress-bar {
  --background: #e6e0e9;
  width: 100%;
  margin-top: 6px;
  margin-bottom: 15px;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.lesson-div {
  padding: 0px 0px 0px 18px;
}

.ion-border-bottom {
  border-bottom: 1px solid #f2f2f2;
  background: var(--white, #fff);
  width: 100%;
  margin-bottom: 10px;
}

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
  line-height: 24px;
  letter-spacing: 0.15px;
}

.font-sm {
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
}

.font-xs {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}

.resource-details {
  justify-content: start;
  font-size: 10px;
  color: #7c7c7c;
}

.resource-detail:not(:last-child)::after {
  content: "•";
  margin: 6px;
  color: #cacaca;
  font-size: px;
}

.ion-text-right {
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
  padding: 8px;
  margin: 0;
  list-style: none;
  justify-content: space-between;
}

.tab-container {
  padding-top: 20px;
}

.tab {
  padding: 10px 20px;
  cursor: pointer;
  text-align: center;
  border-bottom: 1px solid #eaeaea;
}

.tab.active {
  border-bottom: 2px solid var(--tietiary, rgba(44, 58, 209, 0.5));
  width: 50%;
}

.content {
  padding: 20px 0px 0px 0px;
  min-height: 200px;
  overflow-y: scroll;
  height: auto;
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
  --ionicon-stroke-width: 32px;
}

.pl-4 {
  padding-left: 16px;
}

.text-course {
  color: var(--tietiary, rgba(44, 58, 209, 0.5));
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: center;
  gap: 8px;
  margin-right: 6px;
}

.ion-text-end {
  gap: 8px;
}

ion-modal {
  --height: 824px;
  --width: 100%;
}

.icon {
  width: 24px;
  height: 24px;
  color: #cccccc;
  margin-right: 13px;
}

.bg-purple {
  border-radius: 100px;
  background: #2c3ad180;
  height: 16px;
  margin-top: -3px;
}

.text-green {
  color: var(--main-green, #a5ce3e);
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
}

.text-bold {
  color: #303030;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 0.25px;
}
</style>

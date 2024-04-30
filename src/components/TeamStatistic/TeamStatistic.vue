<template>
  <div>
    <div class="segment-wrapper">
      <ion-segment
        mode="md"
        scrollable
        value="doingWell"
        @ionChange="segmentChanged($event)"
      >
        <ion-segment-button
          value="doingWell"
          @click="segmentSelected('doingWell')"
        >
          <ion-label>Doing Well</ion-label>
        </ion-segment-button>
        <ion-segment-button
          value="needsImprovement"
          @click="segmentSelected('needsImprovement')"
        >
          <ion-label>Needs Improvement</ion-label>
        </ion-segment-button>
        <ion-segment-button
          value="excercises"
          @click="segmentSelected('excercises')"
        >
          <ion-label>Exercises</ion-label>
        </ion-segment-button>
        <ion-segment-button
          value="academicCourses"
          @click="segmentSelected('academicCourses')"
        >
          <ion-label>Academic Courses</ion-label>
        </ion-segment-button>
        <ion-segment-button
          value="surveyNotes"
          @click="segmentSelected('surveyNotes')"
        >
          <ion-label>Survey Notes</ion-label>
        </ion-segment-button>
        <!-- Add more segment buttons as needed -->
      </ion-segment>
    </div>

    <div v-if="selectedSegment === 'doingWell'">
      <div v-for="(item, index) in items" :key="index" style="padding: 6px">
        <ion-item lines="none">
          <ion-label
            >{{ item.label }}
            <ion-text color="medium">{{ item.subLabel }}</ion-text>
          </ion-label>
          <ion-icon
            slot="end"
            :icon="helpCircleOutline"
            @click="openPopover($event)"
          ></ion-icon>
        </ion-item>
        <ion-item lines="full" class="second-item">
          <ion-badge slot="start" color="light">{{ item.value }}</ion-badge>
          <ion-progress-bar :value="item.value / 10"></ion-progress-bar>
        </ion-item>
      </div>
    </div>
    <div v-if="selectedSegment === 'needsImprovement'">
      <div v-for="(item, index) in items" :key="index" class="ion-padding">
        <ion-item lines="none">
          <ion-label
            >{{ item.label }}
            <ion-text color="medium">{{ item.subLabel }}</ion-text>
          </ion-label>
          <ion-icon
            slot="end"
            :icon="helpCircleOutline"
            @click="openPopover($event)"
          ></ion-icon>
        </ion-item>
        <ion-item lines="full">
          <ion-badge slot="start" color="light">{{ item.value }}</ion-badge>
          <ion-progress-bar
            class="ion-progress-bar_need"
            :value="item.value / 10"
          ></ion-progress-bar>
        </ion-item>
      </div>
    </div>
    <div v-if="selectedSegment === 'excercises'">
      <div class="suggested-exercise">Suggested Exercise</div>

      <div class="ion-padding-top ion-padding-bottom ion-padding-start">
        <span class="text-excersise-title">Active Exercises:</span>
      </div>
      <div class="ion-padding-horizontal">
        <ion-card
          class="practice-card"
          v-for="(item, index) in extiveExercises"
          :key="index"
        >
          <div class="card-content">
            <ion-reorder slot="end">
              <img src="/src/pictures/threeDot.svg" class="drag-handle-icon" />
            </ion-reorder>
            <div class="title-progress-container">
              <ion-label class="text-exer"> Exercise Topic</ion-label>
              <div class="owner-container">
                <ion-avatar>
                  <img src="/src/pictures/Ellipse 72.svg" />
                </ion-avatar>
                <h3>
                  Owner: Guy Hawkins
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 2 2"
                    fill="none"
                  >
                    <circle fill="#D9D9D9" />
                  </svg>
                  <span class="completed"> Ongoing</span>
                </h3>
              </div>
              <ion-progress-bar
                :buffer="1.0"
                class="progress-bar"
              ></ion-progress-bar>
            </div>
            <ion-icon
              src="/src/pictures/uil_arrow-right.svg"
              slot="end"
              size="large"
              class="arrow-back"
            />
          </div>
        </ion-card>
      </div>

      <div class="ion-padding-top ion-padding-bottom ion-padding-start">
        <span class="text-excersise-title">Suggested Exercises:</span>
      </div>

      <div class="ion-padding-horizontal">
        <ion-card v-for="(item, index) in suggestedExercises" :key="index">
          <ion-grid>
            <ion-row>
              <ion-col>
                <div class="ion-padding-horizontal headerTitle">
                  <h5>{{ item.title }}</h5>
                </div>
              </ion-col>
              <ion-col size="auto">
                <div style="width: 40px">
                  <ion-icon
                    class="ionIconCustom"
                    src="/src/pictures/uil_arrow-right.svg"
                    slot="end"
                    size="large"
                  >
                  </ion-icon>
                </div>
              </ion-col>
            </ion-row>
          </ion-grid>
          <div class="ion-padding ionText">
            <ion-text>{{ item.desc }} </ion-text>
          </div>
        </ion-card>
      </div>
      <ion-button
        @click="navigate"
        class="ion-padding"
        expand="block"
        fill="outline"
        >SEARCH OTHER</ion-button
      >
    </div>
    <div v-if="selectedSegment === 'academicCourses'">
      <div class="suggested-exercise">Academic Courses</div>
      <div>
        <div class="ion-padding" slot="content">
          <ion-list lines="none" class="ion-no-padding ion-no-margin">
            <ion-item class="ion-no-padding ion-no-margin">
              <ion-label class="ion-no-padding ion-no-margin lesson-label"
                ><ion-icon color="primary" :icon="play"></ion-icon> Lesson
                1</ion-label
              >
              <div class="clock">
                {{ time }}
              </div>
            </ion-item>
            <ion-item class="ion-no-padding ion-no-margin">
              <ion-label class="ion-no-padding ion-no-margin lesson-label"
                ><ion-icon color="primary" :icon="play"></ion-icon> Lesson
                2</ion-label
              >
              <div class="clock">
                {{ time }}
              </div>
            </ion-item>
            <ion-item class="ion-no-padding ion-no-margin">
              <ion-label class="ion-no-padding ion-no-margin lesson-label"
                ><ion-icon color="primary" :icon="play"></ion-icon> Lesson
                3</ion-label
              >
              <div class="clock">
                {{ time }}
              </div>
            </ion-item>
          </ion-list>
        </div>
      </div>
    </div>
    <div v-if="selectedSegment === 'surveyNotes'">
      <div class="suggested-exercise">Team Survey Notes</div>
      <div class="ion-padding">
        <ion-text>
          <h6>Energy</h6>
        </ion-text>
        <ion-text color="medium">
          Total Notes : <span class="score-date">50</span>
        </ion-text>
        <div class="title-line"></div>
      </div>
      <div class="custom-section">
        <p>
          Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean
          id. Tortor commodo massa nisl massa netus. At cursus aenean pulvinar
          vivamus. Et dictumst egestas cursus quis. Convallis lorem est pulvinar
          nec sed gravida aliquam sagittis. Pretium volutpat sit elit sapien sed
          quam ornare.
        </p>
      </div>
    </div>
  </div>
  <ion-popover
    mode="ios"
    :is-open="popoverOpen"
    :event="event"
    @didDismiss="popoverOpen = false"
  >
    <ion-content>
      <ion-list lines="none">
        <ion-item>
          <ion-icon :icon="helpCircleOutline" slot="start"></ion-icon>
          <ion-label class="ion-text-center" style="flex: 1"
            >Clear & Vision</ion-label
          >
          <!-- <ion-button fill="clear" slot="end">
            <ion-icon :icon="closeOutline"></ion-icon>
          </ion-button> -->
        </ion-item>
        <ion-item>
          <ion-label>Energy</ion-label>
          <ion-note slot="end">Clear: 20</ion-note>
        </ion-item>
      </ion-list></ion-content
    >
  </ion-popover>
</template>

<script setup lang="ts">
import {
  IonNote,
  IonContent,
  IonCard,
  IonLabel,
  IonButton,
  IonIcon,
  IonItem,
  IonList,
  IonPopover,
  IonSegmentButton,
  IonSegment,
  IonBadge,
  IonText,
  IonProgressBar,
} from "@ionic/vue";
import { ref, onMounted, onUnmounted } from "vue";
import { closeOutline, helpCircleOutline, play } from "ionicons/icons";
import { useRouter } from "vue-router";
const selectedSegment = ref("doingWell");

function segmentChanged(event: Event) {
  const detail = (event as CustomEvent).detail;
  if (detail.value) {
    selectedSegment.value = detail.value;
  }
}
const router = useRouter();
const navigate = () => {
  router.push({ name: "searchOther" });
};

function segmentSelected(value: string) {
  selectedSegment.value = value;
}

const items = ref([
  {
    label: "Role & Responsibilities:",
    subLabel: "-focusses on goals",
    value: 8,
  },
  {
    label: "Information flow between:",
    subLabel: "-Unclear/Overlap",
    value: 7,
  },
  { label: "Goals & Vision:", subLabel: "-Clear", value: 4 },
  { label: "Day-by-day work::", subLabel: "-Contribute to goals", value: 3 },
  // Add more items as needed
]);
const time = ref(
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
);

const updateTime = () => {
  time.value = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

let intervalId: number;

onMounted(() => {
  intervalId = window.setInterval(updateTime, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const popoverOpen = ref(false);
const event = ref<Event | null>(null);
const openPopover = (e: Event) => {
  event.value = e;
  popoverOpen.value = true;
};

const extiveExercises = ref([
  {
    topic: "Exercise Topic",
    owner: "Guy Hawkins",
    status: "Ongoing",
    desc: "Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean id. ",
  },
  {
    topic: "Exercise Topic",
    owner: "Guy Hawkins",
    status: "Ongoing",
    desc: "Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean id. ",
  },
]);

const suggestedExercises = ref([
  {
    title: "Exercise Topic",
    desc: "Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean id. ",
  },
  {
    title: "Exercise Topic",
    desc: "Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean id. ",
  },
]);
</script>

<style scoped>
.segment-wrapper {
  overflow-x: auto;
  scrollbar-width: none;
  border-bottom: 1px solid #eaeaea;
}

ion-segment-button {
  min-width: 33%;
  flex: 0 0 auto;
  color: #000;
}

ion-segment-button.md {
  --color-checked: var(--tietiary, rgba(44, 58, 209, 0.5));
  --indicator-height: 4px;
}

ion-segment-button ion-label {
  text-transform: none;
}

ion-progress-bar {
  --background: rgba(191, 195, 242, 0.5);
  --progress-background: var(--tietiary, rgba(44, 58, 209, 0.5));
  height: 10px;
  border-radius: 10px;
}

.ion-progress-bar_need {
  --background: rgb(255, 255, 255);
  --progress-background: var(--secondary, #ff8512);
  height: 10px;
  border-radius: 10px;
}

.suggested-exercise {
  padding: 5px 8px;
  background-color: rgba(44, 58, 209, 0.1);
  color: var(--black, #000);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
}

.practice-card {
  margin-bottom: 16px;
  --ion-item-background: transparent;
  --background: transparent;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 4px 0px;
}

.card-content {
  display: flex;
  align-items: center;
  padding: 10px 8px;
  border-radius: 5px;
  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */
}

.title-progress-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  /* margin-left: 20px; */
}

ion-label {
  font-size: 1rem;
}

.progress-bar {
  --progress-background: #e6e0e9;
  --progress-color: #a5ce3e;
  width: 100%;
  margin-bottom: 15px;
}

.drag-handle-icon {
  width: 15px;
  height: 20px;
  margin-right: 10px;
}

.owner-container {
  display: flex;
  align-items: center;
  margin-top: -8px;
  /* Adjust this value as needed for top margin */
}

.owner-container h3 {
  color: #808080;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  /* 133.333% */
  margin-left: 8px;
  margin-bottom: 15px;
}

ion-avatar {
  --border-radius: 50%;
  --size: 50px;
  /* Adjust the size of the avatar */
  width: 20px;
  height: 20px;
}

ion-avatar img {
  border-radius: 50%;
}

.clock {
  text-align: center;
  font-size: 1em;
  color: rgba(13, 153, 255, 1);
  border: 0.5px solid rgba(204, 204, 204, 0.8);
  padding: 0px 4px;
}

.arrow-back {
  margin-top: -35px;
}

.score-date {
  color: var(--tietiary, rgba(44, 58, 209, 0.5));

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
}
.custom-section p {
  color: #303030;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  margin-bottom: 2px;
}
.custom-section {
  padding: 18px;
  background: #f7f7f7;
  color: #404040;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  margin-bottom: 10px;
}
.title-line {
  border-bottom: 1px solid rgba(242, 242, 242, 0.95);
  margin-top: 15px;
}

.text-exer {
  color: #000;

  /* mobile/Title small */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
}

.text-excersise-title {
  color: var(--black, #000);
  font-family: Cabin;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
}

ion-card {
  margin: 0;
  margin-bottom: 10px;
}

.headerTitle {
  margin-left: -10px;
  color: #000;
}

.ionIconCustom {
  margin-top: 5px;
  margin-bottom: -12px;
}

.ionText {
  margin-top: -30px;
  color: #000;
}
</style>

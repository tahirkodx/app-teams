<template>
  <ion-page>
    <ion-header>
      <score />
    </ion-header>
    <ion-content
      :fullscreen="true"
      v-if="loading"
      :scroll-events="true"
      @ionScrollStart="handleScrollStart()"
      @ionScroll="handleScroll($event)"
      @ionScrollEnd="handleScrollEnd()"
    >
      <ion-grid>
        <ion-row>
          <ion-col>
            <h4 class="page-heading">Excercise Progress</h4>
          </ion-col>
          <ion-col size="auto">
            <div>
              <ion-select
                v-model="selectedFilter"
                interface="popover"
                @ion-change="getSelectedFilterExericse"
                placeholder="Select..."
                class="select-option"
              >
                <ion-select-option value="all">All</ion-select-option>
                <ion-select-option :value="true">Active</ion-select-option>
                <ion-select-option :value="false">Inactive</ion-select-option>
              </ion-select>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid class="ion-padding outer-padding">
        <ion-row class="ion-no-padding">
          <ion-col class="ion-no-padding">
            <!-- <h5 class="ion-padding-bottom">Active Exercises:</h5> -->
            <ion-card
              class="card-style"
              v-if="
                Object.entries(
                  playbookStore?.filteredExercises(selectedFilter) || {}
                ).length > 0
              "
              v-for="[key, exercise] in Object.entries(
                playbookStore?.filteredExercises(selectedFilter)
              )"
              :key="exercise.id"
              @click="
                () =>
                  router.push({
                    name: 'exercise',
                    params: { exerciseid: key },
                  })
              "
            >
              <ion-card-header>
                <ion-card-title>{{ exercise.play_title }}</ion-card-title>
              </ion-card-header>

              <ion-card-content>
                <div class="owner-container">
                  <ion-avatar>
                    <img src="/src/pictures/Ellipse 72.svg" />
                  </ion-avatar>
                  <h3>
                    Owner:
                    {{
                      playbookStore.responsiblePersonName(
                        userStore.teamID,
                        exercise.responsible
                      )
                    }}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 2 2"
                      fill="none"
                    >
                      <circle cx="1" cy="1" r="1" fill="#D9D9D9" />
                    </svg>
                    <span
                      class="completed"
                      v-if="exercise.is_completed"
                      color="success"
                    >
                      Completed
                    </span>
                    <span v-else color="success"> Ongoing </span>
                  </h3>
                </div>
                Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet
                aenean id.
              </ion-card-content>
              <ion-progress-bar
                :buffer="1.0"
                class="progress-bar"
                :value="
                  playbookStore.teamExerciseScore(
                    userStore.teamID,
                    exercise.id
                  ) / 10
                "
              ></ion-progress-bar>
              <ion-text class="icon-color ion-color"
                ><ion-icon
                  :icon="arrowForwardOutline"
                  class="icon-color"
                ></ion-icon
              ></ion-text>
            </ion-card>
            <h5 class="ion-padding-bottom">Suggested Exercises:</h5>
            <ion-card
              class="card-style"
              v-for="[key, exercise] in playbookStore.suggestedExercises"
              :key="key"
              @click="
                () =>
                  router.push({
                    name: 'suggestedExercise',
                    params: { exerciseid: key },
                  })
              "
            >
              <ion-card-header>
                <ion-card-title>{{ exercise.title }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                {{ exercise.description }}
              </ion-card-content>
              <ion-text class="icon-color ion-color"
                ><ion-icon
                  :icon="arrowForwardOutline"
                  class="icon-color"
                ></ion-icon
              ></ion-text>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row class="ion-no-padding">
          <ion-col class="ion-no-padding">
            <ion-button
              expand="block"
              @click="() => router.push({ name: 'exerciseSearch' })"
              >SEARCH More</ion-button
            >
            <!-- <div>
              <ion-button
                class="button-custom"
                expand="full"
                fill="outline"
                router-link="/#"
                >SEARCH OTHERS</ion-button
              >
            </div> -->
          </ion-col>
        </ion-row>
      </ion-grid>

      <!-- <ion-fab
        class="addStyle"
        slot="fixed"
        horizontal="end"
        vertical="bottom"
        @click="() => router.push({ name: 'addteam' })"
      >
        <ion-fab-button>
          <ion-icon src="/src/pictures/answer-correct-icon 1.svg"></ion-icon>
        </ion-fab-button>
      </ion-fab> -->
    </ion-content>
    <ion-content :fullscreen="true" v-if="!loading">
      <!-- <ion-reorder-group @ionItemReorder="doReorder" :disabled="false">
        <ion-card v-for="index in 10" :key="index" class="practice-card">
          <div class="card-content">
            <ion-reorder slot="end">
              <ion-skeleton-text :animated="true"></ion-skeleton-text>
            </ion-reorder>

            <ion-thumbnail slot="end">
              <ion-skeleton-text :animated="true"></ion-skeleton-text>
            </ion-thumbnail>
            <div class="title-progress-container">
              <ion-label>
                <ion-skeleton-text
                  :animated="true"
                  style="width: 80px"
                ></ion-skeleton-text>
              </ion-label>
              <ion-progress-bar
                value="12"
                color="success"
                class="progress-bar"
              ></ion-progress-bar>
            </div>
            <ion-skeleton-text
              :animated="true"
              style="width: 10px"
              slot="end"
              class="arrow-icon"
            ></ion-skeleton-text>
          </div>
        </ion-card>
      </ion-reorder-group> -->
      <!-- <ion-fab
        class="addStyle"
        slot="fixed"
        horizontal="end"
        vertical="bottom"
        @click="() => router.push({ name: 'addteam' })"
      >
        <ion-fab-button>
          <ion-icon src="/src/pictures/answer-correct-icon 1.svg"></ion-icon>
        </ion-fab-button>
      </ion-fab> -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonLabel,
  IonThumbnail,
  IonProgressBar,
  IonReorderGroup,
  IonReorder,
  IonIcon,
  IonFab,
  IonFabButton,
  IonSkeletonText,
  IonSelect,
  IonSelectOption,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonButton,
} from "@ionic/vue";
import { chevronForwardOutline, arrowForwardOutline } from "ionicons/icons";
import type { ReorderEventDetail } from "@ionic/core";
import score from "@/components/Header/Header.vue";
import router from "@/router/index";
import { useUserStore, useTeamStore, usePlaybookStore } from "@/store";
const userStore = useUserStore();
const teamStore = useTeamStore();
const playbookStore = usePlaybookStore();
const loading = ref(false);
const selectedFilter = ref("all");
const getSelectedFilterExericse = (value: any) => {
  if (value.detail.value) {
    playbookStore.filteredExercises(value.detail.value);
  }
};
const handleScrollStart = () => {
  // console.log('scroll start');
};

const handleScroll = (ev: CustomEvent) => {
  // console.log('scroll', JSON.stringify(ev.detail));
};
const handleScrollEnd = () => {
  playbookStore.getSuggestedExercises();
};
onMounted(async () => {
  await Promise.all([
    // teamStore.getTeams(),
    // userStore.getUserSettings(),
    playbookStore.getPlaybook(),
    playbookStore.getExercises(),
    playbookStore.getTeamExerciseScores(),
  ]);
  loading.value = true;
  console.log("hwew iw adil ", teamStore.teams.get(userStore.teamID)?.members);
});
</script>

<style scoped>
ion-card-title {
  color: var(--Color-Brand-black, #000);

  /* mobile/Title small */
  font-family: Cabin;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  /* 142.857% */
  letter-spacing: 0.1px;
  width: 90%;
}

ion-label {
  font-size: 1rem;

  /* Space between title and progress bar */
}

.page-heading {
  color: var(--Neutrals-black, #303030);
  font-size: 22px;
  /* Keep the font size as is unless it needs to change */
  font-weight: 500;
  /* Keep the font weight as is */
  line-height: 28px;
  /* Keep the line height as is */
  text-align: left;
  /* Align to the left, right or center as per your design */
  margin-top: 0px;
  margin-bottom: 0px;
}

.addStyle {
  margin-bottom: 40px;
  margin: 10px;
}

.owner-container {
  display: flex;
  /* align-items: center; */
  margin-top: 0px;
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

.completed {
  color: var(--ion-color-primary);
}

ion-avatar {
  --border-radius: 50%;
  --size: 50px;
  /* Adjust the size of the avatar */
  width: 20px;
  height: 20px;
}

/* Additional styling for avatar image if needed */
ion-avatar img {
  border-radius: 50%;
}

.select-option {
  width: 100%;
  max-width: 100%;
  /* Adjust the width as needed */
  min-height: 32px;
  /* background: var(--my-masg-background); */
  --placeholder-opacity: 1;
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 8px;
  --border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  word-wrap: break-word;
  box-shadow: 0px 1px 2px 0px rgba(51, 51, 51, 0.3);
}

ion-grid {
  padding-top: 20px;
}

/* new css */

ion-title {
  color: var(--Neutrals-black, #303030);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: justify;
}

ion-card {
  width: auto;
  margin-right: -20px;
  margin-left: -5px;
  margin-top: -8px;
  box-shadow: none;
  background: #aed351;
}

/* ion-button {
  --background: transparent;
} */
ion-progress-bar {
  left: 15px;
  margin-bottom: 15px;
}

.ion-text-end {
  color: rgba(119, 85, 119, 0.34);
  font-size: 12px;
  margin-top: -26px;
}

.ion-color {
  color: #f2f2f2;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 20px;
}

.card-style {
  background: white;
  margin: 20px 0px 20px 0px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.icon-color {
  top: 15px;
  width: 24px;
  height: 24px;
  color: #2c3ad180;
}

.progress-bar {
  display: flex;
  width: 90%;
  height: 4px;
  padding-right: 149px;
  align-items: center;
  border-radius: 24px;
  --progress-background: #a5ce3e;
  /* --buffer-background: transparent; */
  --progress-color: #e6e0e9;

  /* Adjust width as needed */
}

.button-custom {
  gap: 29px;
  bottom: 0;
  /* border:1px solid; */
  left: 0;
  width: 100%;
}

ion-button {
  --border-radius: 5px;
  --border-style: solid;
  --border-width: 1px;
  --background: transparent;
  /* border: 1px solid #a5ce3e; */
  color: #a5ce3e;
  color: var(--main-green, #a5ce3e);
  text-align: center;
  font-family: Cabin;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
  text-transform: uppercase;
}

.outer-padding {
  padding-top: 0px;
}
</style>

<template>
    <ion-page>
      <ion-header>
        <score />
      </ion-header>
      <ion-content :fullscreen="true" v-if="loading">
        <ion-grid>
          <ion-row>
            <ion-col>
              <h4 class="page-heading">Excercise Progress</h4>
            </ion-col>
            <ion-col size="auto">
              <div style="width: 70px">
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
  
        <ion-reorder-group
          @ionItemReorder="doReorder"
          :disabled="false"
          v-if="Object.entries(playbookStore?.filteredExercises(selectedFilter) || {}).length > 0"
        >
            <ion-card
            v-for="[key, exercise] in Object.entries(playbookStore?.filteredExercises(selectedFilter))"
              :key="exercise.id"
              @click="
                () =>
                  router.push({
                    name: 'exercise',
                    params: { exerciseid: key },
                  })
              "
              class="practice-card"
            >
              <div class="card-content">
                <ion-reorder slot="end">
                  <img
                    src="/src/pictures/threeDot.svg"
                    class="drag-handle-icon"
                  />
                </ion-reorder>
  
                <div class="title-progress-container">
                  <ion-label>
                    {{ exercise.play_title }}
                  </ion-label>
                  <div class="owner-container">
                    <ion-avatar>
                      <img src="/src/pictures/Ellipse 72.svg" />
                    </ion-avatar>
                    <h3>
                      Owner:  {{
                        playbookStore.responsiblePersonName(userStore.teamID,exercise.responsible)
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
                  <!-- todo need to consider again -->
                  <ion-progress-bar
                    :buffer="1.0"
                    color="success"
                    class="progress-bar"
                    :value="
                      playbookStore.teamExerciseScore(userStore.teamID, exercise.id) / 10
                    "
                  ></ion-progress-bar>
                </div>
                <ion-icon
                  :icon="chevronForwardOutline"
                  slot="end"
                  class="arrow-icon"
                />
              </div>
            </ion-card>
         
        </ion-reorder-group>
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
      <ion-content :fullscreen="true" v-if="!loading">
        <h4 class="titleStyle">
          <ion-skeleton-text
            :animated="true"
            style="width: 100px"
          ></ion-skeleton-text>
        </h4>
        <ion-reorder-group @ionItemReorder="doReorder" :disabled="false">
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
        </ion-reorder-group>
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
    IonAvatar
  } from "@ionic/vue";
  import { chevronForwardOutline, add } from "ionicons/icons";
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
      console.log(value.detail.value);
      playbookStore.filteredExercises(value.detail.value)
    }
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
    console.log(teamStore.teams.get(userStore.teamID)?.members)
  });
  const practiceItems = ref([
    {
      title: "Communication",
      imgSrc: "/src/pictures/Illustration 6.svg",
      progress: 0.5,
    },
    {
      title: "Celebrate and Collaborate",
      imgSrc: "/src/pictures/Illustration 7.svg",
      progress: 0.3,
    },
    {
      title: "Effective Feedback",
      imgSrc: "/src/pictures/Illustration 5.svg",
      progress: 0.7,
    },
    {
      title: "Active Listening",
      imgSrc: "/src/pictures/Illustration 4.svg",
      progress: 0.2,
    },
    // ... other items
  ]);
  
  const doReorder = (event: CustomEvent<ReorderEventDetail>) => {
    const fromIndex = event.detail.from;
    const toIndex = event.detail.to;
    practiceItems.value.splice(
      toIndex,
      0,
      practiceItems.value.splice(fromIndex, 1)[0]
    );
    event.detail.complete();
  };
  </script>
  
  <style scoped>
  .practice-card {
    margin-bottom: 8px;
    --ion-item-background: transparent;
    --background: transparent;
    box-shadow: none;
    /* Remove shadow if present */
    display: flex;
    flex-direction: column;
    padding: 0px 0px 4px 0px;
  }
  
  .card-content {
    display: flex;
    align-items: center;
    padding: 16px;
    /* Add padding if needed */
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  
  .title-progress-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
  
  ion-label {
    font-size: 1rem;
  
    /* Space between title and progress bar */
  }
  
  .progress-bar {
    --progress-background: #e6e0e9;
    /* --buffer-background: transparent; */
    --progress-color: #a5ce3e;
    width: 60%;
    margin-bottom: 15px;
  
    /* Adjust width as needed */
  }
  
  .arrow-icon {
    font-size: 1.5em;
    margin-left: auto;
    color: #303030;
    /* Ensures the arrow icon is aligned to the right */
  }
  
  ion-thumbnail {
    --border-radius: 0;
    --size: 55px;
    /* Adjust the size based on your design */
    margin-right: 8px;
    width: 105px;
    height: 60px;
    /* Spacing between image and title */
  }
  
  ion-reorder {
    color: var(--ion-color-medium);
  }
  
  .drag-handle-icon {
    width: 15px;
    height: 20px;
    margin-right: 10px;
  }
  
  .contentHeader {
    color: var(--Neutrals-black, #303030);
    /* Title Large */
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    /* 127.273% */
  }
  
  .titleStyle {
    color: var(--Neutrals-black, #303030);
    font-size: 22px;
    /* Keep the font size as is unless it needs to change */
    font-weight: 500;
    /* Keep the font weight as is */
    line-height: 28px;
    /* Keep the line height as is */
    text-align: left;
    /* Align to the left, right or center as per your design */
    margin-top: 25px;
    margin-bottom: -20px;
    padding-left: 15px;
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
  
  .practiceBox {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  .addStyle {
    margin-bottom: 40px;
    margin: 10px;
  }
  .owner-container {
    display: flex;
    align-items: center;
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
  .completed {
    color: var(--ion-color-primary);
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
  
  .select-option {
    width: 100%;
    max-width: 100%; /* Adjust the width as needed */
    min-height: 32px;
    background: var(--my-masg-background);
    --placeholder-opacity: 1;
    --padding-start: 10px;
    --padding-end: 10px;
    border-radius: 8px;
    --border: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.15px;
    word-wrap: break-word;
  }
  ion-grid {
    padding-top: 20px;
  }
  </style>
  
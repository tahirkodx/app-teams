<template>
  <ion-page>
    <ion-header>
      <score />
    </ion-header>
    <ion-content :fullscreen="true" v-if="loading">
      <ion-grid>
        <ion-row>
          <ion-col>
            <h4 class="page-heading">Suggested Excercises</h4>
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
        <ion-row>
          <ion-col>
            <ion-searchbar placeholder="Search here" class="custom-searchbar">
            </ion-searchbar>
          </ion-col>
        </ion-row>
        <!-- <ion-row>
          <ion-col></ion-col>
          <ion-col size="auto">
            <ion-button
              id="trigger-button"
              class="compact-filter-chip"
              style="--background: white"
            >
              <ion-icon :icon="optionsOutline" class="icon"></ion-icon>
              <span class="text">Filters</span>
            </ion-button>
            <ion-popover trigger="trigger-button">
              <ion-accordion-group>
                <ion-accordion value="first">
                  <ion-item slot="header" color="light">
                    <ion-label class="ion-color">Academy Status</ion-label>
                  </ion-item>
                  <div slot="content">
                    <ion-list>
                      <ion-item>
                        <ion-checkbox
                          label-placement="end"
                          justify="start"
                          aria-label="Label"
                          @ionChange="handleCheckboxChange('all')"
                          >All</ion-checkbox
                        >
                      </ion-item>
                      <ion-item>
                        <ion-checkbox
                          label-placement="end"
                          justify="start"
                          aria-label="Label"
                          @ionChange="handleCheckboxChange('completed')"
                          >Completed</ion-checkbox
                        >
                      </ion-item>
                      <ion-item>
                        <ion-checkbox
                          label-placement="end"
                          justify="start"
                          aria-label="Label"
                          @ionChange="handleCheckboxChange('started')"
                          >Started</ion-checkbox
                        >
                      </ion-item>
                      <ion-item>
                        <ion-checkbox
                          label-placement="end"
                          justify="start"
                          aria-label="Label"
                          @ionChange="handleCheckboxChange('notstarted')"
                          >Not Started</ion-checkbox
                        >
                      </ion-item>
                    </ion-list>
                  </div>
                </ion-accordion>
                <ion-accordion value="second">
                  <ion-item slot="header" color="light">
                    <ion-label class="ion-color">Duration</ion-label>
                  </ion-item>
                  <div slot="content">
                    <ion-list>
                      <ion-item>
                        <ion-checkbox
                          label-placement="end"
                          justify="start"
                          aria-label="Label"
                          @ionChange="handleCheckboxChange('all')"
                          >All</ion-checkbox
                        >
                      </ion-item>
                      <ion-item>
                        <ion-checkbox
                          label-placement="end"
                          justify="start"
                          aria-label="Label"
                          @ionChange="handleCheckboxChange(120)"
                          >15 Mins</ion-checkbox
                        >
                      </ion-item>
                      <ion-item>
                        <ion-checkbox
                          label-placement="end"
                          justify="start"
                          aria-label="Label"
                          @ionChange="handleCheckboxChange(120)"
                          >30 Mins</ion-checkbox
                        >
                      </ion-item>
                      <ion-item>
                        <ion-checkbox
                          label-placement="end"
                          justify="start"
                          aria-label="Label"
                          @ionChange="handleCheckboxChange(60)"
                          >1 hour above
                        </ion-checkbox>
                      </ion-item>
                    </ion-list>
                  </div>
                </ion-accordion>
              </ion-accordion-group>
            </ion-popover>
          </ion-col>
        </ion-row> -->
      </ion-grid>
      <ion-grid class="ion-padding .outer-padding">
        <ion-row class="ion-no-padding">
          <ion-col class="ion-no-padding">
            <ion-card
              class="card-style"
              v-for="[key, exercise] in playbookStore.suggestedExercises"
              :key="key"
            >
              <ion-card-header>
                <ion-card-title>Exercise Topic</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet
                aenean id.
              </ion-card-content>
              <ion-text class="icon-color ion-icon-color"
                ><ion-icon
                  :icon="arrowForwardOutline"
                  class="icon-color"
                ></ion-icon
              ></ion-text>
            </ion-card>
          </ion-col>
        </ion-row>
        <!-- <ion-row class="ion-no-padding">
          <ion-col class="ion-no-padding">
            <ion-button
              expand="block"
              class="button-custom"
              @click="() => router.push({ name: 'exerciseSearch' })"
              >SEARCH OTHERS</ion-button
            >
            <div>
                <ion-button
                  class="button-custom"
                  expand="full"
                  fill="outline"
                  router-link="/#"
                  >SEARCH OTHERS</ion-button
                >
              </div>
          </ion-col>
        </ion-row> -->
      </ion-grid>

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
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonPage,
  IonHeader,
  IonContent,
  IonIcon,
  IonFab,
  IonFabButton,
  IonList,
  IonLabel,
  IonPopover,
  IonItem,
  IonAccordionGroup,
  IonAccordion,
} from "@ionic/vue";
import { optionsOutline, arrowForwardOutline } from "ionicons/icons";
import type { ReorderEventDetail } from "@ionic/core";
import score from "@/components/Header/Header.vue";
import router from "@/router/index";
import { useUserStore, useTeamStore, usePlaybookStore } from "@/store";
const userStore = useUserStore();
const teamStore = useTeamStore();
const playbookStore = usePlaybookStore();
const loading = ref(false);
const selectedFilter = ref("all");
const handleCheckboxChange = (key: any) => {
  const isChecked = event?.detail.checked;
};
const getSelectedFilterExericse = (value: any) => {
  if (value.detail.value) {
    console.log("Her eis aild ");
    console.log(value.detail.value);
    playbookStore.filteredExercises(value.detail.value);
  }
};
onMounted(async () => {
  await Promise.all([
    // teamStore.getTeams(),
    // userStore.getUserSettings(),
  ]);
  loading.value = true;
  console.log(teamStore.teams.get(userStore.teamID)?.members);
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
  line-height: 20px; /* 142.857% */
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

.ion-icon-color {
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

.button-custom {
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
/* NEW DATA  */

ion-button {
  --color: #yourColor;
}

.ion-color {
  color: gray;
  font-weight: bold;
}

.compact-filter-chip {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  float: inline-end;
  width: 107px;
  height: 32px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(51, 51, 51, 0.3);
  border-radius: 5px;
  border: 0px solid #8b8b8b;
  flex: none;
  order: 1;
  flex-grow: 0;
}

.compact-filter-chip:hover {
  background: #f0f0f0;
  /* Change the background on hover */
}

.outer-padding {
  padding-top: 0px;
}
</style>

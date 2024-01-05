<template>
  <!--div v-show="userStore.settings.showScores"-->
  <ion-grid>
    <ion-row>
      <ion-col size="2">
        <ion-icon size="large" :icon="people" class="toolbar-icon"></ion-icon>
      </ion-col>
      <ion-col size="8">
        <div class="title-select-container">
          <!-- {{ headerTitle }} -->
          
          <ion-select  
                v-model="teamSelected"
                interface="action-sheet"
                @ion-change="changeTeam"
                  class="header-select">
                 <div v-for="(id_team_tuple, index) in teamStore.teams.value" v-bind:key="index">
                  <ion-select-option :value="id_team_tuple[0]">{{
                    id_team_tuple[1].name
                  }}</ion-select-option>
                </div>
          </ion-select>
        </div>
      </ion-col>
      <ion-col size="2">
        <ion-icon size="medium" :icon="personCircleOutline" class="toolbar-icon"></ion-icon>
        <ion-button>
            <ion-toggle :checked="themeToggle" @ionChange="toggleChange($event)" justify="space-between"
            ></ion-toggle
          >
          </ion-button>
        
        <!-- <ion-icon
          :icon="menuOutline"
          @click="() => router.push({ name: 'settings' })"
          size="large"
        ></ion-icon> -->
      </ion-col>
    </ion-row>
    <div
      v-show="
        teamStore.isTeamlead(teamID, userStore.user) &&
        statusStore.teamHasDimScores
      "
    >
      <ion-row>
        <ion-col id="level-indicator">
          <div style="float: left">
            <ion-icon :icon="prismOutline" size="large"></ion-icon>
          </div>
          <div style="font-size: 20px; float: left">
            <div>
              Level {{ Math.floor(statusStore.teamCurrentScore(teamID) / 10) }}
            </div>
            <ion-progress-bar
              style="width: 100%"
              :buffer="1"
              :value="
                statusStore.teamCurrentScore(teamID) / 10 -
                Math.floor(statusStore.teamCurrentScore(teamID) / 10)
              "
            />
          </div>
          <ion-popover trigger="level-indicator" trigger-action="click">
            <ion-content class="ion-padding"
              >Indication of team level and progress bar to next
              level</ion-content
            >
          </ion-popover>
        </ion-col>

        <ion-col
          id="growth-indicator"
          size="auto"
          v-show="statusStore.teamActiveScoreGrowth(teamID)"
        >
          <div style="float: left">
            <ion-icon :icon="arrowUpCircleOutline" size="large"></ion-icon>
          </div>
          <div style="float: left; width: auto" :class="{ pump: animate }">
            <div style="font-size: 20px; width: 100%; text-align: center">
              {{
                Math.round(
                  statusStore.teamActiveScoreGrowth(teamID)
                    ? statusStore.teamActiveScoreGrowth(teamID)
                    : 0
                )
              }}%
            </div>
          </div>
          <ion-popover trigger="growth-indicator" trigger-action="click">
            <ion-content class="ion-padding"
              >Score growth with respect to previous survey</ion-content
            >
          </ion-popover>
        </ion-col>

        <ion-col id="rank-indicator">
          <div style="float: left; width: auto">
            <ion-icon
              :icon="cellularOutline"
              size="large"
              style="transform: rotate(90deg)"
            ></ion-icon>
          </div>
          <div style="float: left">
            <div style="font-size: 20px; width: 100%; text-align: center">
              Top
              {{ Math.max(Math.round(statusStore.teamActiveRank(teamID)), 1) }}%
            </div>
          </div>
          <ion-popover trigger="rank-indicator" trigger-action="click">
            <ion-content class="ion-padding"
              >Rank with respect to all other teams</ion-content
            >
          </ion-popover>
        </ion-col>
      </ion-row>
    </div>
  </ion-grid>

  <!--ion-item v-show="surveysStore.activeSurveys.length > 0" @click="() => router.push({name: 'surveys'})">
        <ion-badge slot="start">{{ surveysStore.activeSurveys.length }}</ion-badge>
        <ion-label>Open surveys</ion-label>
    </ion-item-->
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import {
  IonTitle,
  IonIcon,
  IonProgressBar,
  IonSelect,
  IonSelectOption,
  IonPopover,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import {
  arrowUpCircleOutline,
  prismOutline,
  menuOutline,
  cellularOutline,
  personCircleOutline,
  people
} from "ionicons/icons";
import router from "@/router/index";
import { useUserStore } from "@/stores/user";
import { useStatusStore } from "@/stores/status";
import { useTeamStore } from "@/stores/teams";
import { fetchCurrent, teamID, team } from "@/stores/current";
import type { ToggleCustomEvent } from '@ionic/vue';
const userStore = useUserStore();
const teamStore = useTeamStore();
const statusStore = useStatusStore();

await Promise.all([
  userStore.fetch(),
  statusStore.fetch(),
  teamStore.fetch(),
  fetchCurrent(),
]);
const buffer = 1.0;

const teamSelected = ref(teamID.value);
console.log(teamSelected.value);

function changeTeam() {
  if (teamSelected.value == "add") {
    router.push({ name: "addteam" });
  } else {
    userStore.settings.update_value("last_team_used", teamSelected.value);
  }
}
const themeToggle = ref(false);
  const toggleDarkTheme = (shouldAdd) => {
          document.body.classList.toggle('dark', shouldAdd);
        };
  const toggleChange = (ev: ToggleCustomEvent) => {
          toggleDarkTheme(ev.detail.checked);
        };
        
        // const message = inject('message')
  // const iconHedaer = ref(people)
  // const headerTitle = inject('headerIcon');
  // if(headerTitle === 'Team'){
  //   iconHedaer.value = people
  // }else if (headerTitle === 'Team'){
    
  // }
const animate = ref(false);
function animateIncrease() {
  animate.value = true;
  setTimeout(() => {
    animate.value = false;
  }, 820);
}
</script>

<style scoped>
.pump {
  animation: pump 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

@keyframes pump {
  50% {
    transform: scale(1.4, 1.4);
  }
}
ion-grid{
  background: var(--my-masg-background);
}
.custom-toolbar {
    --min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .title-select-container {
    flex: 1;
    display: inline-grid;
    justify-content: center;
  }
  
  .header-select {
    width: 127px;
    max-width: 127px; /* Adjust the width as needed */
    min-height:32px;
    background: var(--my-masg-background);
    --placeholder-opacity: 1;
    --padding-start: 10px;
    --padding-end: 10px;
    border-radius: 8px;
    --border: none;
   font-size: 16px;
   font-family: 'Cabin', sans-serif;
   font-weight: 700;
   line-height: 24px;
   letter-spacing: 0.15px;
   word-wrap: break-word;
  }
  
  ion-select::part(placeholder) {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  ion-select::part(icon) {
    margin-end: 0; /* Align the dropdown icon to the right */
  }
  
  .toolbar-icon {
    font-size: 24px;
  }
  ion-button {
    --background: transparent;
    --background-activated: transparent;
    --background-hover: transparent;
    --ripple-color: transparent;
  }
  .startIcon{
    padding-right: 10px;
  }
  .endIcon{
    /* padding-right: 22px; */
  }
</style>

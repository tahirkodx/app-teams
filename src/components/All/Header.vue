<template>
  <!--div v-show="userStore.settings.showScores"-->
  <ion-grid>
    <ion-row>
      <ion-col size="10">
        <ion-title>
          <ion-select
            v-model="teamSelected"
            interface="action-sheet"
            @ion-change="changeTeam"
          >
            <div v-for="(id_team_tuple, index) in teamStore.teams.value" v-bind:key="index">
              <ion-select-option :value="id_team_tuple[0]">{{
                id_team_tuple[1].name
              }}</ion-select-option>
            </div>
          </ion-select>
        </ion-title>
      </ion-col>
      <ion-col size="2">
        <ion-icon
          :icon="menuOutline"
          @click="() => router.push({ name: 'settings' })"
          size="large"
        ></ion-icon>
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
} from "ionicons/icons";
import router from "@/router/index";
import { useUserStore } from "@/stores/user";
import { useStatusStore } from "@/stores/status";
import { useTeamStore } from "@/stores/teams";
import { fetchCurrent, teamID, team } from "@/stores/current";

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
</style>

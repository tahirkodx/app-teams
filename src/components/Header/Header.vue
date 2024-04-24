<template>
  <!--div v-show="userStore.settings.showScores"-->
  <ion-header>
    <ion-toolbar class="custom-toolbar">
      <ion-buttons class="startIcon" slot="start">
        <ion-button>
          <ion-icon
            icon="/src/pictures/setting.svg"
            class="toolbar-icon"
          ></ion-icon>
        </ion-button>
      </ion-buttons>

      <div class="title-select-container" v-if="teamStore.teams">
        <!-- {{ headerTitle }} -->

        <ion-select
          v-model="teamSelected"
          interface="action-sheet"
          @ion-change="changeTeam"
          placeholder="Team dep..."
          class="header-select"
        >
          <div v-for="[id, team] in Array.from(teamStore.teams)" :key="id">
            <ion-select-option :value="id">{{ team.name }}</ion-select-option>
          </div>
        </ion-select>
      </div>

      <ion-buttons class="endIcon" slot="end">
        <ion-button>
          <ion-icon
            icon="/src/pictures/chat.svg"
            class="toolbar-icon"
          ></ion-icon>
        </ion-button>
        <ion-button @click="navigateFunction">
          <ion-icon icon="/src/pictures/survey.svg" class="toolbar-icon" />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { ref, watchEffect, onMounted } from "vue";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonToggle,
} from "@ionic/vue";
import {
  people,
  personCircleSharp,
  personCircleOutline,
  documentTextOutline,
  settingsOutline,
} from "ionicons/icons";
import type { ToggleCustomEvent } from "@ionic/vue";
import { useTeamStore, useUserStore } from "@/store";
const userStore = useUserStore();
const teamStore = useTeamStore();
const themeToggle = ref(false);
const teamSelected = ref();
onMounted(async () => {
  if (teamStore.teams === null) {
    await Promise.all([
      userStore.getUserSettings(),
      teamStore.getTeams(), 
    ]);
  }
});
import router from "@/router/index";
const toggleDarkTheme = (shouldAdd) => {
  document.body.classList.toggle("dark", shouldAdd);
};
const toggleChange = (ev: ToggleCustomEvent) => {
  toggleDarkTheme(ev.detail.checked);
};
const buffer = 1.0;

console.log(teamSelected.value);
watchEffect(() => {
  if (userStore.teamID) {
    teamSelected.value = userStore.teamID;
  }
});
const changeTeam = (value: any) => {
  console.log(userStore.userID);

  if (value.detail.value) {
    userStore.update_value(
      "last_team_used",
      value.detail.value,
      userStore.userID
    );
  }
};
const navigateFunction = () => {
  router.push({ name: "surveys" });
};
const animate = ref(false);
function animateIncrease() {
  animate.value = true;
  setTimeout(() => {
    animate.value = false;
  }, 820);
}
</script>

<style scoped>
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
  max-width: 127px;
  /* Adjust the width as needed */
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

ion-select::part(placeholder) {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

ion-select::part(icon) {
  margin-end: 0;
  /* Align the dropdown icon to the right */
}

.toolbar-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

ion-button {
  --background: transparent;
  --background-activated: transparent;
  --background-hover: transparent;
  --ripple-color: transparent;
}

.startIcon {
  padding-right: 10px;
}

.endIcon {
  /* padding-right: 22px; */
}
</style>

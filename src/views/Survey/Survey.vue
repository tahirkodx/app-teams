<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="navigateFunction">
            <ion-icon :icon="arrowBackOutline"></ion-icon>
          </ion-button>
        </ion-buttons>

        <ion-buttons class="endIcon" slot="end">
          <ion-button>
            <!-- <ion-badge color="primary">22k</ion-badge> -->
            <ion-icon :icon="documentTextOutline" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <IonGrid>
        <IonRow>
          <ion-col>
            <h4 class="titleStyle">Survey</h4>
          </ion-col>
          <ion-button
            id="trigger-button"
            class="compact-filter-chip"
            style="--background: white"
          >
            <ion-icon :icon="optionsOutline" class="icon"></ion-icon>
            <span class="text">Team ({{ selectedTeams.length }})</span>
          </ion-button>
          <ion-popover trigger="trigger-button">
            <ion-content>
              <ion-accordion-group>
                <ion-accordion value="first">
                  <ion-item slot="header" color="light">
                    <ion-label class="ion-color">Teams</ion-label>
                  </ion-item>
                  <div slot="content">
                    <ion-list>
                      <ion-item
                        v-for="[id, team] in Array.from(teamStore.teams)"
                        :key="id"
                      >
                        <ion-checkbox
                          label-placement="end"
                          justify="start"
                          aria-label="Label"
                          :checked="selectedTeams.includes(id)"
                          @ionChange="handleCheckboxChange(id)"
                          >{{ team.name }}</ion-checkbox
                        >
                      </ion-item>
                    </ion-list>
                  </div>
                </ion-accordion>
                <ion-accordion value="second">
                  <ion-item slot="header" color="light">
                    <ion-label class="ion-color">Dates</ion-label>
                  </ion-item>
                  <div slot="content">
                    <ion-radio-group v-model="selectedOption">
                      <ion-item
                        ><ion-radio value="Today"></ion-radio>
                        <ion-label class="ion-text">Today</ion-label>
                      </ion-item>
                      <ion-item>
                        <ion-label>
                          <ion-radio value="Text">Data</ion-radio>
                          <!-- <ion-datetime-button
                            datetime="datetime"
                            class="ion-date"
                          ></ion-datetime-button>
                          <ion-modal :keep-contents-mounted="true">
                            <ion-datetime
                              presentation="date"
                              id="datetime"
                              display-format="DD MMM YYYY"
                            >
                            </ion-datetime>
                          </ion-modal> -->
                        </ion-label>
                      </ion-item>
                    </ion-radio-group>
                  </div>
                </ion-accordion>
              </ion-accordion-group>
            </ion-content>
          </ion-popover>
        </IonRow>
      </IonGrid>
      <!-- todo need to get team id is here -->
      <ion-card
        v-for="[id, survey] in statusStore.requests"
        :key="id"
        class="ion-margin-vertical"
        @click="
          () => router.push({ name: 'survey', params: { surveyid: survey.id } })
        "
      >
        <IonGrid :fixed="true">
          <ion-route url="/tutorial" component="page-tutorial"></ion-route>
          <IonRow>
            <IonCol>
              <ion-card-header>
                <ion-card-title class="ion-text-capitalize">{{
                  teamStore?.teams?.get(userStore.teamID)?.name
                }}</ion-card-title>
              </ion-card-header>
              <ion-card-content
                class="ion-flex ion-align-items-center ion-justify-content-between"
              >
                <span class="ion-text-capitalize">
                  <ion-chip v-if="survey.responded" class="chip-complete">
                    <ion-label>Completed</ion-label>
                  </ion-chip>
                  <ion-chip
                    v-else-if="survey.responded === false"
                    class="chip-pending"
                  >
                    <ion-label>Missed</ion-label>
                  </ion-chip>
                  <span v-else>
                    <ion-chip class="chip-upcoming">
                      <ion-label>Upcoming</ion-label>
                    </ion-chip>
                  </span>
                  <!-- Completed: responded is true
                pending: responded is null or false, end < now, start > now
                upcoming:  start < now
                missed: end > now, responded is null or false -->
                </span>
              </ion-card-content>
            </IonCol>
            <IonCol class="dateStyle" size="auto">
              <span>
                <ion-label>
                  {{ DateFormate(survey.start) }}
                </ion-label>
              </span>
            </IonCol>
          </IonRow>
        </IonGrid>
      </ion-card>

      <ion-fab
        class="addStyle"
        slot="fixed"
        horizontal="end"
        vertical="bottom"
        @click="() => router.push({ name: 'addteam' })"
      >
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonChip,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonButton,
  IonIcon,
  IonItem,
  IonList,
  IonPopover,
  IonFab,
  IonAccordion,
  IonAccordionGroup,
  IonCheckbox,
  IonRadio,
  IonRadioGroup,
  IonModal,
  IonDatetime,
  IonDatetimeButton,
  IonFabButton,
} from "@ionic/vue";
import { ref, defineComponent, onMounted } from "vue";
import {
  arrowBackOutline,
  documentTextOutline,
  add,
  optionsOutline,
} from "ionicons/icons";
import score from "@/components/Header/Header.vue";
import { DateFormate } from "@/utils/Helper";
import router from "@/router/index";
import { useUserStore, useStatusStore, useTeamStore } from "@/store";

const statusStore = useStatusStore();
const teamStore = useTeamStore();
console.log("🚀 ~ teamStore:", statusStore);
const userStore = useUserStore();
const selectedTeams: any = ref([]);
onMounted(async () => {
  await Promise.all([
    teamStore.getTeams(),
    statusStore.getDimensions(),
    statusStore.getQuestionNaire(),
    statusStore.getSchedulers(),
    statusStore.getRequests(),
  ]);
});
const handleCheckboxChange = (teamId: any) => {
  const index = selectedTeams.value.indexOf(teamId);
  if (index >= 0) {
    selectedTeams.value.splice(index, 1);
  } else {
    selectedTeams.value.push(teamId);
  }
  console.log(selectedTeams.value);
};
const getChipClass = (type: string, date: string) => {
  switch (type) {
    case "Pending":
      return "chip-pending";
    case "Complete":
      return "chip-complete";
    case "Upcoming":
      return "chip-upcoming";
    default:
      return ""; // Default case if none of the types match
  }
};

const navigateFunction = () => {
  router.push({ name: "team" });
};
const accordionGroupChange = (event: any) => {
  console.log("Accordion group change event:", event);
  // Add your logic here if needed
};
const isDropdownOpen = ref(false);
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  isDropdownOpen.value = true;
};
const selectedOption = ref("");
</script>

<style scoped>
ion-header {
  --background: #yourColor;
  /* Replace with your header background color */
}

ion-button {
  --color: #yourColor;
  /* Replace with your icon color */
}

ion-toolbar {
  --background: #fff;
  /* Adjust if needed */
}

ion-title {
  color: #222;
  /* Adjust if needed */
}

ion-card {
  border-radius: 5px;
  --background: #fafafa;
  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */
  /* Light grey background */
}

ion-card-title {
  font-size: 1.2em;
  /* Large font size for card title */
  font-weight: bold;
  color: #222;

  /* Adjust if needed */
}

.date-label {
  font-weight: bold;
  color: #555;
  /* Date label color */
}

ion-chip {
  --color: #fff;
  /* White text on chip */
  --background: #ffac5f;
  text-align: center;
  margin-left: 0px;
  /* Body small */
  font-family: "Cabin", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  /* 133.333% */
  /* Use your primary color here */
}

.iocChip {
  color: #000;
}

ion-chip[color="secondary"] {
  --background: #5bc0de;

  /* Use your secondary color here */
}

.titleStyle {
  color: var(--Neutrals-black, #303030);

  font-family: "Cabin", sans-serif;

  font-size: 22px;
  font-weight: 500;
  line-height: 28px;
  text-align: left;
  margin-top: 10px;
  padding-left: 16px;

  font-style: normal;
}

.ion-text-capitalize {
  color: #000;
  /* Body medium */
  font-family: "Cabin", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  /* 142.857% */
  letter-spacing: 0.25px;
  margin-top: -25px;
  margin-bottom: -12px;
  margin-left: -5px;
}

.chevron-icon {
  font-size: 1.5em;
  /* Adjust size as necessary */
  color: #303030;
  /* Adjust color as necessary */
  margin-top: 30px;
  /* Space it from the date chip */
}

.addStyle {
  margin-bottom: 40px;
  margin: 10px;
}

.dateStyle {
  margin-top: 10px;
}

.chip-pending {
  --background: #ff8512;
  /* Orange color for Pending */
}

.chip-complete {
  --background: #a5ce3e;
  /* Green color for Complete */
}

.chip-upcoming {
  --background: #cccccccc;
  /* Grey color for Upcoming */
  color: #4d4d4d;
}

/* ... rest of your styles ... */

/* Add any additional custom styles needed to match your screenshot */

/* new css */
.ion-color {
  color: gray;
  font-weight: bold;
}

.ion-text {
  margin-left: 15px;
  font-size: large;
}

.ion-date {
  margin-right: 40px;
  margin-top: -34px;
}

.ion-border {
  --border-radius: 5px;
  margin-right: 10px;
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
  margin-right: 23px;
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
</style>

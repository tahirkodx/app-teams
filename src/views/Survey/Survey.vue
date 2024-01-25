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
            <ion-icon :icon="documentTextOutline" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-toolbar>
        <h4 class="titleStyle">Survery</h4>
        <ion-buttons slot="end">
          <ion-chip class="iocChip" id="popover-button" outline>
            <ion-icon size="large" src="/src/pictures/mi_filter.svg"></ion-icon>
            <ion-button id="popover-button">Teams</ion-button>
            <ion-popover trigger="popover-button" :dismiss-on-select="true">
              <ion-content>
                <ion-list>
                  <ion-accordion-group :multiple="false" :value="[]">
                    <ion-accordion value="first">
                      <ion-item slot="header" color="light">
                        <ion-label>Teams</ion-label>
                      </ion-item>
                      <div class="ion-padding" slot="content">
                        First Content
                      </div>
                    </ion-accordion>
                    <ion-accordion value="second">
                      <ion-item slot="header" color="light">
                        <ion-label>Date</ion-label>
                      </ion-item>
                      <div class="ion-padding" slot="content">
                        Second Content
                      </div>
                    </ion-accordion>
                  </ion-accordion-group>
                </ion-list>
              </ion-content>
            </ion-popover>
          </ion-chip>
        </ion-buttons>
      </ion-toolbar>
      
        <ion-card
        v-for="[id , survey] in statusStore.requests" :key="id"
        class="ion-margin-vertical"
        @click="
              () =>
              router.push({
                name: 'surveyQuestion',
              })"
      >
      <IonGrid :fixed="true">
        <IonRow>
          <IonCol>
            <ion-card-header>
              <ion-card-title class="ion-text-capitalize">{{
                  teamStore?.teams?.get(userStore.teamID).name 
              }}</ion-card-title>
              </ion-card-header>
              <ion-card-content
              class="ion-flex ion-align-items-center ion-justify-content-between"
              >
              <span class="ion-text-capitalize">
                <ion-chip v-if="survey.responded" class="chip-complete">
                  <ion-label>Completed</ion-label>
                </ion-chip>
                <ion-chip v-else class="chip-pending">
                  <ion-label>Pending</ion-label>
                </ion-chip>
                <!-- <ion-chip :class="getChipClass(survey.responded,survey.start)">
                  <ion-label>Test </ion-label>
                </ion-chip> -->
              </span>
            </ion-card-content>
          </IonCol>
          <IonCol class="dateStyle" size="auto">
            <span>
              <ion-label>
                 
                {{ DateFormate(survey.start)  }}
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
} from "@ionic/vue";
import { ref, defineComponent,onMounted } from "vue";
import { arrowBackOutline, documentTextOutline,add } from "ionicons/icons";
import score from "@/components/Header/Header.vue";
import { DateFormate } from "@/utils/Helper";
import router from "@/router/index";
import { useUserStore ,useStatusStore ,useTeamStore} from "@/store";


const statusStore = useStatusStore()
const teamStore = useTeamStore()
const userStore = useUserStore()
onMounted(async () => {
  await Promise.all([
    statusStore.getDimensions(),
    statusStore.getQuestionNaire(),
    statusStore.getSchedulers(),
    statusStore.getRequests(),
 ])
 console.log(statusStore.schedulers)
})
  
const getChipClass = (type: string, date : string) => {

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
</style>

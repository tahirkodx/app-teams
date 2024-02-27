<template>
  <ion-page>
    <Header />
    <ion-content :fullscreen="true">
      <IonGrid>
        <IonRow>
          <ion-col>
            <h4 class="titleStyle">Survey Scores</h4>
          </ion-col>
          <ion-button id="trigger-button"  class="text" style="--background: white">
            <ion-icon :icon="optionsOutline" class="icon"></ion-icon>
            <span class="text">10/06/24</span>
          </ion-button>
          <ion-popover trigger="trigger-button">
            <ion-content>
              <ion-accordion-group>
                <ion-accordion value="first">
                  <ion-item slot="header" color="light">
                    <ion-label class="ion-color" size="large">Teams</ion-label>
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
      <!-- Radar and line Chart component here -->
      <div>
        <Charts />
      </div>
      <!-- total bar -->
      <div class="score-section-average">
        <ion-grid>
          <ion-row class="score-row">
            <ion-col size="9" class="score-average"
              >Total Average Score</ion-col
            >
            <ion-col size="3" class="score-average">2/10</ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <div class="score-section-response">
        <ion-grid>
          <ion-row class="score-row">
            <ion-col size="9" class="score-responce">Total Response</ion-col>
            <ion-col size="3" class="score-responce">40%</ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <div class="divColor">
        <ion-grid>
          <ion-row>
            <ion-col size="12" class="ion-text-right">
              <ion-button fill="clear" class="navigation-button">
                <span class="icon-background">
                  <ion-icon :icon="chevronBack" slot="icon-only"></ion-icon>
                </span>
              </ion-button>
              <div class="resource-navigation">
                <ion-select
                  size="small"
                  interface="popover"
                  placeholder="All"
                  :toggle-icon="chevronUpOutline"
                  :expanded-icon="chevronDownOutline"
                >
                  <ion-select-option value="apples">Apples</ion-select-option>
                  <ion-select-option value="oranges">Oranges</ion-select-option>
                  <ion-select-option value="bananas">Bananas</ion-select-option>
                </ion-select>

                1/6
              </div>
              <ion-button fill="clear" class="navigation-button">
                <span class="icon-background">
                  <ion-icon :icon="chevronForward" slot="icon-only"></ion-icon>
                </span>
              </ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <div>
        <Tabs />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonItem,
  IonList,
  IonPopover,
  IonAccordion,
  IonAccordionGroup,
  IonCheckbox,
  IonRadio,
  IonRadioGroup,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import { ref, defineComponent, onMounted } from "vue";
import {
  chevronForward,
  chevronBack,
  optionsOutline,
  chevronUpOutline,
  chevronDownOutline,
} from "ionicons/icons";
import Charts from "@/components/Widgets/ChartSlider.vue";
import Header from "@/components/Header/Header.vue";
import Tabs from "@/components/TeamStatistic/TeamStatistic.vue";
import { DateFormate } from "@/utils/Helper";
import router from "@/router/index";
import { useUserStore, useStatusStore, useTeamStore } from "@/store";

const statusStore = useStatusStore();
const teamStore = useTeamStore();
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

const selectedSegment = ref("doingWell");

function segmentChanged(event: Event) {
  const detail = (event as CustomEvent).detail;
  if (detail.value) {
    selectedSegment.value = detail.value;
  }
}

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
const progress = ref(8);

const updateValue = (index: any, event: any) => {
  items.value[index].value = event.target.value;
};
const popoverOpen = ref(false);
const event = ref<Event | null>(null);
const openPopover = (e: Event) => {
  event.value = e;
  popoverOpen.value = true;
};
</script>

<style scoped>
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

.ion-color {
  color: gray;
  font-weight: bold;
}

.text {
  color: gray;
}

.ion-text {
  margin-left: 15px;
  font-size: large;
}

.score-section-average {
  background-color: #ff8512;
  padding: 0px 0px 0px 20px;
}

.score-section-response {
  background-color: #f7f7f7;
  padding: 0px 0px 0px 20px;
}

.score-row {
  --ion-grid-column-padding: 0;
}

.score-average {
  background-color: #ff8512;
  color: var(--white, #fff);
  font-size: 14px;
  letter-spacing: 0.1px;
}

.score-responce {
  background-color: #fff;
  color: var(--white, #ff8512);
  font-size: 14px;
  letter-spacing: 0.1px;
}

.ion-text-right {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navigation-button {
  --padding-start: 0;
  --padding-end: 0;
  --padding-top: 0;
  --padding-bottom: 0;
  margin: 0 5px;
}

.resource-navigation {
  display: inline-flex;
  margin: 0 10px;
  font-size: 0.9em;
  color: #666;
  align-items: center;
}

.icon-background {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--ion-color-primary);
  /* example background color */
  border-radius: 50%;
  /* circular background */
  width: 25px;
  /* size of the background */
  height: 25px;
  /* size of the background */
  color: #fff;
}

ion-select {
  color: #000000;
  padding-right: 5px;
}

.divColor {
  background-color: #f7f7f7;
}
</style>

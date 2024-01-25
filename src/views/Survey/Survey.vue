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
            <IonRow>
                <ion-col>
                    <h4 class="titleStyle">Survey</h4>
                </ion-col>
                <ion-button id="trigger-button" class="compact-filter-chip" style="--background: white;">
                    <ion-icon :icon="optionsOutline" class="icon"></ion-icon>
                    <span style="font-size: 14px; color: #808080; margin-left: 10px;">Team (2)</span>
                </ion-button>
                <ion-popover trigger="trigger-button">
                    <ion-content>
                        <ion-accordion-group>
                            <ion-accordion value="first">
                                <ion-item slot="header" color="light">
                                    <ion-label>Teams</ion-label>

                                </ion-item>
                                <div class="ion-padding" slot="content">
                                    <ion-list>
                                        <ion-item v-for="team in teams" :key="team.title">
                                            <ion-checkbox slot="start"></ion-checkbox>
                                            <ion-label>{{ team.title }}</ion-label>
                                        </ion-item>
                                    </ion-list>
                                </div>
                            </ion-accordion>
                            <ion-accordion value="second">
                                <ion-item slot="header" color="light">
                                    <ion-label>Dates</ion-label>
                                </ion-item>
                                <div class="ion-padding" slot="content"> <ion-radio-group v-model="selectedOption">
                                        <ion-item>
                                            <ion-label>Today</ion-label>
                                            <ion-radio value="Today" slot="start"></ion-radio>
                                        </ion-item>
                                        <ion-item>
                                            <ion-label> <ion-datetime-button v-if="!calendarModel.visible"
                                                    datetime="datetime" color="success"
                                                    @click="openModal"></ion-datetime-button>

                                                <ion-modal :is-open="calendarModel.visible" @close="closeModal">

                                                    <ion-datetime id="datetime" display-format="MMM DD, YYYY h:mm A"
                                                        picker-format="MMM DD, YYYY h:mm A"
                                                        placeholder="Select date and time"
                                                        @ionChange="updateDate"></ion-datetime>
                                                </ion-modal>

                                            </ion-label>
                                            <ion-radio value="Text" slot="start"></ion-radio>
                                        </ion-item>
                                    </ion-radio-group></div>
                            </ion-accordion>
                        </ion-accordion-group>
                    </ion-content>
                </ion-popover>
            </IonRow>
            <ion-card v-for="survey in surveys" :key="survey.id" class="ion-margin-vertical"
                style="margin: 25px; box-shadow: none;"
                @click="
              () =>
                router.push({
                  name: 'surveyQuestion',
                })"
      >
                <IonGrid :fixed="true">
                    <IonRow style="height: 70px;">
                        <IonCol>
                            <ion-card-header>
                                <ion-card-title class="title">{{ survey.title }}<ion-card-title class="ion-text-small"
                                        style="display: inline; float: right;">{{ survey.date
                                        }}</ion-card-title></ion-card-title>
                            </ion-card-header>
                            <ion-card-content class="ion-flex ion-align-items-center ion-justify-content-between">
                                <span class="ion-text-capitalize">
                                    <ion-chip :style="{ background: survey.color }">
                                        <ion-label class="label-text">{{ survey.label }}</ion-label>
                                    </ion-chip>
                                </span>
                            </ion-card-content>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </ion-card>
            <ion-fab class="addStyle" slot="fixed" horizontal="end" vertical="bottom"
                @click="() => router.push({ name: 'addteam' })">
                <ion-fab-button>
                    <ion-icon src="/src/pictures/answer-correct-icon 1.svg"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>ion-page>
</template>

<script setup lang="ts">
import {
    ref,
    watch
} from "vue";
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
    IonIcon,
    IonFab,
    IonFabButton,
    IonDatetime,
    IonButton,
    IonAccordionGroup,
    IonAccordion,
    IonPopover,
    IonList,
    IonItem,
    IonCheckbox,
    IonRadio,
    IonRadioGroup,
    IonModal,
    IonDatetimeButton
} from "@ionic/vue";
import { optionsOutline, chevronForwardOutline, chevronDownOutline, chevronUpOutline } from "ionicons/icons";
import score from "@/components/Header/Header.vue";
import router from "@/router/index";
import { useStatusStore } from "@/store";

const statusStore = useStatusStore();
const surveys = ref([
    { id: "01A", title: "Team A", label: "Pending", date: "jan 10,2024", color: "#ff8512" },
    { id: "02", title: "Team A", label: "Upcoming", date: "jan 10,2024", color: "#d5d5d5" },
    { id: "03", title: "Team A", label: "Completed", date: "jan 10,2024", color: "#abd14a" },
    { id: "04", title: "Team A", label: "Pending", date: "jan 10,2024", color: "#ff8512" },
    { id: "05", title: "Team A", label: "Upcoming", date: "jan 10,2024", color: "#d5d5d5" },
    { id: "06", title: "Team A", label: "Pending", date: "jan 10,2024", color: "#ff8512" },
    { id: "07", title: "Team A", label: "Pending", date: "jan 10,2024", color: "#ff8512" },
    { id: "08", title: "Team A", label: "Upcoming", date: "jan 10,2024", color: "#d5d5d5" },
    { id: "09", title: "Team A", label: "Completed", date: "jan 10,2024", color: "#abd14a" },
    { id: "10", title: "Team A", label: "Upcoming", date: "jan 10,2024", color: "#d5d5d5" },
    { id: "11", title: "Team A", label: "Pending", date: "jan 10,2024", color: "#ff8512" },
    // ... other survey items
]);
const teams = ref([
    { title: "Team A" },
    { title: "Team B" },
    { title: "Team C" },
    { title: "Team D" },
    { title: "Team A" },
    { title: "Team A" },
]);
const navigateFunction = () => {
  router.push({ name: "team" });
};
const accordionGroupChange = (event:any) => {
    console.log("Accordion group change event:", event);
    // Add your logic here if needed
};
const isDropdownOpen = ref(false);
const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
    isDropdownOpen.value = true;
};
const selectedOption = ref("");

// Add a watcher to observe changes to the selectedOption
watch(() => {
    console.log("Selected option changed:", selectedOption.value);
});

// const onCloseDropdown = () => {
//     isDropdownOpen.value = false;
//     // Add your logic for when the dropdown is closed
//     console.log("Dropdown closed");
// };

const calendarModel = ref({
    visible: false,
    selectedDate: null,
});

const openModal = () => {
    calendarModel.value.visible = true;
};

const closeModal = () => {
    calendarModel.value.visible = true;
};

const updateDate = (event:any) => {
    // Handle the selected date if needed
    calendarModel.value.selectedDate = event.detail.value;
};
const toggleCalendarModel = () => {
    calendarModel.value.visible = !calendarModel.value.visible;
    console.log("calendarModelVisible:", calendarModel.value.visible);
};

(async () => {
    await Promise.all([
        statusStore.getDimensions(),
        statusStore.getQuestionNaire(),
        statusStore.getSchedulers(),
    ]);
    console.log(statusStore.schedulers);
});
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

ion-card-content {
    margin-top: -10px;
    /* Adjust the value as needed */
}

ion-card {
    --background: #FAFAFA;
    border-radius: 5px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid rgba(242, 242, 242, 0.95);
    background: #FAFAFA;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

}

ion-card-title {
    font-size: 1.2em;
    /* Large font size for card title */
    font-weight: bold;
    color: #222;
    /* Adjust if needed */
}

ion-card-header {
    margin-top: -16px;
    /* Adjust the value as needed */
}

.date-label {
  font-weight: bold;
  color: #555;
  /* Date label color */
}

.rounded-item {
    border-radius: 10px;
}

ion-chip {
    --color: #fff;
    /* White text on chip */
    --background: #ffac5f;
    text-align: center;
    /* Body small */
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    /* 133.333% */
    /* Use your primary color here */
}

ion-chip[color="secondary"] {
    --background: #5bc0de;
    /* Use your secondary color here */
}

.titleStyle {
    color: var(--Neutrals-black, #303030);
    font-family: 'Cabin';
    font-size: 26px;
    font-weight: 580;
    line-height: 28px;
    text-align: left;
    margin-top: 28px;
    margin-bottom: 25px;
    padding-left: 20px;
    font-style: normal;
}

.ion-text-capitalize {
    color: #000;
    /* Body medium */
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    /* 142.857% */
    letter-spacing: 0.25px;
    margin-top: -25px;
    margin-bottom: -12px;
    margin-left: -20px;
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

.ion-text-small {
    /* Jan 10, 2024 */
    width: 67px;
    height: 16px;
    /* Label medium */
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 550;
    font-size: 12px;
    line-height: 16px;
    /* Identical to box height, or 133% */
    letter-spacing: 0.5px;
    color: #7C7C7C;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    /* Add right margin */
    margin-right: -20px;
    /* Adjust the value as needed */
}

.label-text {
    width: 60px;
    height: 12px;
    /* Adjusted height, add a specific value */
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    flex: none;
    order: 1;
    flex-grow: 0;
    padding: auto;
    /* Adjust the padding as needed */
}

.title {
    margin-top: -6px;
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #303030;
    margin-left: -11px;

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
    margin-top: 23px;
    margin-right: 23px;
    background: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(51, 51, 51, 0.3);
    border-radius: 5px;
    border: 0px solid #8B8B8B;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.compact-filter-chip:hover {
    background: #F0F0F0;
    /* Change the background on hover */
}
.icon{
   color: black;
   font-size: 18px;
    position: absolute;
    margin-left: -75px;
}
</style>

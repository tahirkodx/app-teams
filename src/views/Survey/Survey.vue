<template>
    <ion-page>
        <ion-header>
            <score />
        </ion-header>
        <ion-content :fullscreen="true">
            <h4 class="titleStyle">Survery</h4>
            <ion-card v-for="survey in surveys" :key="survey.id" class="ion-margin-vertical">
                <IonGrid :fixed="true">
                    <IonRow>
                        <IonCol>
                            <ion-card-header>
                                <ion-card-title class="ion-text-capitalize">{{
                                    survey.name
                                }}</ion-card-title>
                            </ion-card-header>
                            <ion-card-content class="ion-flex ion-align-items-center ion-justify-content-between">
                                <span class="ion-text-capitalize">
                                    <ion-chip>
                                        <ion-label>{{ survey.type }}</ion-label>
                                    </ion-chip>
                                    <ion-chip>
                                        <ion-label>{{ survey.date }}</ion-label>
                                    </ion-chip>
                                </span>
                            </ion-card-content>
                        </IonCol>
                        <IonCol size="auto">
                            <div style="width: 30px">
                                <ion-icon :icon="chevronDownOutline" class="chevron-icon"></ion-icon>
                            </div>
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
} from "@ionic/vue";
import { ref } from "vue";
import { chevronDownOutline, add } from "ionicons/icons";
import score from "@/components/Header/Header.vue";
import router from "@/router/index";

const surveys = ref([
    { id: "01A", name: "Survey 01A", type: "Critical", date: "12 December" },
    { id: "02", name: "Survey 02", type: "Periodic", date: "01 November" },
    { id: "03", name: "Survey 03", type: "Critical", date: "09 December" },
    { id: "04", name: "Survey 04", type: "Periodic", date: "02 November" },
    { id: "05", name: "Survey 05", type: "Critical", date: "01 December" },
    { id: "06", name: "Survey 06", type: "Periodic", date: "10 November" },
    { id: "07", name: "Survey 07", type: "Critical", date: "01 December" },
    { id: "08", name: "Survey 08", type: "Critical", date: "16 December" },
    { id: "09", name: "Survey 09", type: "Periodic", date: "01 November" },
    { id: "10", name: "Survey 10", type: "Critical", date: "23 December" },
    { id: "11", name: "Survey 11", type: "Periodic", date: "01 November" },
    // ... other survey items
]);
</script>

<style scoped>
ion-toolbar {
    --background: #fff;
    /* Adjust if needed */
}

ion-title {
    color: #222;
    /* Adjust if needed */
}

ion-card {
    --background: #f9f9f9;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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

    /* Body small */
    font-family: "Cabin", sans-serif;
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

    font-family: "Cabin", sans-serif;

    font-size: 22px;
    font-weight: 500;
    line-height: 28px;
    text-align: left;
    margin-top: 25px;
    margin-bottom: -12px;
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

/* Add any additional custom styles needed to match your screenshot */
</style>

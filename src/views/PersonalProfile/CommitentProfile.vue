<template>
    <ion-page>
        <ion-toolbar> </ion-toolbar>
        <ion-content>
            <ion-card class="bg-green">
                <ion-card-content class="ion-padding">
                    <ion-img src="/src/pictures/Ellipse 85.svg" alt="Finished Success"></ion-img>
                    <IonLabel class="text-card ion-padding">
                        <h1>Devon Lane</h1>
                        <h4>Senior Manager</h4>
                        <h6 class="bg-light">3 Active Teams</h6>
                    </IonLabel>
                    <ion-text class="ion-color"><ion-icon :icon="ellipsisVertical" class="ion-color"></ion-icon></ion-text>
                </ion-card-content>
            </ion-card>
            <ion-text>
                <h1 class="text-lg ion-padding-start">Build Their group Identity</h1>
            </ion-text>

            <!-- <LineChart /> -->

            <div class="button-custom font-sm">
                <ion-button size="default" fill="outline" class="button-size">CLOSE</ion-button>
                <ion-button size="default" class="button-size">TRANSFORM</ion-button>
            </div>
            <ion-text class="bg-gray owner-container font-sm ion-padding-start ion-padding-end">
                <ion-icon :icon="arrowBackCircle"></ion-icon>
                <div class="container text-center"> <ion-button id="top-center" class="font-normal">Build Their Group
                        Identity <ion-icon :icon="chevronDownOutline" class="ion-margin-start"></ion-icon><span
                            class="text-small">1/6</span></ion-button>
                    <ion-popover trigger="top-center" side="bottom" alignment="center">
                        <ion-content class="ion-padding">Build Their Group Identity</ion-content>
                        <ion-content class="ion-padding">Build Their Group Identity</ion-content>
                        <ion-content class="ion-padding">Add Commitments</ion-content>
                    </ion-popover>
                </div>
                <ion-icon :icon="arrowForwardCircle" class="bg-green ion-margin-left"></ion-icon>
            </ion-text>
            <ion-segment v-model="activeTab" value="Description" @ionChange="segmentChanged">
                <ion-segment-button value="Description">
                    <ion-label>Description</ion-label>
                </ion-segment-button>
                <ion-segment-button value="Exercises">
                    <ion-label>Exercises</ion-label>
                </ion-segment-button>
                <ion-segment-button value="Message">
                    <ion-label>Message</ion-label>
                </ion-segment-button>
            </ion-segment>
            <div class="content">
                <!-- Content based on the active tab -->
                <div v-if="activeTab === 'Exercises'">
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <h5>Active Exercises:</h5>
                                <ion-card class="card-style">
                                    <ion-card-header>
                                        <ion-card-title class="text-bold">Exercise Topic</ion-card-title>
                                        <div class="owner-container font-sm">
                                            <ion-img src="/src/pictures/Ellipse 72.svg" />
                                            <h3 class="text-small">
                                                Owner: Guy Hawkins
                                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"
                                                    viewBox="0 0 2 2" fill="none">
                                                    <circle cx="1" cy="1" r="1" fill="#D9D9D9" />
                                                </svg>
                                                <span color="success"> Ongoing </span>
                                            </h3>
                                        </div>
                                    </ion-card-header>
                                    <ion-card-content class="top-content">
                                        Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet
                                        aenean id.
                                    </ion-card-content>
                                    <ion-progress-bar value="0.5"></ion-progress-bar>
                                    <ion-text class="icon-color ion-color"><ion-icon :icon="arrowForwardOutline"
                                            class="icon-color"></ion-icon></ion-text>
                                </ion-card>
                                <h5>Suggested Exercises:</h5>
                                <ion-card class="card-style">
                                    <ion-card-header>
                                        <ion-card-title class="text-bold">Exercise Topic</ion-card-title>
                                    </ion-card-header>
                                    <ion-card-content>
                                        Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet
                                        aenean id.
                                    </ion-card-content>
                                    <ion-text class="icon-color ion-color"><ion-icon :icon="arrowForwardOutline"
                                            class="icon-color"></ion-icon></ion-text>
                                </ion-card>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                    <ion-button expand="block" fill="outline" class="ion-padding ion-margin-top">SEARCH
                        OTHER</ion-button>
                </div>
                <div v-if="activeTab === 'Description'">
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-label class="text-bold">Description:</ion-label>
                                <ion-text class="text-bold">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Aenean integer
                                        vivamus morbi nulla et tincidunt. Platea hac sed nunc est
                                        phasellus. Risus et id mi in. Facilisi tellus facilisis
                                        venenatis amet. Volutpat lobortis phasellus tincidunt
                                        vestibulum volutpat pharetra purus.
                                    </p>
                                </ion-text>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </div>
                <div v-if="activeTab === 'Message'">Add chats component</div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCard,
    IonCol,
    IonPage,
    IonImg,
    IonLabel,
    IonText,
    IonCardContent,
    IonSegment,
    IonSegmentButton,
} from "@ionic/vue";
import {
    settingsOutline,
    personCircleOutline,
    arrowForwardOutline,
    ellipsisVertical,
    ellipsisHorizontalCircle,
    arrowBackCircle,
    arrowForwardCircle,
    chevronDownOutline
} from "ionicons/icons";
import LineChart from "@/components/Charts/LineChart.vue";
const activeTab = ref("Description"); // default active tab
const progress = ref(2);
const segmentChanged = (event) => {
    activeTab.value = event.detail.value;
};
</script>

<style scoped>
ion-segment {
    background-color: white;
}

ion-segment-button {
    background-color: white;
    --indicator-box-shadow: none;
    --border-radius: none;
}

ion-segment-button.segment-button-checked {
    /* border-bottom: 2px solid var(--tietiary, rgba(44, 58, 209, 0.50)); */
}

ion-card-content {
    display: flex;
}

ion-title {
    color: var(--Neutrals-black, #303030);
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    text-align: justify;
}

.font-normal {
    color: var(--Neutrals-black, #303030);
    font-size: 16px;
    line-height: 24px;
    margin-left: -20px;
    letter-spacing: 0.1px;
    --background: #f2f2f2;
    --box-shadow: none;
    /* color:white; */
}

ion-card {
    width: auto;
    margin-right: -20px;
    margin-left: -5px;
    margin-top: -8px;
    box-shadow: none;
    background: #aed351;
}

ion-progress-bar {
    --progress-background: #2c3ad180;
    --progress-color: #2c3ad180;
    width: 89%;
    left: 15px;
    margin-bottom: 15px;
}

ion-icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    color: #747474;
}

.top-content {
    margin-top: -18px;
}

.owner-container {
    align-items: center;
    margin-top: -8px;
}

.font-sm {
    display: flex;
}

.owner-container h3 {
    line-height: 16px;
    margin-left: 8px;
    margin-bottom: 15px;
}

.text-center {
    flex: 1;
    text-align: center;
}

.bg-gray {
    background: #f2f2f2;
    margin-top: 12px;
    gap: 10px;
    margin-bottom: 16px;
}

.container {
    display: flex;
    padding: 0px 12px;
    justify-content: center;
    align-items: center;
    gap: 4px;
}

.bg-green {
    color: #aed351;
}


.ion-margin-left {
    margin-left: -23px;
}

.content {
    padding: 20px 15px 0px 15px;
    min-height: 200px;
    overflow-y: scroll;
    height: 520px;
}

.text-card {
    color: var(--white, #fff);
}

.text-card h1 {
    font-size: 22px;
    line-height: 28px;
}

.text-card h4 {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
}

.text-card h6 {
    color: var(--main-green, #a5ce3e);
    font-size: 10px;
    line-height: 16px;
    border: 1px solid;
    padding: 2px 8px;
    width: 85px;
    border-radius: 100px;
    background-color: #f2f2f2;
}

.ion-color {
    color: #f2f2f2;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 20px;
}

.text-lg {
    color: var(--tietiary, rgba(44, 58, 209, 0.5));
    font-size: 22px;
    line-height: 28px;
}

.text-small {
    color: #808080;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
}

.button-custom {
    justify-content: center;
    align-items: center;
    padding: 10.71px 49.5px 11.29px 47px;
    gap: 24px;
}

.button-size {
    width: 150px;
}

.text-bold {
    color: #303030;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: 0.25px;
}

.card-style {
    background: white;
    margin: 0px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.icon-color {
    top: 10px;
    width: 24px;
    height: 24px;
    color: #2c3ad180;
}
</style>

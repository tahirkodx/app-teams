<template>
    <ion-page>
        <ion-toolbar>
            <ion-buttons slot="end">
                <ion-button>
                    <ion-icon :icon="settingsOutline"></ion-icon>
                </ion-button>
            </ion-buttons>
            <ion-title class="toolbar-title">Profile</ion-title>
            <ion-buttons slot="start">
                <ion-button>
                    <ion-icon :icon="personCircleOutline"></ion-icon>
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
        <ion-content>
            <h5 class="text-container ion-padding-start">(Level1) Diploment</h5>
            <h6 class="ion-text-end ion-padding-end">Next Level(Expert) <ion-icon :icon="arrowForwardOutline"></ion-icon>
            </h6>
            <ion-card>
                <ion-card-content class="ion-padding">
                    <ion-img src="/src/pictures/Ellipse 85.svg" alt="Finished Success"></ion-img>
                    <IonLabel class="text-card ion-padding">
                        <h1>Devon Lane</h1>
                        <h4>Senior Manager</h4>
                        <h6>3 Active Teams</h6>
                    </IonLabel>
                    <ion-text class="ion-color"><ion-icon :icon="ellipsisVertical" class="ion-color"></ion-icon></ion-text>
                </ion-card-content>
            </ion-card>
            <ion-text>
                <h1 class="text-lg ion-padding-start">Build Their group Identity</h1>
            </ion-text>

            <!-- <LineChart /> -->

            <div class="button-custom">
                <ion-button size="default" fill="outline" class="button-size">CLOSE</ion-button>
                <ion-button size="default" class="button-size">ALERT</ion-button>
            </div>
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
                                <h5 class="ion-padding-bottom">Active Exercises:</h5>
                                <ion-card class="card-style">
                                    <ion-card-header>
                                        <ion-card-title>Exercise Topic</ion-card-title>
                                    </ion-card-header>
                                    <ion-card-content>
                                        Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean id.
                                    </ion-card-content>
                                    <ion-progress-bar value="progress"></ion-progress-bar>
                                    <ion-text class="icon-color ion-color"><ion-icon :icon="arrowForwardOutline"
                                            class="icon-color"></ion-icon></ion-text>
                                </ion-card>

                                <h5 class="ion-padding-bottom">Suggested Exercises:</h5>
                                <ion-card class="card-style">
                                    <ion-card-header>
                                        <ion-card-title>Exercise Topic</ion-card-title>
                                    </ion-card-header>
                                    <ion-card-content>
                                        Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean id.
                                    </ion-card-content>
                                    <ion-text class="icon-color ion-color"><ion-icon :icon="arrowForwardOutline"
                                            class="icon-color"></ion-icon></ion-text>
                                </ion-card>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </div>
                <div v-if="activeTab === 'Description'">
                    <div class="ion-border-bottom"></div>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-label class="text-bold">Doing</ion-label>
                                <ion-text class="text-semibold text-bold">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Sem massa
                                        etiam amet aenean id.
                                    </p>
                                </ion-text>
                                <ion-label class="text-bold">Not doing Instead</ion-label>
                                <ion-text class="text-semibold text-bold">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Sem massa
                                        etiam amet aenean id.
                                    </p>
                                </ion-text>
                                <ion-label class="text-bold">Competing commitments</ion-label>
                                <ion-text class="text-semibold text-bold">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Sem massa
                                        etiam amet aenean id.
                                    </p>
                                </ion-text>
                                <ion-label class="text-bold">Big assumptions</ion-label>
                                <ion-text class="text-semibold text-bold">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Sem massa
                                        etiam amet aenean id.
                                    </p>
                                </ion-text>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </div>
                <div v-if="activeTab === 'Message'">Other tabseeee</div>
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
    IonSegmentButton
} from "@ionic/vue";
import { settingsOutline, personCircleOutline, arrowForwardOutline, ellipsisVertical, ellipsisHorizontalCircle } from "ionicons/icons";
import LineChart from "@/components/Charts/LineChart.vue";
const activeTab = ref("Description"); // default active tab
const progress = ref(2);
const segmentChanged = (event) => {
    activeTab.value = event.detail.value;
};

</script>

<style scoped>
ion-toolbar {
    --background: #fff;
    --padding-start: 8px;
    --padding-end: 20px;
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

ion-card {
    width: auto;
    margin-right: -20px;
    margin-left: -5px;
    margin-top: -8px;
    box-shadow: none;
    background: #aed351;
}

/* ion-button {
    --background: transparent;
} */
ion-progress-bar {
    --progress-background: #2C3AD180;
    --progress-color: #2C3AD180;
    width: 170%;
    left: 15px;
    margin-bottom: 15px;
}

ion-icon {
    /* width: 27px;
    height: 27px;
    flex-shrink: 0; */
    /* color: #747474; */
}

.text-container {
    color: var(--tietiary, rgba(44, 58, 209, 0.50));
    font-size: 14px;
    letter-spacing: 0.1px;
}

.tabs {
    display: flex;
    justify-content: center;
    padding: 0;
    margin-top: 25px;
    list-style: none;
}

.tab {
    padding: 8px 34.43px;
    cursor: pointer;
    text-align: center;
    border-bottom: 3px solid transparent;
}

.tab.active {
    border-bottom: 3px solid #8289d5;
}

.content {
    padding: 20px 15px 0px 15px;
    min-height: 200px;
    overflow-y: scroll;
    height: 520px;
}

.ion-text-end {
    color: rgba(119, 85, 119, 0.34);
    font-size: 12px;
    margin-top: -26px;
}

.text-card {
    color: var(--white, #FFF);
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
    color: var(--main-green, #A5CE3E);
    font-size: 10px;
    line-height: 16px;
    border: 1px solid #f2f2f2;
    background-color: #f2f2f2;
    padding: 2px 8px;
    width: 85px;
    border-radius: 100px;
}

.text-card h2 {
    font-size: 12px;
}

.ion-color {
    color: #F2F2F2;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 20px;
}

.text-lg {
    color: var(--tietiary, rgba(44, 58, 209, 0.50));
    font-size: 22px;
    line-height: 28px;
    /* margin-left:23px; */
    /* 127.273% */
}

.text-sm {
    color: #F2F2F2;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50px;
    right: 20px;
}

.button-custom {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10.71px 49.5px 11.29px 47px;
    gap: 24px;
}

.button-size {
    width: 150px;
}

.ion-border-bottom {
    border-bottom: 1px solid#F2F2F2;
    margin-top: 10px;
    margin-left: -10px;
    margin-right: -10px;
    margin-bottom: 20px;
}

.text-bold {
    color: #303030;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.25px
}

.text-semibold {
    font-weight: 400;
    line-height: 20px;
}

.card-style {
    background: white;
    margin: 0px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.icon-color {
    top: 15px;
    width: 24px;
    height: 24px;
    color: #2C3AD180;
}</style>

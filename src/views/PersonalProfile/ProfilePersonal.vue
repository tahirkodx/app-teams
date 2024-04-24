<template>
    <ion-page>
        <ion-content>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button>
                        <ion-icon :icon="settingsOutline"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-buttons slot="end">
                    <ion-button>
                        <ion-icon :icon="chatbubbleEllipsesOutline"></ion-icon>
                    </ion-button>
                    <ion-button>
                        <ion-icon :icon="documentTextOutline"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
            <div>
                <h5 class="text-container ion-padding-start">(Level1) Diploment</h5>
                <h6 class="ion-text-end ion-padding-end">
                    Next Level(Expert) <ion-icon :icon="arrowForwardOutline"></ion-icon>
                </h6>
            </div>
            <ion-card class="bg-green">
                <ion-card-content class="ion-padding">
                    <ion-img src="/src/pictures/Ellipse 85.svg" alt="Finished Success"></ion-img>
                    <IonLabel class="text-card ion-padding">
                        <h1>Devon Lane</h1>
                        <h4>Senior Manager</h4>
                        <h6 class="gray-card text-green">3 Active Teams</h6>
                    </IonLabel>
                    <ion-text class="ion-color"><ion-icon :icon="ellipsisVertical" class="ion-color"></ion-icon></ion-text>
                </ion-card-content>
            </ion-card>
            <ion-card class="gray-card ion-padding-start ion-padding-end">
                <ion-card-header>
                    <ion-card-title>Improvement Commitments:</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    This suggestions contain list of recommended commitments related to the improvement commitment you made.
                </ion-card-content>
            </ion-card>
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-padding">
                        <ion-card class="card-style">
                            <ion-card-header>
                                <ion-card-title>Commitment Topic</ion-card-title>
                                <ion-card-subtitle>Score: <span class="text-green">7.5/10</span></ion-card-subtitle>
                                <div class="owner-container">
                                    <ion-img src="/src/pictures/Ellipse 72.svg" />
                                    <h3>
                                        Owner: Guy Hawkins
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 2 2"
                                            fill="none">
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
                        <ion-card class="card-style">
                            <ion-card-header>
                                <ion-card-title>Commitment Topic</ion-card-title>
                                <div class="owner-container">
                                    <ion-img src="/src/pictures/Ellipse 72.svg" />
                                    <h3>
                                        Owner: Guy Hawkins
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 2 2"
                                            fill="none">
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
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-card class="gray-card ion-padding-start ion-padding-end">
                <ion-card-header>
                    <ion-card-title>Suggested Commitments:</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    This suggestions contain list of recommended commitments related to the improvement commitment you made.
                </ion-card-content>
            </ion-card>
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-padding-start ion-padding-end ">
                        <ion-card class="gray-card card-style">
                            <ion-card-header>
                                <ion-card-title>Create Custom Improvement Commitment</ion-card-title>
                            </ion-card-header>
                            <ion-card-content>
                                Create a new empty commitment
                            </ion-card-content>
                            <ion-text class="icon-color ion-color"><ion-icon :icon="arrowForwardOutline"
                                    class="icon-color"></ion-icon></ion-text>
                        </ion-card>
                        <ion-card class="card-style">
                            <ion-card-header>
                                <ion-card-title>Commitment Topic</ion-card-title>
                            </ion-card-header>
                            <ion-card-content>
                                Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet
                                aenean id.
                            </ion-card-content>
                            <ion-text class="icon-color ion-color"><ion-icon :icon="arrowForwardOutline"
                                    class="icon-color"></ion-icon></ion-text>
                        </ion-card>
                        <ion-button expand="block" fill="outline">SEARCH OTHER</ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
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
    IonCardHeader,
} from "@ionic/vue";
import {
    settingsOutline,
    personCircleOutline,
    arrowForwardOutline,
    ellipsisVertical,
    ellipsisHorizontalCircle,
    chatbubbleEllipsesOutline,
    documentTextOutline
} from "ionicons/icons";
</script>

<style scoped>
ion-toolbar {
    --background: #fff;
    --padding-start: 8px;
    --padding-end: 20px;
}

ion-card-content {
    display: flex;
    font-size: 12px;

}

ion-card-title {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.1px;
}

ion-title {
    color: var(--Neutrals-black, #303030);
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    text-align: justify;
}

.text-green {
    color: var(--main-green, #a5ce3e);
}

.top-content {
    margin-top: -15px;
}

.bg-green {
    background: #aed351;
}

ion-card {
    width: auto;
    margin-right: -20px;
    margin-left: -5px;
    margin-top: -8px;
    margin-bottom: 0px;
    box-shadow: none;
}

ion-progress-bar {
    --progress-background: #2c3ad180;
    --progress-color: #2c3ad180;
    width: 89%;
    left: 15px;
    margin-bottom: 15px;
}

ion-icon {
    /* width: 27px;
    height: 27px; */
    color: #747474;
}

.owner-container {
    display: flex;
    align-items: center;
    margin-top: -8px;
}

.owner-container h3 {
    color: #808080;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    /* 133.333% */
    margin-left: 8px;
    margin-bottom: 15px;
}

.text-container {
    color: var(--tietiary, rgba(44, 58, 209, 0.5));
    font-size: 15px;

}

.gray-card {
    background-color: #f2f2f2;
}
.ion-text-end {
    color: rgba(119, 85, 119, 0.34);
    font-size: 12px;
    margin-top: -26px;
}

.text-card h1 {
    font-size: 22px;
    line-height: 28px;
}

.text-card {
    color: var(--white, #fff);
}

.text-card h4 {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
}

.text-card h6 {

    font-size: 10px;
    line-height: 16px;
    padding: 2px 8px;
    width: 85px;
    border-radius: 100px;
}

.text-card h2 {
    font-size: 12px;
}

.ion-color {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 20px;
}

.card-style {
    border: 1px solid #F2F2F2;
    margin: 0px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 16px;
}

.icon-color {
    top: 15px;
    width: 24px;
    height: 24px;
    color: #2c3ad180;
}
</style>


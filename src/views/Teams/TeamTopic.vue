<template>
    <ion-page>
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
            </ion-buttons> </ion-toolbar>
        <ion-content>
            <ion-text>
                <h2 class="text-lg ion-padding-start ion-padding-bottom">
                    Build Their group Identity
                </h2>
            </ion-text>
            <InfoCard />
            <LineChart :data="dummyData" />
            <swiper :navigation="true" class="bg-gray owner-container font-sm ion-padding-start ion-padding-end">
                <swiper-slide class="ion-padding-start">
                    <div class="container text-center">
                        <ion-button id="top-center1" class="font-normal">Build Their Group Identity
                            <ion-icon :icon="chevronDownOutline" class="ion-margin-start"></ion-icon><span
                                class="text-small">1/6</span></ion-button>
                        <ion-popover trigger="top-center1" side="bottom" alignment="center">
                            <ion-content class="ion-padding">Build Their Group Identity</ion-content>
                            <ion-content class="ion-padding">Build Their Group Identity</ion-content>
                            <ion-content class="ion-padding">Add Commitments</ion-content>
                        </ion-popover>
                    </div>
                </swiper-slide>
                <swiper-slide class="ion-padding-start">
                    <div class="container text-center">
                        <ion-button id="top-center2" class="font-normal">Build Their Group Identity
                            <ion-icon :icon="chevronDownOutline" class="ion-margin-start"></ion-icon><span
                                class="text-small">1/6</span></ion-button>
                        <ion-popover trigger="top-center2" side="bottom" alignment="center">
                            <ion-content class="ion-padding">Build Their Group Identity</ion-content>
                            <ion-content class="ion-padding">Build Their Group Identity</ion-content>
                            <ion-content class="ion-padding">Add Commitments</ion-content>
                        </ion-popover>
                    </div>
                </swiper-slide>
                <swiper-slide class="ion-padding-start">
                    <div class="container text-center">
                        <ion-button id="top-center3" class="font-normal">Build Their Group Identity
                            <ion-icon :icon="chevronDownOutline" class="ion-margin-start"></ion-icon><span
                                class="text-small">1/6</span></ion-button>
                        <ion-popover trigger="top-center3" side="bottom" alignment="center">
                            <ion-content class="ion-padding">Build Their Group Identity</ion-content>
                            <ion-content class="ion-padding">Build Their Group Identity</ion-content>
                            <ion-content class="ion-padding">Add Commitments</ion-content>
                        </ion-popover>
                    </div>
                </swiper-slide>
            </swiper>

            <ion-text class="bg-gray owner-container font-sm ion-padding-start ion-padding-end">
                <ion-icon :icon="arrowBackCircle"></ion-icon>
                <div class="container text-center">
                    <ion-button id="top-center" class="font-normal">Build Their Group Identity
                        <ion-icon :icon="chevronDownOutline" class="ion-margin-start"></ion-icon><span
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
                            <ion-col class="ion-padding">
                                <ion-card v-for="(card, index) in cardArray" :key="index"
                                    class="card-style ion-margin-bottom">
                                    <div class="inner-card">
                                        <div class="icon-container">
                                            <svg width="12" height="19" viewBox="0 0 12 19" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3.375 7.10352C4.44141 7.10352 5.34375 8.00586 5.34375 9.07227C5.34375 10.166 4.44141 11.041 3.375 11.041C2.28125 11.041 1.40625 10.166 1.40625 9.07227C1.40625 8.00586 2.28125 7.10352 3.375 7.10352ZM1.40625 4.25977C1.40625 3.19336 2.28125 2.29102 3.375 2.29102C4.44141 2.29102 5.34375 3.19336 5.34375 4.25977C5.34375 5.35352 4.44141 6.22852 3.375 6.22852C2.28125 6.22852 1.40625 5.35352 1.40625 4.25977ZM1.40625 13.8848C1.40625 12.8184 2.28125 11.916 3.375 11.916C4.44141 11.916 5.34375 12.8184 5.34375 13.8848C5.34375 14.9785 4.44141 15.8535 3.375 15.8535C2.28125 15.8535 1.40625 14.9785 1.40625 13.8848Z"
                                                    fill="#C9C9C9" />
                                                <path
                                                    d="M9.375 7.10352C10.4414 7.10352 11.3438 8.00586 11.3438 9.07227C11.3438 10.166 10.4414 11.041 9.375 11.041C8.28125 11.041 7.40625 10.166 7.40625 9.07227C7.40625 8.00586 8.28125 7.10352 9.375 7.10352ZM7.40625 4.25977C7.40625 3.19336 8.28125 2.29102 9.375 2.29102C10.4414 2.29102 11.3438 3.19336 11.3438 4.25977C11.3438 5.35352 10.4414 6.22852 9.375 6.22852C8.28125 6.22852 7.40625 5.35352 7.40625 4.25977ZM7.40625 13.8848C7.40625 12.8184 8.28125 11.916 9.375 11.916C10.4414 11.916 11.3438 12.8184 11.3438 13.8848C11.3438 14.9785 10.4414 15.8535 9.375 15.8535C8.28125 15.8535 7.40625 14.9785 7.40625 13.8848Z"
                                                    fill="#C9C9C9" />
                                            </svg>
                                        </div>
                                        <div>
                                            <ion-card-header>
                                                <ion-card-title class="text-bold">{{
                        card.title
                    }}</ion-card-title>
                                                <div class="owner-container font-sm">
                                                    <ion-img :src="card.imageURL" />
                                                    <h3 class="text-small">
                                                        Owner:{{ card.owner }}
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="8"
                                                            viewBox="0 0 2 2" fill="none">
                                                            <circle cx="1" cy="1" r="1" fill="#D9D9D9" />
                                                        </svg>
                                                        <span :class="{ success: card.ongoing }">
                                                            Ongoing
                                                        </span>
                                                    </h3>
                                                </div>
                                            </ion-card-header>
                                            <ion-progress-bar value="0.5"></ion-progress-bar>
                                        </div>
                                    </div>
                                </ion-card>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
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
                <div v-if="activeTab === 'Message'">
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <Message />
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
    IonToolbar,
    IonButton,
    IonIcon,
    IonContent,
    IonGrid,
    IonRow,
    IonCard,
    IonCol,
    IonPage,
    IonImg,
    IonLabel,
    IonPopover,
    IonText,
    IonCardContent,
    IonSegment,
    IonSegmentButton,
    IonProgressBar,
    IonCardHeader,
    IonCardTitle,
    IonButtons
} from "@ionic/vue";
import {
    arrowBackCircle,
    arrowForwardCircle,
    chevronDownOutline,
    settingsOutline,
    chatbubbleEllipsesOutline,
    documentTextOutline
} from "ionicons/icons";
import LineChart from "@/components/Charts/LineChart.vue";
import InfoCard from "@/components/Personal/InfoCard.vue";
import Message from "@/components/Personal/Message.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "@ionic/vue/css/ionic-swiper.css";
import "swiper/css/navigation";

const activeTab = ref("Description"); // default active tab
const progress = ref(2);
const chartData = ref();
const dummyData = [
    { score: 7, date: "2024-01-01" },
    { score: 8, date: "2024-02-02" },
    { score: 6, date: "2024-03-03" },
    { score: 9, date: "2024-04-04" },
    { score: 5, date: "2024-05-05" },
    { score: 8, date: "2024-06-06" },
    { score: 7, date: "2024-07-07" },
];
const cardArray = [
    {
        title: "Exercise Topic 1",
        owner: "Guy Hawkins",
        ongoing: true,
        imageURL: "/src/pictures/Ellipse 72.svg",
    },
    {
        title: "Exercise Topic 1",
        owner: "Guy Hawkins",
        ongoing: true,
        imageURL: "/src/pictures/Ellipse 72.svg",
    },
    {
        title: "Exercise Topic 1",
        owner: "Guy Hawkins",
        ongoing: true,
        imageURL: "/src/pictures/Ellipse 72.svg",
    },
];

const segmentChanged = (event) => {
    activeTab.value = event.detail.value;
};
// const handleUpdate = (score : any , date : any) => {
//       dateValue.value = formatter.format(new Date(date))
//       scoreValue.value = score;
//     }

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
}

.swiper-button-next,
.swiper-button-prev {
    background-color: white;
    background-position: center;
    background-size: 40px;
    background-repeat: no-repeat;
    padding: 8px 16px;
    border-radius: 100%;
    border: 2px solid black;
    color: red;
}

.swiper-button-prev {
    background-image: url("/box-arrow-in-left.svg");
}

.swiper-button-next {
    background-image: url("/box-arrow-in-right.svg");
}

.swiper-button-next::after,
.swiper-button-prev::after {
    content: "";
}

.icon-container {
    margin-top: 9px;
    margin-left: 6px;
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
    --background: var(--M3-sys-light-surface-container-highest, #e6e0e9);
    --progress-color: #a5ce3e;
    width: 89%;
    left: 15px;
    margin-top: -22px;
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

.inner-card {
    display: flex;
    align-items: center;
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
    line-height: 28px;
}

.text-small {
    color: #808080;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
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
    border-radius: 5px;
    border: 1px solid #f2f2f2;
}

.icon-color {
    top: 10px;
    width: 24px;
    height: 24px;
    color: #2c3ad180;
}

</style>

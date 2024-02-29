<template>
    <ion-content>
        <ion-header>
            <score />
        </ion-header>
        <ion-row>
            <ion-col class=" ion-padding">
                <ion-text class="text-sm">
                    <h3>You are an opportunist!
                        (level 1/7)</h3>
                    <ion-img src="/src/pictures/success.svg" alt="Finished Success"></ion-img>
                </ion-text>
                <div class="ion-border-bottom"></div>
                <ion-list class="ion-margin-bottom ion-padding-start">
                    <div class="label-container">
                        <ion-label>Opportunist</ion-label>
                        <ion-progress-bar value="25"></ion-progress-bar>
                    </div>
                    <div class="label-container">
                        <ion-label>Diplomat</ion-label>
                        <ion-progress-bar value="29"></ion-progress-bar>
                    </div>
                    <div class="label-container">
                        <ion-label>Expert</ion-label>
                        <ion-progress-bar value="29"></ion-progress-bar>
                    </div>
                    <div class="label-container">
                        <ion-label>Achiever</ion-label>
                        <ion-progress-bar value="29"></ion-progress-bar>
                    </div>
                    <div class="label-container">
                        <ion-label>Individualist</ion-label>
                        <ion-progress-bar value="29"></ion-progress-bar>
                    </div>
                    <div class="label-container">
                        <ion-label>Strategist</ion-label>
                        <ion-progress-bar value="29"></ion-progress-bar>
                    </div>
                    <div class="label-container">
                        <ion-label>Alchemist</ion-label>
                        <ion-progress-bar value="29"></ion-progress-bar>
                    </div>
                </ion-list>
                <ion-row>
                    <ion-col class="ion-padding-start">
                        <ion-lable>
                            Characteristics
                            <p>
                                You win any way possible, self-oriented; manipulative; “might makes right”
                            </p>
                        </ion-lable>
                        <div class="ion-border-bottom"></div>
                        <ion-lable class="ion-margin-top">
                            Strengths:
                            <p>
                                Good in emergencies and in sales oppurtunities. </p>
                        </ion-lable>
                        <div class="ion-border-bottom"></div>
                        <ion-lable>
                            Next level: Diplomat
                            <p>
                                Becoming a diplomat gives you the ability to... </p>
                            <div class="custom-design">
                                <div v-for="(label, labelIndex) in labelNames" :key="labelIndex">
                                    <span class="custom-border">
                                        <ion-label class="custom-size">{{ label }}
                                        </ion-label></span>
                                </div>
                            </div>
                        </ion-lable>
                    </ion-col>
                </ion-row>
                <ion-button expand="block" class="ion-margin-top">PROCEED TO NEXT SCREEN</ion-button>
            </ion-col>
        </ion-row>
    </ion-content>
</template>
<script setup lang="ts">
import { ref } from "vue";
import score from "@/components/Header/Header.vue";
import {
    IonButton,
    IonText,
    IonRow,
    IonCol,
    IonPage,
    IonImg,
    IonContent,
    IonHeader
} from "@ionic/vue";
const labelNames = [
    'Adaptability',
    'Innovation',
    'Risk Taking',
    'Entrepreneurial Spirit',
    'Resourcefulness',
    'Networking Skills',
    'Strategic Vision',
    'Positive Influence',
]
// const progressItems = ref([
//     { label: "Opportunist", progress: 0.23 },
//     { label: "Diplomat", progress: 0.0 },
//     { label: "Expert", progress: 0.0 },
//     { label: "Achiever", progress: 0 },
//     { label: "Individualist", progress: 0 },
//     { label: "Strategist", progress: 0 },
//     { label: "Achemist", progress: 0 }
//     // Add more items as needed
// ]);
// const getProgressBarStyle = (progress) => {
//     const height = 20 + progress * 10;
//     const width = 127 + progress * 10;
//     return `height: ${height}px; width: ${width}px;`;
// }
</script>
<style scoped>
ion-img {
    width: 70px;
    height: 70px;
}

ion-progress-bar {
    width: 126.75px;
    /* Adjust width as needed */
    height: 20px;
    /* Adjust height as needed */
    margin-right: 10px;
    background-color: #3373CA;
}

ion-lable {
    color: var(--main-green, #A5CE3E);
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
}

ion-lable p {
    color: #808080;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
}

.custom-design {
    display: flex;
    width: 317px;
    align-content: flex-start;
    gap: 12px 8px;
    flex-wrap: wrap;
}

.custom-border {
    color: var(--white, #FFF);
    border-radius:20px;
    background: var(--tietiary, rgba(44, 58, 209, 0.50));
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.1px;
}


.label-container {
    display: flex;
    margin-bottom: 10px;
    gap: 8px;
    color: #808080;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
}


.text-sm {
    color: var(--tietiary, rgba(44, 58, 209, 0.50));
    font-size: 22px;
    line-height: 28px;
    display: inline-flex;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 43px;
}

.ion-border-bottom {
    border-bottom: 1px solid #F2F2F2;
    margin-bottom: 8px;
    margin-left: -100px;
    margin-right: -100px;
}
</style>


    
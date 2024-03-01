<template>
    <ion-page>
        <ion-content>
            <ion-header>
                <score />
            </ion-header>
            <ion-row>
                <ion-col class=" ion-padding-start">
                    <ion-text class="text-sm">
                        <h3>You are an opportunist!
                            (level 1/7)</h3>
                        <ion-img src="/src/pictures/success.svg" alt="Finished Success"></ion-img>
                    </ion-text>
                    <div class="ion-border-bottom"></div>
                    <ion-list class="ion-margin-bottom ion-padding-start">
                        <div v-for="(item, index) in progressData" :key="index" class="label-container">
                            <ion-label class="label">{{ item.label }}</ion-label>
                            <ion-progress-bar :value="item.progress"
                                :style="{ '--background': item.color, height: item.height + 'px', width: item.width + 'px' }"></ion-progress-bar>
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
                            <ion-lable>
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
    </ion-page>
</template>
<script setup lang="ts">
import { ref } from "vue";
import score from "@/components/Header/Header.vue";
import {
    IonButton,
    IonText,
    IonRow,
    IonCol,
    IonImg,
    IonPage,
    IonContent,
    IonHeader,
    IonLabel,
    IonProgressBar,
    IonList,

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
const progressData = [
    { label: 'Opportunist', progress: 0, color: '#3373CA', height: 20, width: 16.75 },
    { label: 'Diplomat', progress: 0, color: '#3373CA', height: 20, width: 40.2 },
    { label: 'Expert', progress: 0, color: '#3373CA', height: 20, width: 127.3 },
    { label: 'Achiever', progress: 0, color: '#3373CA', height: 20, width: 100.5 },
    { label: 'Individualist', progress: 0, color: 'green', height: 20, width: 33.5 },
    { label: 'Strategist', progress: 0, color: '#AFC8EA', height: 20, width: 13.4 },
    { label: 'Alchemist', progress: 0, color: '#AFC8EA', height: 20, width: 3.35 }
];

</script>
<style scoped>
ion-img {
    width: 70px;
    height: 70px;
}

ion-lable {
    color: var(--main-green, #A5CE3E);
    font-size: 16px;
    letter-spacing: 0.15px;
}

ion-lable p {
    color: #808080;
    font-size: 14px;
    letter-spacing: 0.1px;
}

.custom-design {
    display: flex;
    width: 335px;
    gap: 16px 8px;
    flex-wrap: wrap;
}

.label {
    width: 74px;
}

.custom-border {
    color: var(--white, #FFF);
    border-radius: 20px;
    background: var(--tietiary, rgba(44, 58, 209, 0.50));
    font-size: 14px;
    letter-spacing: 0.1px;
    padding: 4px 8px;
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
    margin-bottom: -8px;
    display: inline-flex;
    padding: 16px 20px;
    gap: 43px;
}

.ion-border-bottom {
    border-bottom: 1px solid #F2F2F2;
    margin-bottom: 8px;
    margin-left: -100px;
    margin-right: -100px;
}

.ion-margin-top {
    padding: 14px 20px;
}
</style>


    
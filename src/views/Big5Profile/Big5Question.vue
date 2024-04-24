<template>
    <ion-page>
        <ion-content>
            <ion-header>
                <score />
            </ion-header>
            <div class="ion-padding">
                <ProgressBar />
                <div class="progress-indicator">120/120 Questions</div>
            </div>
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <div class="ion-padding ion-text-center">
                            <h1>Answer all questions</h1>
                            <div class="border-bottom"></div>
                            <h5>I worry a lot</h5>
                            <ion-text color="medium" class="font-sm">Select One</ion-text>
                        </div>
                        <div class=" ion-padding-horizontal">
                            <ion-radio-group v-model="selectedValue">
                                <ion-item lines="none" class="border-gray ion-margin-vertical" v-for="option in options"
                                    :key="option.value">
                                    <ion-radio :value="option.value"></ion-radio>
                                    <ion-label class="ion-padding-horizontal">{{ option.text }}</ion-label>
                                </ion-item>
                            </ion-radio-group>
                        </div>

                        <div class="button-custom ion-padding">
                            <ion-button size="default" fill="outline" class="button-size">PREVIOUS</ion-button>
                            <ion-button size="default" class="button-size"
                                router-link="/bigProfileResult">FINISH</ion-button>
                        </div>
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
    IonText,
    IonRadioGroup,
    IonButton,
    IonRadio,
    IonContent,
    IonGrid,
    IonRow,
    IonCard,
    IonCol,
    IonPage,
    IonLabel,
    IonItem,
    IonRange,
} from "@ionic/vue";
import score from "@/components/Header/Header.vue";
import ProgressBar from "@/components/ProgressBar/ProgressBar.vue";

const selectedValue = ref(null);
const options = [
    { value: "fully_disagree", text: "Fully disagree" },
    { value: "Disagree", text: "Disagree" },
    { value: "Neutral", text: "Neutral" },
    { value: "Agree", text: "Agree" },
    { value: "Fully Agree", text: "Fully Agree" }
];
</script>

<style scoped>

ion-item.border-gray:hover {
    border: 1px solid #a5ce3e;
    color: #a5ce3e;
    background-color: #b7ff00;
     --background: #f2f8e3;
}

ion-item.border-gray {
    border-radius: 5px;
    border: 1px solid #f2f2f2;
    background: #fcfcfc;
}

.border-bottom {
    width: 100%;
    height: 1px;
    background: #f2f2f2;
    margin-top: 16px;
}

ion-button {
    width: 100%;
}
.button-custom {
    display: flex;
    gap: 29px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

.progress-indicator {
    text-align: right;
    padding-right: 14px;
    color: #7c7c7c;
    font-size: 12px;
}

</style>

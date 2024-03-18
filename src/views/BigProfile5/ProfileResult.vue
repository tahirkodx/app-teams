<template>
    <ion-page>
        <ion-content>
            <ion-header>
                <score />
            </ion-header>
            <ion-card class="gray-card ion-padding-start ion-padding-end">
                <ion-card-header>
                    <ion-card-title>Big 5 Profile:</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    Lorem ipsum dolor sit amet consectetur. Faucibus urna facilisis tellus donec bibendum velit. Non
                    tincidunt nulla ultrices lobortis.
                </ion-card-content>
            </ion-card>
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-padding-start ion-padding-end">
                        <div v-for="(section, index) in sections" :key="index">
                            <ion-label class="custom-class">{{ section.title }}</ion-label>
                            <div class="custom-class">
                                <ion-label class="ion-text-start" :style="{ color: section.options[0].color }">{{ section.options[0].name }}</ion-label>
                                <ion-label class="ion-text-end" :style="{ color: section.options[1].color }">{{ section.options[1].name }}</ion-label>
                            </div>
                            <ion-range></ion-range>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-button expand="block" fill="solid" class="ion-padding">RETAKE TEST</ion-button>
            <ion-button expand="block" fill="outline" class="ion-padding top-content">GO BACK TO HOMEPAGE</ion-button>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
    IonHeader,
    IonButton,
    IonContent,
    IonGrid,
    IonRow,
    IonCard,
    IonCol,
    IonPage,
    IonCardContent,
    IonCardHeader,
    IonRange
} from "@ionic/vue";
import score from "@/components/Header/Header.vue";
const sections = [
    {
        title: 'Conscientiousness', options: [{ name: 'Efficient/Organised', color: '#2C3AD180' },
        { name: 'Extravagant/Careless', color: '#808080'}]
    },
    {
        title: 'Agreeableness', options: [{ name: 'Friendly/Compassionate', color: '#808080' },
        { name: 'Critical/Rational', color: '#2C3AD180' }]
    },
    {
        title: 'Neuroticism', options: [{ name: 'Sensitive/Nervous', color: '#2C3AD180' },
        { name: 'Resilient/Confident', color: '#808080' }]
    },
    {
        title: 'Openness to experience', options: [{ name: 'Inventive/Curious', color: '#808080' },
        { name: 'Consistent/Cautious', color: '#2C3AD180' }]
    },
    {
        title: 'Extraversion', options: [{ name: 'Outgoing/Energetic', color: '#2C3AD180' },
        { name: 'Solitary/Reserved', color: '#808080' }]
    }
]
</script>

<style scoped>
ion-card-content {
    display: flex;
    color: #666;
    font-size: 12px;
    margin-top: -8px;
}

ion-card-title {
    font-size: 16px;
    letter-spacing: 0.15px;
}

ion-card {
    width: auto;
    margin-right: -20px;
    margin-left: -5px;
    margin-top:24px;
    margin-bottom: 0px;
    box-shadow: none;
    background-color: #f2f2f2;
}

ion-range {
    --bar-background: #2C3AD133;
    --bar-background-active: #2C3AD133;
    --bar-height: 10px;
    --bar-width: 20px;
    --bar-border-radius: 10px;
    --knob-background: #2C3AD180;
    --knob-size: 25px;
    --knob-border-color: 2px solid gray;
    --knob-border-radius: 80%;
}

.custom-class {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    margin-bottom: -8px;
    font-size: 12px;
}

.top-content {
    margin-top: -20px;
}
</style>


import { IonRange } from '@ionic/vue';
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
                        <div>
                            <ion-lable class="custom-class">
                                Conscientiousness
                            </ion-lable>
                            <div class="custom-class">
                                <ion-lable class=" ion-text-start custom-color">Efficient/Organised</ion-lable>
                                <ion-lable class="ion-text-end">Extravagant/Careless</ion-lable>
                            </div>
                            <ion-range></ion-range>
                        </div>
                        <div>
                            <ion-lable class="custom-class">
                                Agreeableness
                            </ion-lable>
                            <div class="custom-class ">
                                <ion-lable class=" ion-text-start">Friendly/Compassionate</ion-lable>
                                <ion-lable class="ion-text-end  custom-color">Critical/Rational</ion-lable>
                            </div>
                            <ion-range></ion-range>
                        </div>
                        <div>
                            <ion-lable class="custom-class">
                                Neuroticism:
                            </ion-lable>
                            <div class="custom-class ">
                                <ion-lable class=" ion-text-start custom-color">Sensitive/Nervous:</ion-lable>
                                <ion-lable class="ion-text-end">Resilient/Confident</ion-lable>
                            </div>
                            <ion-range></ion-range>
                        </div>
                        <div>
                            <ion-lable class="custom-class">
                                Openness to experience:
                            </ion-lable>
                            <div class="custom-class ">
                                <ion-lable class=" ion-text-start ">Inventive/Curious</ion-lable>
                                <ion-lable class="ion-text-end custom-color">Consistent/Cautious</ion-lable>
                            </div>
                            <ion-range></ion-range>
                        </div>
                        <div>
                            <ion-lable class="custom-class">
                                Extraversion:
                            </ion-lable>
                            <div class="custom-class ">
                                <ion-lable class=" ion-text-start custom-color">Outgoing/Energetic</ion-lable>
                                <ion-lable class="ion-text-end">Solitary/Reserved</ion-lable>
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
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
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

</script>

<style scoped>
ion-toolbar {
    --background: #fff;
    --padding-start: 8px;
    --padding-end: 20px;
}

ion-card-content {
    display: flex;
    color: #666;
    font-size: 12px;
    margin-top: -8px;
}

ion-card-title {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.15px;
}

ion-card {
    width: auto;
    margin-right: -20px;
    margin-left: -5px;
    margin-top: -8px;
    margin-bottom: 0px;
    box-shadow: none;
    background: #aed351;
}

ion-range {
    --bar-background: #2C3AD133;
    --bar-background-active: #2C3AD133;
    --bar-height: 10px;
    --bar-width: 20px;
    --bar-border-radius: 10px;
    --knob-background: #2C3AD180;
    --knob-size:25px;  
    --knob-border-color: 2px solid gray;
    --knob-border-radius: 80%;
  
}

ion-lable {
    color: #808080;
    font-size: 12px;
}

.gray-card {
    background-color: #f2f2f2;
    margin-top: 24px;
}

.custom-color {
    color: rgba(44, 58, 209, 0.50);
}

.custom-class {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    margin-bottom: -8px;
}

.top-content {
    margin-top: -20px;
}
</style>


<template>
    <ion-page>
        <ion-content>
            <ion-header>
                <score />
            </ion-header>
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-padding-start ion-margin-top">
                        <ion-text class="font-lg">Set Change Tranformation</ion-text>
                        <div class="text-container flex ion-margin-top ion-padding-top ion-padding-end">
                            <ion-text>
                                You increase your leadership capacity by taking on core challenges. Core challenges are
                                challenges that:
                            </ion-text>
                            <ion-text class="ion-padding-horizontal flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="4" viewBox="0 0 2 2"
                                    fill="none">
                                    <circle cx="1" cy="1" r="1" fill="#4D4D4D" />
                                </svg>
                                <h6 class="ion-margin-start">Are resilient - they do not seem to go away
                                    no matter how much energy you put into them</h6>
                            </ion-text>
                            <ion-text class="ion-padding-horizontal flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="4" viewBox="0 0 2 2"
                                    fill="none">
                                    <circle cx="1" cy="1" r="1" fill="#4D4D4D" />
                                </svg>
                                <h6 class="ion-margin-start ">Represent in multiple areas of life - they do not confine
                                    themselves to one area in life.</h6>
                            </ion-text>
                            <ion-text class="custom-text">
                                Do you have such a challenge? use the button below
                            </ion-text>
                        </div>
                        <div class="button-custom ion-padding">
                            <div class="border text-sm">But If no, Create commitment by clicking on this
                                <ion-icon :icon="arrowForwardOutline" class="ion-padding-start"></ion-icon>
                            </div>
                            <ion-button size="default" router-link="/createRecurrent">SET CHANGE
                                TRANSFORMATION</ion-button>
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
    IonButton,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonPage,
} from "@ionic/vue";
import score from "@/components/Header/Header.vue";
import { arrowForwardOutline } from "ionicons/icons";
</script>

<style scoped>
ion-text {
    color: #4D4D4D;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
}

ion-button {
    width: 100%;
    height: 43px;
}

ion-icon {
    width: 20px;
    height: 20px;
    color: var(--tietiary, rgba(44, 58, 209, 0.50));
}

.border {
    display: inline-flex;
    padding: 16px 20px;
    gap: 4px;
    margin-bottom: 12px;
    color: #4D4D4D;
    font-size: 12px;
    line-height: 16px;
    border-top: 1px solid #F2F2F2;
    border-bottom: 1px solid #F2F2F2;
}

.button-custom {
    gap: 29px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

.flex {
    display: flex;
}

.items-center {
    align-items: center;
}

.font-lg {
    color: var(--black, #000);
    font-size: 22px;
    line-height: 28px;
}

.text-container {
    flex-direction: column;
    gap: 20px;
}

.custom-text {
    color: var(--tietiary, rgba(44, 58, 209, 0.50));
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.1px;
}
</style>
<template>
    <ion-page>
        <ion-content>
            <ion-header>
                <score />
            </ion-header>
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-padding-start ion-margin-top">
                        <ion-text class="font-lg">Create Recurrent Survey Schedule</ion-text>
                        <div class="text-container ion-padding-top ion-padding-end">
                            <ion-text>
                                Using the Epicus app your team culture should improve. </ion-text>
                            <ion-text class="ion-padding-end">
                                Create recurrent surveys to keep measuring your team culture over time and Get
                                up-to-date exercise suggestions.
                            </ion-text>
                        </div>
                        <div class="button-custom ion-padding">
                            <ion-button size="default" router-link="/scheduleNow">SCHEDULE FOR LATER</ion-button>
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

.button-custom {
    display: flex;
    gap: 29px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

.text-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.font-lg {
    color: var(--black, #000);
    font-size: 22px;
    line-height: 28px;
}
</style>
<template>
    <ion-page>
        <ion-content>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-icon :icon="arrowBack" class="icon-size ion-padding-start"></ion-icon>
                </ion-buttons>
            </ion-toolbar>
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-text-center ion-padding">
                        <ion-text>
                            <h6 class="text-sm">Your company profile is set</h6>
                            <h5 class="ion-padding-vertical">Welcome</h5>
                            <h6 class=" custom-style ion-padding">
                                Invite your team members to your team space at Epicus
                            </h6>
                        </ion-text>
                        <ion-button expand="block">send invite</ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
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
    IonPage,
    IonImg,
    IonContent,
    IonGrid
} from "@ionic/vue";
import {
    arrowBack,
} from "ionicons/icons";
</script>
<style scoped>
ion-img {
    width: 100%;
}

ion-text {
    padding: 16px 26px;
}

.icon-size {
    width: 24px;
    height: 24px;
    color: #757575;
}

.custom-style {
    color: #404040;
    line-height: 20px;
    letter-spacing: 0.25px;
}

.text-sm {
    color: var(--secondary, #FF8512);
    letter-spacing: 0.15px;
    margin-top: -12px;
}
</style>
    
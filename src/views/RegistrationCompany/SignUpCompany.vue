<template>
    <ion-page>
        <ion-content>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-icon :icon="arrowBack" class="icon-size ion-padding-start"></ion-icon>
                    <ion-label>
                        <h1 class="text-black ion-padding">Join Epicus</h1>
                    </ion-label>
                </ion-buttons>
            </ion-toolbar>
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-text-center ion-padding">
                        <ion-text>
                            <h3 class="text-sm ion-padding">Dianne Russell <span class="blue-text">(danielrussel
                                    @google.com) </span>has invited you to join the team
                                leadership training platform (Epicus). Sign Up now to start growing your leadership level
                            </h3>
                        </ion-text>
                        <ion-button expand="block">SIGN UP</ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {
    IonButton,
    IonToolbar,
    IonIcon,
    IonButtons,
    IonLabel,
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
ion-text {
    padding: 16px 26px;
}

.icon-size {
    width: 24px;
    height: 24px;
    color: #757575;
}

.text-sm {
    color: #616161;
    line-height: 24px;
    letter-spacing: 0.15px;
    margin-top: 42px;
}

.blue-text {
    color: #0D99FF;
}
</style>
    
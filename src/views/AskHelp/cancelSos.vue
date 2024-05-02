<template>
    <ion-page>
        <Header is-back-button router-link="sendSos" />
        <ion-content>
            <ion-row class="ion-margin-top">
                <ion-col class="ion-padding">
                    <ion-text class="font-medium ion-padding">Send SOS</ion-text>
                    <ion-label class="custom-container ion-text-center ion-margin-vertical">
                        <ion-text class="font-lg">Sending request</ion-text>
                        <ion-text class="font-sm ion-padding">wait while we get you help or press cancel
                            to stop the SOS.</ion-text>
                        </ion-label>
                    <ion-img src="/src/pictures/Frame 2609454.svg" alt="Finished Success" class="ion-padding"></ion-img>
                    <ion-button expand="block" class="ion-margin-top ion-padding-vertical" router-link="/anotherSos"> Cancel sos
                        request</ion-button>
                </ion-col>
            </ion-row>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IonPage, IonContent, IonRow, IonCol, IonButton, IonText,} from "@ionic/vue";
import Header from "@/components/Header/Header.vue";
</script>

<style scoped>
ion-img {
    width: 100%;
}

ion-button {
    --background: rgba(44, 58, 209, 0.50);
    margin-top: 60px;
}

.custom-container {
    display: flex;
    flex-direction: column;
}

.font-lg {
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.font-sm {
    color: #666;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
}

.font-medium {
    font-size: 22px;
    line-height: 28px;
    margin-left: -16px;
    padding-bottom:10px;
}
</style>
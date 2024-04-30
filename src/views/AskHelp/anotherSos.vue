<template>
    <ion-page>
        <Header is-back-button router-link="cancelSos" />
        <ion-content>
            <ion-row class="ion-margin-top">
                <ion-col class="ion-padding">
                    <ion-text class="font-medium  ion-padding">Send SOS</ion-text>
                    <div class="custom-container ion-text-center ion-margin-vertical">
                        <ion-text class="font-lg">Help sent</ion-text>
                        <ion-text class="font-sm ">A coach has just come to your rescue.</ion-text>
                    </div>
                    <div class="title-line"></div>
                    <ion-img src="/src/pictures/success.svg" alt="Finished Success"></ion-img>
                    <ion-button expand="block" class="ion-margin-top ion-padding-vertical" router-link="/anotherSos">
                        SEND ANOTHER SOS</ion-button>
                    <ion-button expand="block" fill="outline" class=" ion-padding-bottom" router-link="/anotherSos">
                        GO BACK TO HOMEPAGE</ion-button>
                </ion-col>
            </ion-row>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IonPage, IonContent, IonRow, IonCol, IonButton, IonText, IonImg } from "@ionic/vue";
import Header from "@/components/Header/Header.vue";
</script>

<style scoped>
ion-img {
    width: 100%;
    height: 200px;
    margin-top: 80px;
}

.custom-container {
    display: flex;
    flex-direction: column;
}

.font-lg {
    color: var(--tietiary, rgba(44, 58, 209, 0.50));
    font-size: 22px;
    line-height: 28px;
}

.font-sm {
    color: #666;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
}

.title-line {
    border-bottom: 1px solid rgba(242, 242, 242, 0.95);
    margin-top: 15px;
}

.font-medium {
    font-size: 22px;
    line-height: 28px;
    margin-left: -16px;
    padding-bottom: 10px;
}
</style>
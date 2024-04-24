<template>
    <ion-page>
        <ion-content>
            <ion-header>
                <score />
            </ion-header>
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-padding-start ion-margin-top">
                        <ion-text class="font-lg">Create Commitment</ion-text>
                        <div class="text-container ion-padding-top ion-padding-end">
                            <ion-text>
                                You do not have a core change challenge yet. No worry. We will help you push yourself to improve until you hit upon your core challenge.</ion-text>
                            <ion-text class="ion-padding-end">
                            For now, let's find some commitments you can make to improve your leadership.
                            </ion-text>
                        </div>
                        <div class="button-custom ion-padding">
                            <ion-button size="default" router-link="/commintentList">Create commitments</ion-button>
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
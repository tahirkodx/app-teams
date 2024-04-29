<template>
    <ion-page>
        <Header is-back-button />
        <ion-content>
            <ion-row>
                <ion-col class="ion-padding">
                    <div class="custom-container">
                        <ion-text class="font-lg">Settings</ion-text>
                        <ion-text class="font-sm">For important updates regarding your Epicus activities.</ion-text>
                        <div class="ion-padding custom-container">
                            <div class="ion-content-justify-between ion-padding-bottom">
                                <ion-text class="font-sm">Notification Settings</ion-text>
                                <ion-icon :icon="arrowForward"></ion-icon>
                            </div>
                            <div class="ion-content-justify-between ion-padding-bottom">
                                <ion-text class="font-sm">Password Change</ion-text>
                                <ion-icon :icon="arrowForward"></ion-icon>
                            </div>
                            <div class="ion-content-justify-between ion-padding-bottom">
                                <ion-text class="font-sm">Profile edit</ion-text>
                                <ion-icon :icon="arrowForward"></ion-icon>
                            </div>
                        </div>
                    </div>
                </ion-col>
            </ion-row>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {
    IonPage,
    IonContent,
    IonRow,
    IonCol,
    IonIcon,
    IonText
} from "@ionic/vue";
import Header from "@/components/Header/Header.vue";
import { arrowForward } from "ionicons/icons";

</script>
<style scopped>
.custom-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.font-lg {
    color: #000;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
}

.ion-content-justify-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

ion-icon {
    width: 20px;
    height: 20px;
    color: #666666;
}

.font-sm {
    color: #808080;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;
}
</style>
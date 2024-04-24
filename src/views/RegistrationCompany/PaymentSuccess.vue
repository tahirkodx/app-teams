<template>
    <ion-page>
        <ion-content>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-icon :icon="arrowBack" class="icon-size ion-padding-start"></ion-icon>
                    <ion-label class="text-black ion-padding">
                     Pro plan
                    </ion-label>
                </ion-buttons>
            </ion-toolbar>
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-text-center ion-padding">
                        <ion-text class="text-sm">
                          Payment is successful                         
                        </ion-text>
                        <ion-img src="/src/pictures/successful.svg" alt="Finished Success" class="ion-padding"></ion-img>
                        <ion-text class="custom-style"> 
                            Lorem ipsum dolor sit amet consectetur. Ac adipiscing lacus leo ut q
                            </ion-text>
                        <ion-button expand="block" class="ion-margin-top">PROCEED TO ACCOUNT</ion-button>
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
.icon-size {
    width: 24px;
    height: 24px;
    color: #757575;
}
.custom-style {
    color: #808080;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
}
.text-sm {
    color: var(--main-green, #A5CE3E);
    font-size: 22px;
    line-height: 28px;
    margin-top:22px;
}
</style>
    
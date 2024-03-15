<template>
    <ion-page>
        <ion-content>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-icon :icon="arrowBack" class="icon-size ion-padding-start"></ion-icon>
                    <ion-label>
                        <h1 class="text-black ion-padding">Pro plan</h1>
                    </ion-label>
                </ion-buttons>
            </ion-toolbar>
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-text-center ion-padding">
                        <ion-text>
                            <h3 class="text-sm">Payment is successful</h3>                          
                        </ion-text>
                        <ion-img src="/src/pictures/successful.svg" alt="Finished Success" class="ion-padding"></ion-img>
                        <ion-text> <h6 class="custom-style">
                            Lorem ipsum dolor sit amet consectetur. Ac adipiscing lacus leo ut q
                            </h6></ion-text>
                        <ion-button expand="block">PROCEED TO ACCOUNT</ion-button>
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
    /* height:100%; */
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

ion-text {
    padding: 16px 26px;
}

.text-sm {
    color: var(--main-green, #A5CE3E);
    font-size: 22px;
    line-height: 28px;
    margin-top:22px;
}
</style>
    
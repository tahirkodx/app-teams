<template>
    <ion-page>
        <ion-content>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-icon :icon="arrowBack" class="icon-size"></ion-icon>
                    <ion-label class="ion-padding-start">
                        <h1> Pro plan</h1>
                    </ion-label>
                </ion-buttons>
            </ion-toolbar>
            <ion-row>
                <ion-col class="ion-padding">
                    <ion-text class="ion-margin-start ion-text-center">
                        <h5>How many users will use Epicus on a monthly basis?</h5>
                    </ion-text>
                    <ion-accordion-group expand="" class="ion-group ion-padding">
                        <ion-accordion value="first">
                            <ion-item slot="header" class="text-black">
                                <ion-label>100</ion-label>
                            </ion-item>
                        </ion-accordion>
                    </ion-accordion-group>
                    <ion-list class="ion-padding">
                        <h5>
                            What is your budget for ?
                        </h5>
                        <div class="checkbox-container flex">
                            <ion-checkbox label-placement="end">Label at the End</ion-checkbox>
                            <ion-checkbox label-placement="end">Label at the End</ion-checkbox>
                            <ion-checkbox label-placement="end">Label at the End</ion-checkbox>
                        </div>
                    </ion-list>
                    <ion-list class="ion-padding">
                        <h5>
                            Number of coaching hours?
                        </h5>
                        <div class="checkbox-container flex">
                            <ion-checkbox label-placement="end">No budget</ion-checkbox>
                            <ion-checkbox label-placement="end">Capped budget</ion-checkbox>
                            <ion-checkbox label-placement="end">
                                <span>Capped budget <span class="border-box">$0</span></span>
                            </ion-checkbox>
                        </div>
                    </ion-list>
                    <div class="ion-padding ion-margin-top ion-text-center">
                        <h2 class="font-md ion-margin-bottom">Coaching Amount</h2>
                        <span class="font-lg text-black">$100/month</span>
                    </div>
                    <ion-button class="custom-button custom-color" expand="block">PROCEED</ion-button>
                </ion-col>
            </ion-row>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonRow,
    IonCol,
    IonPage,
    IonLabel,
    IonText,
    IonCheckBox
} from "@ionic/vue";
import {
    arrowBack,
    ellipse
} from "ionicons/icons";
</script>

<style scoped>
ion-toolbar {
    --background: #fff;
    --padding-start: 8px;
    --padding-end: 20px;
}

ion-checkbox::before {
    content: none;
}

ion-checkbox {
    --border-radius: 50%;
}

ion-item {
    --background: #ECECEC;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-top: 23px;
}

ion-list {
    margin-left: 6px;
}

.bg-gray {
    --background: #959595;
}


.text-white {
    color: var(--Neutral-100, #FFF);
}

.flex {
    display: flex;
}

.item-center {
    justify-content: center;
    align-items: center;
}

.icon-size {
    width: 24px;
    height: 24px;
    color: #757575;
}

.bg-light {
    background: white;
    border: none;
}

.font-lg {
    font-size: 37px;
}

.font-md {
    color: var(--main-green, #A5CE3E);
    font-size: 22px;
}

.ion-margin-top {
    margin-top: 40px;
}

.custom-button {
    height: 72px;
    margin-left: 23px;
    margin-right: 20px;
}

.custom-color {
    --background: var(--secondary, #FF8512);
}

.checkbox-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    margin-top: 26px;
}

.border-box {
    display: inline-flex;
    padding: 12px 8px;
    gap: 4px;
    width: 123px;
    border-radius: 5px;
    background: #F2F2F2;
    margin-left: 20px;
}
</style>

<template>
    <ion-page>
        <ion-content>
            <ion-toolbar class="ion-padding-start">
                <ion-buttons slot="start">
                    <ion-icon :icon="arrowBack" class="icon-size"></ion-icon>
                    <ion-label class="ion-padding-start">
                        <h1>Pro plan</h1>
                    </ion-label>
                </ion-buttons>
            </ion-toolbar>
            <ion-row>
                <ion-col class="ion-padding">
                    <ion-text class="ion-margin-start ion-text-center">
                        <h5>How many users will use Epicus on a monthly basis?</h5>
                    </ion-text>
                    <ion-accordion-group class="ion-group ion-padding">
                        <ion-accordion value="first">
                            <ion-item slot="header" class="text-black ion-margin-top">
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
                                <ion-text>Capped budget </ion-text><ion-input class="border-box" fill="solid" id="inputField" placeholder="$0"></ion-input>
                            </ion-checkbox>
                        </div>
                    </ion-list>
                    <div class="ion-padding ion-margin-top ion-text-center">
                        <h1 class="text-green ion-margin-bottom">Coaching Amount</h1>
                        <span class="font-lg">$100/month</span>
                    </div>
                    <ion-button class="custom-button" expand="block">PROCEED</ion-button>
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
    IonInput,
    IonButton,
    IonIcon,
    IonContent,
    IonRow,
    IonCol,
    IonPage,
    IonLabel,
    IonText,
    IonCheckbox,
    IonList,
    IonAccordion,
    IonAccordionGroup,
    IonItem
} from "@ionic/vue";
import {
    arrowBack,
    ellipse
} from "ionicons/icons";
</script>

<style scoped>
ion-checkbox {
    --border-radius: 50%;
}

ion-item {
    --background: #ECECEC;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.bg-gray {
    --background: #959595;
}

.flex {
    display: flex;
}

.icon-size {
    width: 24px;
    height: 24px;
    color: #757575;
}
.font-lg {
    font-size: 37px;
}

.text-green {
    color: var(--main-green, #A5CE3E);
}

.ion-margin-top {
    margin-top: 40px;
}

.custom-button {
    height: 72px;
    margin-left: 23px;
    margin-right: 20px;
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
    width: 50%;
    border-radius: 5px;
}
</style>

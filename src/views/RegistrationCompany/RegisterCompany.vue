<template>
    <ion-page>
        <ion-content>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-icon :icon="arrowBack" class="icon-size ion-padding-start"></ion-icon>
                    <ion-label class="text-black ion-padding">
                        <h1>Register your company</h1>
                    </ion-label>
                </ion-buttons>
            </ion-toolbar>
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-text-center ion-padding">
                        <ion-text class="text-sm">
                            Fill in organisation details and set admin password below
                        </ion-text>
                        <div class="input-container flex flex-col">
                            <ion-label for="inputField">Organisation name*</ion-label>
                            <ion-input fill="solid" id="inputField"></ion-input>
                            <div class="input-row-end flex">
                                <div class="row custom-width flex flex-col">
                                    <ion-label for="inputField">Email domain*</ion-label>
                                    <ion-input fill="solid" id="inputField"></ion-input>
                                </div>
                                <div class="row flex flex-col">
                                    <ion-button class="custom-button">Add+</ion-button>
                                </div>
                            </div>
                            <div class="input-row flex">
                                <div class="row flex flex-col">
                                    <ion-label for="firstNameInput">First name*</ion-label>
                                    <ion-input fill="solid" id="firstNameInput"></ion-input>
                                </div>
                                <div class="row flex flex-col">
                                    <ion-label for="lastNameInput">Last name*</ion-label>
                                    <ion-input fill="solid" id="lastNameInput"></ion-input>
                                </div>
                            </div>
                            <ion-label for="inputField">Email ID*</ion-label>
                            <ion-input fill="solid" id="inputField"></ion-input>

                            <ion-label for="inputField">Admin password*</ion-label>
                            <ion-input fill="solid" id="inputField"><ion-button fill="clear" slot="end"
                                    aria-label="Show/hide">
                                    <ion-icon slot="icon-only" :icon="eyeOffOutline" aria-hidden="true"></ion-icon>
                                </ion-button> </ion-input>
                            <ion-text class="text-xs">Must contain minimum 8 letters and a special character</ion-text>

                            <ion-label for="inputField">Conform password*</ion-label>
                            <ion-input fill="solid" id="inputField"><ion-button fill="clear" slot="end"
                                    aria-label="Show/hide">
                                    <ion-icon slot="icon-only" :icon="eyeOffOutline" aria-hidden="true"></ion-icon>
                                </ion-button> </ion-input>
                        </div>
                        <ion-button expand="block" class="ion-padding-top">Create account</ion-button>
                        <ion-text>
                            <h5 class="custom-style">
                                By continuing you agree for our
                                <span class="blue-text">Terms and conditions</span>
                                and
                                <span class="blue-text">Privacy policy</span>
                            </h5>
                        </ion-text>
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
    IonContent,
    IonGrid,
    IonInput,
    IonLabel
} from "@ionic/vue";
import {
    arrowBack,
    eyeOffOutline
} from "ionicons/icons";
</script>

<style scoped>
ion-icon {
    color: rgba(73, 69, 79, 1);
}

ion-label {
    color: rgba(128, 128, 128, 1);
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
}

.icon-size {
    width: 24px;
    height: 24px;
    color: #757575;
}

.custom-style {
    line-height: 20px;
    margin-top: -2px;
    letter-spacing: 0.1px;
}

.custom-button {
    width: 75px;
    height: 36px;
}

.text-gray {
    color: #616161;
}

.flex {
    display: flex;
}

.flex-col {
    flex-direction: column;
    align-items: flex-start;
}

.text-sm {
    color: #616161;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    margin-top: -22px;
    margin-bottom: -23px;
}

.row {
    gap: 5px;
}

.input-container {
    gap: 8px;
}

.input-container label {
    margin-bottom: 8px;
}

.input-row-end {
    align-items: flex-end;
    gap: 20px;
}

.input-row {
    gap: 15px;
}

.custom-width {
    width: 227px;
}

.text-xs {
    color: #808080;
    font-size: 11px;
    line-height: 16px;
    margin-top: -4px;
}

.blue-text {
    color: #0D99FF;
    text-decoration: underline;
}
</style>
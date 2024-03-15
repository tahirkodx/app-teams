<template>
    <ion-page>
        <ion-content>
            <ion-header>
                <score />
            </ion-header>
            <!-- <progress-bar/> -->
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-text class="ion-padding ion-text-center">
                            <h1>Answer all questions</h1>
                            <div class="border-bottom"></div>
                            <h5>I worry alot</h5>
                            <h4 class="font-sm">Select One</h4>
                        </ion-text>
                        <div class=" ion-padding-horizontal">
                            <ion-radio-group>
                                <ion-item class="border-gray ion-margin-vertical">
                                    <ion-radio value="fully_disagree"></ion-radio>
                                    <ion-label class="ion-padding-horizontal">Fully disagree</ion-label>
                                </ion-item>
                                <ion-item class="border-gray  ion-margin-vertical">
                                    <ion-radio value="Disagree"></ion-radio>
                                    <ion-label class="ion-padding-horizontal">Disagree</ion-label>
                                </ion-item>
                                <ion-item class="border-gray ion-margin-vertical">
                                    <ion-radio value="Neutral"></ion-radio>
                                    <ion-label class="ion-padding-horizontal">Neutral</ion-label>
                                </ion-item>
                                <ion-item class="border-gray  ion-margin-vertical">
                                    <ion-radio value="Agree"></ion-radio>
                                    <ion-label class="ion-padding-horizontal">Agree</ion-label>
                                </ion-item>
                                <ion-item class="border-gray  ion-margin-vertical">
                                    <ion-radio value="Fully Agree"></ion-radio>
                                    <ion-label class="ion-padding-horizontal">Fully Agree</ion-label>
                                </ion-item>
                            </ion-radio-group>
                        </div>

                        <div class="button-custom">
                            <ion-button size="default" fill="outline" class="button-size">PREVIOUS</ion-button>
                            <ion-button size="default" class="button-size" router-link="/profileResult">fINISH</ion-button>
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
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonGrid,
    IonRow,
    IonCard,
    IonCol,
    IonPage,
    IonCardContent,
    IonCardHeader,
    IonRange
} from "@ionic/vue";
import score from "@/components/Header/Header.vue";
</script>
<style scoped>
.border-bottom {
    width: 100%;
    height: 1px;
    background: #F2F2F2;
    margin-top: 16px;
}

ion-item {
    --display: flex;
    --width: 100%;
    --padding: 12px 20px;
    --align-items: center;
    --gap: 8px;
    --border-style: none;
}

ion-item:hover {
    border: 1px solid #A5CE3E;
    --background-color: #F2F8E3; 
}
ion-item.border-gray:active {
    border: 1px solid #A5CE3E; 
    --background-color: #F2F8E3; 
}
.ion-margin-vertical {
    margin-bottom: -5px;
}

.text-color {
    color: #333;
}

h1 {
    font-size: 22px;
    line-height: 28px;
    margin-top: 60px;
}

h5 {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
}

h4 {
    color: #999;
    margin-top: -8px;
}

.font-sm {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.25px;
}


.border-container {
    display: flex;
    width: 100%;
    padding: 12px 20px;
    align-items: center;
    gap: 8px;
}

/* .border-green {
    border-radius: 5px;
    border: 1px solid var(--main-green, #A5CE3E);
    --background: #F2F8E3;
} */

.border-gray {
    border-radius: 5px;
    border: 1px solid #f2f2f2;
    background: #FCFCFC;
}

.button-custom {
    display: flex;
    padding: 14px 20px;
    justify-content: center;
    align-items: center;
    gap: 29px;
    position: fixed;
    bottom: 0; 
    left: 0; 
    width: 100%; 
}

.button-size {
    width: 100%;
}
</style>
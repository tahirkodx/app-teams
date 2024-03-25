<template>
    <ion-page>
        <ion-content>
            <ion-header>
                <score />
            </ion-header>
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-padding-start ion-margin-top">
                        <ion-text class="font-lg">Create Personal Transformation</ion-text>
                        <div class="text-container flex ion-margin-top ion-padding-top ion-padding-end">
                            <ion-text>
                                So you've got a personal transformation challenge. Great! Resolving it is the way to
                                grow your leadership level.
                            </ion-text>
                            <ion-text>
                                To resolve your change challenge we use a framework based on the work on Harvard's
                                Robert Kegan and Lisa Lahey [footnote].
                            </ion-text>
                            <ion-text>
                                In the next page you will fill in:
                            </ion-text>
                            <ion-text class="ion-padding-horizontal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="4" viewBox="0 0 2 2"
                                    fill="none">
                                    <circle cx="1" cy="1" r="1" fill="#4D4D4D" />
                                </svg>
                                <span class="ion-margin-start">Your commitment goal.</span>
                            </ion-text>
                            <ion-text class="ion-padding-horizontal flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="4" viewBox="0 0 2 2"
                                    fill="none">
                                    <circle cx="1" cy="1" r="1" fill="#4D4D4D" />
                                </svg>
                                <h6 class="ion-margin-start ">What would you worry about when you would not do the
                                    behavior that goes against your commitment goal.</h6>
                            </ion-text>
                            <ion-text class="ion-padding-horizontal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="4" viewBox="0 0 2 2"
                                    fill="none">
                                    <circle cx="1" cy="1" r="1" fill="#4D4D4D" />
                                </svg>
                                <span class="ion-margin-start">What is your hidden competing commitment.</span>
                            </ion-text>
                            <ion-text class="ion-padding-horizontal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="4" viewBox="0 0 2 2"
                                    fill="none">
                                    <circle cx="1" cy="1" r="1" fill="#4D4D4D" />
                                </svg>
                                <span class="ion-margin-start">What are your big assumptions.</span>
                            </ion-text>
                            <ion-text>
                                Writing this out will give you clear insights into why it is hard to change your
                                behaviour in the first place.
                            </ion-text>
                            <ion-text>
                                Based on how you filled in the framework we will suggest you exercises to achieve your
                                commitment.
                            </ion-text>
                            <ion-text class="text-sm">
                                Source: Kegan, R., & Lahey, L. L. (2009). Immunity to change. Harvard Business Review
                                Press.
                            </ion-text>
                        </div>
                        <div class="button-custom ion-padding">
                            <ion-button size="default" router-link="/createRecurrent">Create transformation</ion-button>
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

ion-icon {
    width: 20px;
    height: 20px;
    color: var(--tietiary, rgba(44, 58, 209, 0.50));
}

.button-custom {
    gap: 29px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

.flex {
    display: flex;
}

.items-center {
    align-items: center;
}

.font-lg {
    color: var(--black, #000);
    font-size: 22px;
    line-height: 28px;
}

.text-container {
    flex-direction: column;
    gap: 20px;
}

.text-sm {
    font-size: 12px;
}
</style>
<template>
    <ion-page>
        <ion-content>
            <ion-header>
                <score />
            </ion-header>
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-padding-start ion-margin-top">
                        <ion-text class="font-lg">Take The Leadership Test</ion-text>
                        <div class="text-container  ion-padding-top ion-padding-end">
                            <ion-text>
                                To become an Epic leader, you need to grow to leadership level 7.
                            </ion-text>
                            <ion-text>
                                Let's take the leadership test and see where you are currently at, so we can suggest you
                                the improvement commitments you need to grow to level
                            </ion-text>
                            <ion-text>
                                This test might seem rather strange. It is a semi-structured sentence completion test.
                                By the way you finish the upcoming 36 sentences we can extract the way you think and the
                                leadership level you are at. Sounds strange?
                            </ion-text>
                            <ion-text>
                                There is some great science behind it. Just search the web for the "Washington
                                University Sentence Completion Test" or WUSCT.
                            </ion-text>
                        </div>
                        <div class="button-custom ion-padding">
                            <ion-button size="default">tAKE TEST</ion-button>
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
<template>
    <ion-header>
        <score />
    </ion-header>
    <ion-content>
        <ion-grid>
            <ion-row>
                <ion-col class="ion-padding-top ion-padding-start ion-margin-top">
                    <ion-text class="textStyle">New Survey Schedule</ion-text>
                    <div class="text-container flex">
                        <ion-text class="ion-date flex">Start Time:
                            <ion-datetime-button datetime="datetime3"></ion-datetime-button>
                        </ion-text>
                        <ion-modal :keep-contents-mounted="true">
                            <ion-datetime id="datetime3"></ion-datetime>
                        </ion-modal>
                        <ion-accordion-group class="ion-padding-end">
                            <ion-accordion value="first">
                                <ion-item slot="header" color="light">
                                    <ion-label>Time Zone</ion-label>
                                </ion-item>
                                <div class="ion-padding">First Content</div>
                            </ion-accordion>
                        </ion-accordion-group>
                        <ion-text class="ion-date flex">End Time:
                            <ion-datetime-button datetime="datetime4"></ion-datetime-button></ion-text>
                        <ion-modal :keep-contents-mounted="true">
                            <ion-datetime id="datetime4"></ion-datetime>
                        </ion-modal>
                        <ion-text class="text-sm">
                            Response time: 2 days and 3 hours</ion-text>
                    </div>
                </ion-col>
            </ion-row>
        </ion-grid>
        <div class="button-custom flex ion-padding">
            <ion-button fill="outline">Cancel</ion-button>
            <ion-button>Conform</ion-button>
        </div>
    </ion-content>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
    IonHeader,
    IonItem,
    IonAccordion,
    IonAccordionGroup,
    IonModal,
    IonDatetimeButton,
    IonDatetime,
    IonButton,
    IonText,
    IonLabel,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
} from "@ionic/vue";
import score from "@/components/Header/Header.vue";
</script>

<style scoped>
.textStyle {
    font-size: 22px;
    line-height: 28px;
    margin-top: 10px;
}

.flex {
    display: flex;
}

.ion-date {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    color: #4D4D4D;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
}


.text-container {
    flex-direction: column;
    gap: 24px;
    margin-top: 23px;
}

.text-sm {
    color: var(--tietiary, rgba(44, 58, 209, 0.5));
    margin-top: -30px;
    font-size: 12px;
    margin-top: 8px;
}

.button-custom {
    gap: 29px;
    position: fixed;
    bottom: 6px;
    left: 0;
    width: 100%;
}

ion-button {
    width: 100%;
}
</style>
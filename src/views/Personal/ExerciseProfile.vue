<template>
    <ion-page>
        <ion-content>
            <ion-text class="ion-text-center ion-padding">
                <div class="bg-gray">
                    <h2 class="text-bold ion-padding-top">Celebrate and Collaborate</h2>
                    <h6 class="text-bold font-lg">Recognising Individual and
                        Team Achievements</h6> <ion-button expand="block" fill="solid" class="ion-margin ion-padding">ADD
                        EXERCISE</ion-button>
                </div>
            </ion-text>
            <ion-segment v-model="activeTab" value="Description" @ionChange="segmentChanged" class="ion-padding">
                <ion-segment-button value="Description">
                    <ion-label>Description</ion-label>
                </ion-segment-button>
                <ion-segment-button value="Exercises">
                    <ion-label>Exercises</ion-label>
                </ion-segment-button>
            </ion-segment>

            <div class="content">
                <!-- Content based on the active tab -->
                <div v-if="activeTab === 'Exercises'">
                    ...
                </div>
                <div v-if="activeTab === 'Description'">
                    <ion-img src="/src/pictures/player.svg" alt="Finished Success"></ion-img>
                    <ion-grid>
                        <ion-row>
                            <ion-col class="ion-padding">
                                <ion-text class="text-bold">
                                    <p class="box">
                                        Lorem ipsum dolor sit amet consectetur. Aenean integer
                                        vivamus morbi nulla et tincidunt. Platea hac sed nunc est
                                        phasellus. Risus et id mi in. Facilisi tellus facilisis
                                        venenatis amet. Volutpat lobortis phasellus tincidunt
                                        vestibulum volutpat pharetra purus.
                                    </p>
                                </ion-text>
                                <ion-text class="text-bold">
                                    <h6>Exercise Objective:</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Aenean integer
                                        vivamus morbi nulla et tincidunt. Platea hac sed nunc est
                                        phasellus. Risus et id mi in. Facilisi tellus facilisis
                                        venenatis amet. Volutpat lobortis phasellus tincidunt
                                        vestibulum volutpat pharetra purus.
                                    </p>
                                </ion-text>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </div>
            </div>
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
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCard,
    IonCol,
    IonPage,
    IonImg,
    IonLabel,
    IonText,
    IonCardContent,
    IonSegment,
    IonSegmentButton,
} from "@ionic/vue";
const activeTab = ref("Description"); // default active tab
const progress = ref(2);
const segmentChanged = (event) => {
    activeTab.value = event.detail.value;
};
</script>
<style scoped>
ion-segment {
    --background-color: white;
}

ion-segment-button {
    --background-color: white;
    --indicator-box-shadow: none;
    --border-radius: none;
}

ion-segment-button.segment-button-checked {
    /* border-bottom: 2px solid var(--tietiary, rgba(44, 58, 209, 0.50)); */
}

.box {
    border-radius: 5px;
    border: 1px solid var(--main-green, #A5CE3E);
    background: #F2F8E3;
    padding: 10px;
    margin: 0;
}

.text-bold {
    color: #404040;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: 0.25px;
}

.font-lg {
    font-size: 16px;
    color: #7C7C7C;
    margin-bottom: -22px;

}

.bg-gray {
    background-color: #f7f7f7;
}
</style>
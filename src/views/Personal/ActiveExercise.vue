<template>
    <ion-page>
        <ion-content>
            <ion-text class="ion-text-center ion-padding">
                <div class="bg-gray">
                    <h2 class="text-bold ion-padding-top">Celebrate and Collaborate</h2>
                    <h6 class="text-bold font-lg">
                        Recognising Individual and Team Achievements
                    </h6>
                    <h6 class="ion-padding text-bold text-green">Status: Active</h6>
                </div>
            </ion-text>
            <ion-segment v-model="activeTab" value="Description" @ionChange="segmentChanged">
                <ion-segment-button value="Repetition">
                    <ion-label>Repetition</ion-label>
                </ion-segment-button>
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
                    <ion-grid>
                        <ion-row>
                            <ion-col class="ion-padding-start">
                                <h5 class="text-tietiary font-lg">Exercise Details</h5>
                                <div class="icon-container flex-item text-bold bg-gray">
                                    <span>Owner: Ralph Edwards </span>
                                    <span>Created at: 2023-11-06 </span>
                                    <span>Play Type: Team </span>
                                </div>
                                <ion-text class="font-lg">
                                    <span class="ion-padding-bottom">Relevant Academy Lessons:</span>
                                    <ion-list v-for="(lesson, index) in lessons" :key="index" class="text-bold">
                                        <ion-icon :icon="caretForward" class="text-green"></ion-icon>
                                        <ion-label>{{ lesson }}</ion-label>
                                    </ion-list>
                                </ion-text>
                                <ion-lable class="font-lg">
                                    External Materials:
                                    <h6 class="text-blue text-bold">
                                        Www.Loremsitinposuerenuncullamcorperamet.com
                                    </h6>
                                    <h6 class="text-blue text-bold">
                                        Www.Loremsitinposuerenuncullamcorperamet.com
                                    </h6>
                                    <h6 class="text-blue text-bold">
                                        Www.Loremsitinposuerenuncullamcorperamet.com
                                    </h6>
                                </ion-lable>
                                <span class="text-bold">What Is The Status Of Your Excercise?</span>
                                <div class="custom-container flex-item">
                                    <span>Active - 30%</span>
                                </div>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </div>
                <div v-if="activeTab === 'Repetition'">
                    <h5 class="ion-padding">Add New Repetition:</h5>
                    <div class="repetition-controls flex-item flex-column ion-padding">
                        <div class="button-style flex-item ion-justify-content-between">
                            <div class="button-wrapper flex-column flex-item">
                                <ion-label class="text-bold">Amount</ion-label>
                                <div class="button-style flex-item">
                                    <ion-button @click="decrement" class="w-sm">-</ion-button>
                                    <span class="repetition-value">{{ repetitionValue }}</span>
                                    <ion-button @click="increment" class="w-sm">+</ion-button>
                                </div>
                            </div>
                            <div class="button-wrapper flex-column flex-item">
                                <ion-label class="text-bold">Enter Date:</ion-label>
                                <ion-datetime-button datetime="datetime" class="ion-date"></ion-datetime-button>
                                <ion-modal :keep-contents-mounted="true">
                                    <ion-datetime presentation="date" id="datetime" display-format="DD MMM YYYY">
                                    </ion-datetime>
                                </ion-modal>
                            </div>
                        </div>
                        <div class="custom-class flex-item">
                            <ion-lable class="ion-text-start custom-color text-bold">Scores:</ion-lable>
                            <ion-lable class="ion-text-end text-bold">Range: 1-10</ion-lable>
                        </div>
                        <ion-range :value="50" :pin="true"></ion-range>
                        <!-- <ion-textarea></ion-textarea> -->
                    </div>
                    <ion-row>
                        <ion-col>
                            <ion-label class="ion-margin-start">Past Repetition:</ion-label>
                            <ion-list>
                                <ion-item>
                                    <ion-label class="button-style flex-item text-bold ion-justify-content-between">
                                        <span>Repetitions: 10</span>
                                        <span>Average Scores: 6/10
                                            <ion-icon :icon="ellipsisVertical" class="bg-gray"></ion-icon></span>
                                    </ion-label>
                                    <p class="text-bold">
                                        Lorem ipsum dolor sit amet consectetur. Lacinia in posuere
                                        egestas enim tempor praesent in. Amet sit amet sollicitudin
                                        imperdiet odio.
                                    </p>
                                    <span class="text-bold">Thu 17/08/2024</span>
                                </ion-item>
                            </ion-list>
                            <ion-list>
                                <ion-item>
                                    <ion-label class="button-style text-bold flex-item ion-justify-content-between">
                                        <span>Repetitions: 10</span>
                                        <span>Average Scores: 6/10
                                            <ion-icon :icon="ellipsisVertical" class="bg-gray"></ion-icon></span>
                                    </ion-label>
                                    <p class="text-bold">
                                        Lorem ipsum dolor sit amet consectetur. Lacinia in posuere
                                        egestas enim tempor praesent in. Amet sit amet sollicitudin
                                        imperdiet odio.
                                    </p>
                                    <span class="text-bold">Thu 17/08/2024</span>
                                </ion-item>
                            </ion-list>
                            <ion-button expand="block" fill="solid" class="ion-padding">ADD repetition</ion-button>
                        </ion-col>
                    </ion-row>
                </div>
            </div>
            <div v-if="activeTab === 'Description'">
                <ion-img src="/src/pictures/player.svg" alt="Finished Success"></ion-img>
                <ion-grid>
                    <ion-row>
                        <ion-col class="ion-padding">
                            <ion-text class="text-bold">
                                <p class="box">
                                    Lorem ipsum dolor sit amet consectetur. Aenean integer vivamus
                                    morbi nulla et tincidunt. Platea hac sed nunc est phasellus.
                                    Risus et id mi in. Facilisi tellus facilisis venenatis amet.
                                    Volutpat lobortis phasellus tincidunt vestibulum volutpat
                                    pharetra purus.
                                </p>
                            </ion-text>
                            <ion-text class="text-bold">
                                <h6>Exercise Objective:</h6>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Aenean integer vivamus
                                    morbi nulla et tincidunt. Platea hac sed nunc est phasellus.
                                    Risus et id mi in. Facilisi tellus facilisis venenatis amet.
                                    Volutpat lobortis phasellus tincidunt vestibulum volutpat
                                    pharetra purus.
                                </p>
                            </ion-text>
                        </ion-col>
                    </ion-row>
                </ion-grid>
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
    IonDatetime,
    IonDatetimeButton,
    IonModal,
} from "@ionic/vue";
import { ellipsisVertical, caretForward } from "ionicons/icons";
const activeTab = ref("Description");
const progress = ref(2);
const repetitionValue = ref(0);
const lessons = ref(["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"]);
const increment = () => {
    repetitionValue.value++;
};

const decrement = () => {
    if (repetitionValue.value > 0) {
        repetitionValue.value--;
    }
};
// Function to handle segment change
const segmentChanged = (event) => {
    activeTab.value = event.detail.value;
};
</script>
<style scoped>
ion-segment {
    --background-color: white;
    --color: white;
    border-bottom: 1px solid #f2f2f2;
}

ion-icon {
    border-radius: 60%;
    width: 16px;
    height: 16px;
}

ion-segment-button {
    --background-color: white;
    --indicator-box-shadow: none;
    --border-radius: none;
    color: black;
}

ion-segment-button.segment-button-checked {
    --border-bottom: 2px solid var(--tietiary, rgba(44, 58, 209, 0.5));
}

ion-range {
    --bar-background: #2c3ad133;
    --bar-background-active: #2c3ad133;
    --bar-height: 10px;
    --bar-width: 20px;
    --bar-border-radius: 10px;
    --knob-background: var(--white, #fff);
    --knob-size: 22px;
}

.flex-item {
    display: flex;
}

.flex-column {
    flex-direction: column;
}

.repetition-controls {
    gap: 8px;
}

.repetition-controls ion-button {
    margin: 0 5px;
}

.button-style {
    align-items: center;
    gap: 16px;
}

.button-wrapper {
    align-items: flex-start;
    gap: 7px;
}

.w-sm {
    width: 24px;
    min-height: 24px;
}

.repetition-value {
    border: 1px solid #ccc;
    padding: 10px 15px;
    border-radius: 5px;
    background: #f2f2f2;
}

.box {
    border-radius: 5px;
    border: 1px solid var(--main-green, #a5ce3e);
    background: #f2f8e3;
    padding: 10px;
    margin: 0;
}

.custom-class {
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    margin-bottom: -38px;
}

.custom-color {
    color: rgba(44, 58, 209, 0.5);
}

.text-bold {
    color: #404040;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: 0.25px;
}

.font-lg {
    font-size: 16px;
    /* color: #7C7C7C; */
    font-weight: 500;
    margin-bottom: -22px;
}

.text-green {
    color: #a5ce3e;
}

.bg-gray {
    background: #f7f7f7;
}

.text-tietiary {
    color: var(--tietiary, rgba(44, 58, 209, 0.5));
}

.text-blue {
    color: #0061a8;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-decoration-line: underline;
}

.icon-container {
    padding: 4px;
    align-items: flex-start;
    gap: 8px;
    margin-top: 43px;
    margin-bottom: 16px;
}

.icon-container>span {
    display: flex;
    width: 103.667px;
    padding: 0px 4px;
    flex-direction: column;
    border-right: 0.5px solid rgba(204, 204, 204, 0.8);
}

.icon-container>span:last-child {
    border-right: none;
}

.custom-container {
    padding: 8px;
    /* justify-content: center; */
    margin-top: 6px;
    color: white;
    gap: 44px;
    border-radius: 5px;
    background: var(--main-green, #a5ce3e);
}
</style>

<template>
    <ion-page>
        <ion-header>
            <score />
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-reorder-group @ionItemReorder="doReorder" :disabled="false">
                <ion-card v-for="(item, index) in practiceItems" :key="index" class="practice-card">
                    <div class="card-content">
                        <ion-reorder slot="end">
                            <img src="/src/pictures/threeDot.svg" class="drag-handle-icon" />
                        </ion-reorder>

                        <ion-thumbnail slot="end">
                            <img :src="item.imgSrc" />
                        </ion-thumbnail>
                        <div class="title-progress-container">
                            <ion-label>{{ item.title }}</ion-label>
                            <ion-progress-bar :value="item.progress" color="success"
                                class="progress-bar"></ion-progress-bar>
                        </div>
                        <ion-icon :icon="chevronForwardOutline" slot="end" class="arrow-icon" />
                    </div>
                </ion-card>
            </ion-reorder-group>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonLabel,
    IonThumbnail,
    IonProgressBar,
    IonReorderGroup,
    IonReorder,
    IonIcon,
} from "@ionic/vue";
import { chevronForwardOutline, pizza } from "ionicons/icons";
import type { ReorderEventDetail } from "@ionic/core";
import score from "@/components/Header/Header.vue";

const practiceItems = ref([
    {
        title: "Communication",
        imgSrc: "/src/pictures/Illustration 6.svg",
        progress: 0.5,
    },
    {
        title: "Celebrate and Collaborate",
        imgSrc: "/src/pictures/Illustration 7.svg",
        progress: 0.3,
    },
    {
        title: "Effective Feedback",
        imgSrc: "/src/pictures/Illustration 5.svg",
        progress: 0.7,
    },
    {
        title: "Active Listening",
        imgSrc: "/src/pictures/Illustration 4.svg",
        progress: 0.2,
    },
    // ... other items
]);

const doReorder = (event: CustomEvent<ReorderEventDetail>) => {
    const fromIndex = event.detail.from;
    const toIndex = event.detail.to;
    practiceItems.value.splice(
        toIndex,
        0,
        practiceItems.value.splice(fromIndex, 1)[0]
    );
    event.detail.complete();
};
</script>

<style scoped>
.practice-card {
    margin-bottom: 8px;
    --ion-item-background: transparent;
    --background: transparent;
    box-shadow: none;
    /* Remove shadow if present */
    display: flex;
    flex-direction: column;
    padding: 0px 20px 4px 20px;
}

.card-content {
    display: flex;
    align-items: center;
    padding: 16px;
    /* Add padding if needed */
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.title-progress-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

ion-label {
    font-size: 1rem;
    margin-bottom: 4px;
    /* Space between title and progress bar */
}

.progress-bar {
    --progress-background: #e6e0e9;
    /* --buffer-background: transparent; */
    --progress-color: #a5ce3e;
    width: 50%;
    /* Adjust width as needed */
}

.arrow-icon {
    font-size: 1.5em;
    margin-left: auto;
    color: #303030;
    /* Ensures the arrow icon is aligned to the right */
}

ion-thumbnail {
    --border-radius: 0;
    --size: 55px;
    /* Adjust the size based on your design */
    margin-right: 8px;
    width: 105px;
    height: 60px;
    /* Spacing between image and title */
}

ion-reorder {
    color: var(--ion-color-medium);
}

.drag-handle-icon {
    width: 15px;
    height: 20px;
    margin-right: 10px;
}
</style>

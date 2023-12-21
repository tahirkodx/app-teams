<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Practice</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-reorder-group @ion-item-reorder="doReorder" disabled="false">
                <ion-card v-for="(item, index) in practiceItems" :key="index" class="practice-card">
                    <div class="card-content">
                        <ion-reorder slot="start"></ion-reorder>
                        <ion-thumbnail slot="start">
                            <img :src="item.imgSrc">
                        </ion-thumbnail>
                        <ion-label>{{ item.title }}</ion-label>
                        <ion-icon :icon="chevronForward" slot="end" />
                    </div>
                    <div class="progress-container">
                        <ion-progress-bar :value="item.progress" color="success"></ion-progress-bar>
                    </div>
                </ion-card>
            </ion-reorder-group>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonItem,
    IonLabel,
    IonThumbnail,
    IonProgressBar,
    IonReorderGroup,
    IonReorder,
    IonIcon
} from '@ionic/vue';
import { chevronForward } from 'ionicons/icons';
import type { ReorderEventDetail } from '@ionic/core';

// Sample items, replace 'imgSrc' with your actual image paths


const practiceItems = ref([
    { title: "Communication", imgSrc: "/path/to/your/image.png",subtitle: "20", progress: 0.5 },
    { title: "Celebrate and Collaborate", imgSrc: "/path/to/your/image.png",subtitle: "", progress: 0.3 },
    { title: "Effective Feedback", imgSrc: "/path/to/your/image.png",subtitle: "", progress: 0.7 },
    { title: "Active Listening", imgSrc: "/path/to/your/image.png",subtitle: "", progress: 0.2 },
    // ... other items
]);
const doReorder = (event: CustomEvent<ReorderEventDetail>) => {
    const fromIndex = event.detail.from;
    const toIndex = event.detail.to;
    if (fromIndex !== toIndex) {
        const itemToMove = practiceItems.value.splice(fromIndex, 1)[0];
        practiceItems.value.splice(toIndex, 0, itemToMove);
    }
    event.detail.complete(practiceItems.value);
};
</script>

<style scoped>
.practice-card {
    margin-bottom: 8px;
    --ion-item-background: transparent;
    --ion-item-padding: 0;
    --background: transparent;
    box-shadow: none;
    /* Remove shadow if present */
}

.card-content {
    display: flex;
    align-items: center;
}

ion-item {
    --padding-start: 0;
    --padding-end: 0;
    --inner-padding-end: 0;
    --inner-padding-start: 0;
}

ion-thumbnail {
    --border-radius: 0;
    --size: 48px;
    /* Adjust the size based on your design */
    margin-right: 8px;
    /* Spacing between image and title */
}

ion-label {
    flex-grow: 1;
    font-size: 1rem;
    padding: 16px 0;
}

.progress-container {
    width: 100%;
    /* Progress bar full width */
    padding: 0 16px;
    /* Padding on sides, adjust as needed */
}

ion-progress-bar {
    height: 4px;
    /* Height of progress bar, adjust as needed */
    --buffer-background: #e4e4e4;
}

ion-reorder {
    color: var(--ion-color-medium);
}

ion-icon {
    font-size: 1.5em;
}</style>
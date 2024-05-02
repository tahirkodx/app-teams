<template>
    <ion-alert trigger="present-alert" header="Alert!" :message="alertmessage" :buttons="alertButtons"
        @didDismiss="logResult($event)"></ion-alert>
</template>

<script lang="ts" setup>
import { IonAlert, IonButton } from '@ionic/vue';
const props = defineProps({
    alertmessage: String,
});
console.log(props)
// Configuration for alert buttons
const alertButtons = [
    {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
            console.log('Alert canceled');
        },
    },
    {
        text: 'OK',
        role: 'confirm',
        handler: () => {
            console.log('Alert confirmed');
        },
    },
];

// Function to log the result when the alert is dismissed
const logResult = (ev: CustomEvent) => {
    console.log(`Dismissed with role: ${ev.detail.role}`);
};
</script>
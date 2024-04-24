<template>
    <ion-page>
        <ion-header>
            <score />
        </ion-header>
        <ion-content>
            <ion-text>
             <h3 class="ion-padding"> Create commitment</h3></ion-text>
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-card v-for="(card, index) in cards" :key="index" :class="getCardClass(card.title)">
                            <ion-card-header>
                                <ion-card-title>{{ card.title }}</ion-card-title>
                            </ion-card-header>
                            <ion-card-content>
                                {{ card.content }}
                            </ion-card-content>
                            <ion-text class="icon-color ion-color">
                                <ion-icon :icon="arrowForwardOutline" class="icon-color"></ion-icon>
                            </ion-text>
                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>
  
<script setup lang="ts">
import { ref } from "vue";
import {
    IonCard,
    IonCol,
    IonPage,
    IonText,
    IonCardContent,
    IonCardHeader,
} from "@ionic/vue";
import {
    arrowForwardOutline,
} from "ionicons/icons";
import score from "@/components/Header/Header.vue";

const cards = [
    {
        title: 'Create Custom Improvement Commitment',
        content: 'Create a new empty commitment'
    },
    {
        title: 'Commitment Topic',
        content: 'Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean id.'
    },
    {
        title: 'Commitment Topic',
        content: 'Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean id.'
    },
    {
        title: 'Commitment Topic',
        content: 'Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean id.'
    },
    {
        title: 'Commitment Topic',
        content: 'Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean id.'
    },
    {
        title: 'Commitment Topic',
        content: 'Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean id.'
    },
    {
        title: 'Commitment Topic',
        content: 'Lorem ipsum dolor sit amet consectetur. Sem massa etiam amet aenean id.'
    }
];

const getCardClass = (title) => {
    if (title === 'Create Custom Improvement Commitment') {
        return 'custom-card-color';
    } else {
        return ''; // No additional class for other cards
    }
}
</script>
  
<style scoped>
ion-card-content {
    display: flex;
    font-size: 12px;
}

ion-card-title {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.1px;
}

.custom-card-color {
    background-color: #f2f2f2;
}

.icon-color {
    top: 15px;
    width: 24px;
    height: 24px;
    color: #2c3ad180;
}

.ion-color {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 20px;
}

.card-style {
    border: 1px solid #F2F2F2;
    margin: 0px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 16px;
}
</style>
  
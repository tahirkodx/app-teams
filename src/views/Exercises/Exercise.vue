<template>
    <ion-page>
         
        
        <chart />
        <ion-content class="ion-padding">
            <ion-fab slot="fixed" horizontal="end" vertical="bottom" @click="() => router.push({ name: 'addteam' })">
                <ion-fab-button>
                    <ion-icon :icon="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
    IonPage,
    IonHeader,
    IonContent,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon,
    IonAccordion,
    IonAccordionGroup,
    IonFab,
    IonDatetime,
    IonFabButton,
    IonList,
} from "@ionic/vue";
import { chevronForwardOutline, add } from "ionicons/icons";
//import 'vue3-carousel/dist/carousel.css'
//import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import router from "@/router/index";
import score from "@/components/Header/Header.vue";
// import chart from "@/components/Global/Chart.vue"

</script>

<style scoped>
ion-datetime {
    --background: unset: !important;
}
</style>

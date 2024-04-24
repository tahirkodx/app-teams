<template>
    <ion-page>
        <ion-content>
            <ion-header>
                <score />
            </ion-header>
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-padding-start ion-margin-top">
                        <ion-text class="font-lg">Take Survey</ion-text>
                        <div class="text-container ion-margin-top ion-padding-end">
                            <ion-text>
                                Lorem ipsum dolor sit amet consectetur. Vestibulum cras eget sit interdum commodo.
                                Integer massa est felis eget id non.
                            </ion-text>
                            <ion-text class="ion-padding-end">
                                Lectus vestibulum justo justo sit sed lectus nisi arcu. Purus ultrices tortor posuere
                                ornare vestibulum mollis suspendisse cras cras. Tristique faucibus risus facilisis
                                tincidunt id integer. Lacus neque parturient scelerisque sit tincidunt in mi vestibulum.
                                A.
                            </ion-text>
                        </div>
                        <div class="button-custom ion-padding">
                            <ion-button size="default" router-link="/createRecurrent">START SURVEY</ion-button>
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

.font-lg {
    color: var(--black, #000);
    font-size: 22px;
    line-height: 28px;
}
.text-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
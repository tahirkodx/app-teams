<template>
    <ion-content>
        <ion-header>
            <score />
        </ion-header>
        <ion-row>
            <ion-col class=" ion-padding ion-margin-top">
                <ion-text>
                    <h3 class="ion-text-center">Finish the sentence</h3>
                    <div class="ion-border-bottom"></div>
                    <h6 class="ion-margin-bottom ion-padding-top">
                        When a child will not join in group activities...</h6>
                    <ion-input shape="block" placeholder="Complete the sentence here..." position="floating"></ion-input>
                    <div class="button-custom ion-margin-top">
                        <ion-button size="default" fill="outline" class="button-size btn-sm">Previous</ion-button>
                        <ion-button size="default" class="button-size">NEXT</ion-button>
                    </div>
                </ion-text>
            </ion-col>
        </ion-row>
    </ion-content>
</template>
<script setup lang="ts">
import { ref } from "vue";
import score from "@/components/Header/Header.vue";
import {
    IonButton,
    IonText,
    IonRow,
    IonCol,
    IonPage,
    IonImg,
    IonContent,
    IonHeader
} from "@ionic/vue";
</script>
<style scoped>
.text-sm {
    margin-top: 100px;
    color: var(--tietiary, rgba(44, 58, 209, 0.50));
    font-size: 22px;
    line-height: 28px;
}

.text-sm {
    color: #F2F2F2;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50px;
    right: 20px;
}

ion-input {
    border-radius: 5px;
    background: #F2F2F2;
    height: 200px;
}

.button-custom {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 20px;
    gap: 10px;
}

.ion-border-bottom {
    border-bottom: 1px solid #F2F2F2;
    margin-top: 18px;
    margin-left: -10px;
    margin-right: -10px;
}

.button-size {
    width: 100%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.btn-sm {
    color: #CCCCCCCC;
    /* border: 1px solid #CCCCCCCC; */
}
</style>
    
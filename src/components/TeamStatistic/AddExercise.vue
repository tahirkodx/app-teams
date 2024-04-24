<template>
    <IonPage>
        <Header />
        <ion-content>
            <p class="titleStyle ion-padding">Add Member</p>
            <div class="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <ion-accordion-group>
                                <ion-accordion class="ion-padding-vertical" value="first">
                                    <ion-item slot="header" color="light">
                                        <ion-label class="ion-label-cust">Add owner</ion-label>
                                    </ion-item>
                                    <div class="ion-padding" slot="content">List Data 1</div>
                                </ion-accordion>
                                <ion-accordion class="ion-padding-vertical" value="second">
                                    <ion-item slot="header" color="light">
                                        <ion-label class="ion-label-cust">Add member:</ion-label>
                                    </ion-item>
                                    <div class="ion-padding" slot="content">List Data 2</div>
                                </ion-accordion>
                            </ion-accordion-group>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <div>
                    <modalInfo />
                    <ion-note>Help</ion-note>
                </div>
            </div>
        </ion-content>
        <ion-footer class="ion-no-border">
            <ion-toolbar>
                <ion-button class="ion-padding" expand="block">ADD EXERCISE</ion-button>
            </ion-toolbar>
        </ion-footer>
    </IonPage>
</template>
<script setup lang="ts">
import Header from "@/components/Header/Header.vue";
import {
    IonPage,
    IonHeader,
    IonList,
    IonItem,
    IonContent,
    IonToolbar,
    IonFooter,
    IonSegment,
    IonSegmentButton,
    IonButton,
    IonAvatar,
    IonLabel,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonProgressBar,
    IonReorderGroup,
    IonReorder,
    IonIcon,
    IonText,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import modalInfo from "@/components/Widgets/InfoModal.vue";
const router = useRouter();

const navigate = () => {
    router.push({ name: "searchDetail" });
};
</script>

<style scoped>
.titleStyle {
    margin-top: 0px;
    margin-bottom: 0px;
    color: var(--black, #000);
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    /* 127.273% */
}

ion-input.custom {
    border-radius: 5px;
    --background: #f2f2f2;
    --padding-bottom: 10px;
    --padding-end: 10px;
    --padding-start: 10px;
    --padding-top: 10px;
    margin-top: 10px;
}

ion-input {
    border-radius: 5px;
    --background: #f2f2f2;
    --padding-start: 10px;
}

.error {
    color: #eb445a;
    font-size: 12px;
}
.ion-label-cust{
color: #808080;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; 
letter-spacing: 0.25px;
}
</style>

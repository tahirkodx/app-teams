<template>
    <ion-page>
      <ion-header>
        <Header />
      </ion-header>
      <ion-content class="ion-padding">
        <h4 class="page-title">Commitment Transformation</h4>
        <IonGrid>
            <IonRow>
                <IonCol>
                    <ion-input
                type="text"
                placeholder="Title of commitment:"
                required
                class="custom"
              ></ion-input>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonTextarea aria-label="Comments" placeholder="What are your commitment goals?" :rows="5">
                    </IonTextarea>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonTextarea aria-label="Comments" placeholder="What have you been doing?" :rows="5">
                    </IonTextarea>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonTextarea aria-label="Comments" placeholder="What have you not been doing Instead?" :rows="5">
                    </IonTextarea>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonTextarea aria-label="Comments" placeholder="What are your hidden competing commitments?" :rows="5">
                    </IonTextarea>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonTextarea aria-label="Comments" placeholder="What are your biggest assumptions?" :rows="5">
                    </IonTextarea>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol class="ion-check-container">
                    <IonCheckbox
                :value="true"
                :checked="true"
              ></IonCheckbox>
              <ion-label>Check 1</ion-label>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol class="ion-check-container">
                    <IonCheckbox
                :value="true"
                :checked="false"
              ></IonCheckbox>
              <ion-label>Check 1</ion-label>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol class="ion-check-container">
                    <IonCheckbox
                :value="true"
                :checked="true"
              ></IonCheckbox>
              <ion-label>Check 1</ion-label>
                </IonCol>
            </IonRow>
            
        </IonGrid>
        <ion-button
          
          class="ion-padding"
          expand="block"
          >ADD COMMITMENT</ion-button
        >
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref,onMounted,watch } from "vue";
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
    IonCard,
    IonThumbnail,
    IonProgressBar,
    IonReorderGroup,
    IonReorder,
IonGrid,
IonRow,
IonCol,
IonInput,
IonTextarea,
IonCheckbox,
  } from "@ionic/vue";
  
  import { chevronForward, add, arrowUpOutline } from "ionicons/icons";
import Header from "@/components/Header/Header.vue";
  
  
  </script>
  
  <style scoped>
  .page-title{
    color: var(--black, #000);

/* mobile/Title Large */
font-family: Cabin;
font-size: 22px;
font-style: normal;
font-weight: 500;
line-height: 28px; /* 127.273% */
  }
  ion-input{
    border-radius: 5px;
  --background: #f2f2f2;
  --padding-bottom: 10px;
  --padding-end: 10px;
  --padding-start: 10px;
  --padding-top: 10px;
  margin-top: 10px;
  }
  ion-textarea{
    border-radius: 5px;
  --background: #f2f2f2;
  --padding-bottom: 10px;
  --padding-end: 10px;
  --padding-start: 10px;
  --padding-top: 10px;
  margin-top: 10px;
  }
  ion-checkbox::part(container) {
  border-radius: 5px;
  /* border: 2px solid var(--M3-sys-light-on-surface-variant, #a5ce3e); */
  width: 22px;
  height: 22px;
}
.ion-check-container{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px;
    
}
  
  </style>
  
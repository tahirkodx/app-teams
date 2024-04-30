<template>
    <ion-page>
      <Header is-back-button router-link="ask-help" />
      <ion-content>
        <ion-row>
          <ion-col class="ion-padding">
            <div class="custom-container ion-padding">
              <div class="custom-container ion-text-center ion-margin-vertical">
                <ion-text class="font-lg">Having an emergency?</ion-text>
                <ion-text class="font-sm">You can attach a text or just press the button below to get help.</ion-text>
              </div>
              <ion-input
                fill="outline"
                placeholder="Enter email:"
                class="custom-input ion-margin-bottom"
                @ionInput="validate"
                ref="emailInput"
              ></ion-input>
              <ion-text color="danger">{{ customErrorMessage }}</ion-text>
              <IonTextarea aria-label="Comments" placeholder="Attach a text to your SOS?" :rows="7"></IonTextarea>
              <ion-button expand="block" class="ion-padding-vertical ion-margin-top custom-color" router-link="/cancelSos">
                SEND SOS request
              </ion-button>
            </div>
          </ion-col>
        </ion-row>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { IonPage, IonContent, IonRow, IonCol, IonButton, IonText, IonTextarea } from "@ionic/vue";
  import Header from "@/components/Header/Header.vue";
  
  const emailInput = ref<HTMLElement | null>(null);
  const customErrorMessage = ref("");
  
  const validate = (ev: any) => {
    const value = ev.target.value;
    const inputElement = emailInput.value;
  
    inputElement?.classList.remove("ion-valid");
    inputElement?.classList.remove("ion-invalid");
  
    if (value === "") {
      customErrorMessage.value = "Email is required";
      return;
    }
  
    if (validateEmail(value)) {
      inputElement?.classList.add("ion-valid");
      customErrorMessage.value = ""; // No error message when valid
    } else {
      inputElement?.classList.add("ion-invalid");
      customErrorMessage.value = "Invalid Email Format"; // Custom error message when invalid
    }
  };
  
  // Function to validate email format
  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  </script>
  
  <style scoped>
  ion-button {
    --background: var(--secondary, #FF8512);
    margin-top: 120px;
  }
  .custom-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .font-lg {
    font-size: 30px;
    line-height: normal;
  }
  
  ion-textarea {
    --border-radius: 5px;
    --background: #f2f2f2;
    --padding-bottom: 10px;
    --padding-end: 10px;
    --padding-start: 10px;
    --padding-top: 10px;
    margin-top: 10px;
    height: 150px;
  }

  .custom-input {
    --background: #f2f2f2;
    --border-width: 0;
    --border-radius: 5px;
    margin-top: 10px;
  }
  
  .font-sm {
    color: #666;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
  }
  </style>
  
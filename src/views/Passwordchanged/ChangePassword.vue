<template>
  <ion-page>
    <Header is-back-button router-link="passwordSetting" />
    <ion-content>
      <ion-row>
        <ion-col class="ion-padding">
          <div class="custom-container ion-padding">
            <div class="custom-container ion-text-center ion-margin-bottom">
              <ion-text class="font-lg">Change Password?</ion-text>
              <ion-text class="font-sm">We will send you a link to reset password</ion-text>
            </div>
            <ion-input
              fill="outline"
              placeholder="Enter email:*"
              class="custom-input ion-margin-bottom"
              @ionInput="validate"
              ref="emailInput"
            ></ion-input>
            <ion-text color="danger">{{ customErrorMessage }}</ion-text>
            <ion-button
              expand="block"
              class="ion-padding-vertical"
              router-link="/resetOtp"
            >
              SEND LINK
            </ion-button>
          </div>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IonPage, IonContent, IonRow, IonCol, IonButton, IonText } from "@ionic/vue";
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
.custom-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.font-lg {
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}

.custom-input {
  --background: #f2f2f2;
  --border-width: 0;
  --border-radius: 5px;
  margin-top: 10px;
}

.font-sm {
  color: #808080;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
}
</style>

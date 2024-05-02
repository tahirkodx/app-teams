<template>
  <ion-page>
    <Header is-back-button />
    <ion-content>
      <ion-row>
        <ion-col class="ion-padding">
          <div class="custom-container ion-padding">
            <ion-label class="custom-container ion-text-center ion-margin-bottom">
              <ion-text class="font-lg">Change Password?</ion-text>
              <ion-text class="font-sm">We will send you a link to reset password</ion-text>
            </ion-label>
            <ion-input
              fill="outline"
              placeholder="Enter password:*"
              :type="passwordFieldType"
              @ionInput="validatePassword"
              v-model="password"
            >
              <ion-icon
                :icon="passwordFieldType === 'password' ? eyeOutline : eyeOff"
                slot="end"
                @click="togglePasswordVisibility"
              ></ion-icon>
            </ion-input>
            <ion-text color="danger">{{ customErrorMessagePass }}</ion-text>
            <ion-input
              fill="outline"
              placeholder="Confirm password:*"
              :type="passwordFieldType"
              @ionInput="validateConfirmPassword"
              v-model="confirmPassword"
            >
              <ion-icon
                :icon="passwordFieldType === 'password' ? eyeOutline : eyeOff"
                slot="end"
                @click="togglePasswordVisibility"
              ></ion-icon>
            </ion-input>
            <ion-text color="danger">{{ confirmPasswordError }}</ion-text>
            <ion-button
              expand="block"
              class="ion-padding-vertical"
              :disabled="!isValidForm"
              @click="changePassword"
            >
              CREATE NEW PASSWORD
            </ion-button>
          </div>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonText,
  IonInput,
  IonButton,
} from "@ionic/vue";
import Header from "@/components/Header/Header.vue";
import { ref, computed } from "vue";
import { eyeOutline, eyeOff } from "ionicons/icons";

const passwordFieldType = ref("password");
const password = ref("");
const confirmPassword = ref("");
const customErrorMessagePass = ref("");
const confirmPasswordError = ref("");

const togglePasswordVisibility = () => {
  passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password";
};

const validatePassword = () => {
  const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z0-9]).{8,}$/;

  // Check if the password matches the regular expression
  const isValidPassword = passwordRegex.test(password.value);

  customErrorMessagePass.value = isValidPassword
    ? ""
    : "Invalid password. Must contain a minimum of 8 characters and at least one special character.";
};

const validateConfirmPassword = () => {
  confirmPasswordError.value = password.value === confirmPassword.value ? "" : "Passwords do not match";
};

const isValidForm = computed(() => {
  return customErrorMessagePass.value === "" && confirmPasswordError.value === "";
});

const changePassword = () => {
  // Handle password change logic here
};
</script>

<style scoped>
ion-input {
  --background: #f2f2f2;
  --border-width: 0;
  --border-radius: 5px;
  margin-top: 10px;
}
ion-icon {
  width: 16px;
  height: 16px;
}
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

.font-sm {
  color: #808080;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
}
</style>

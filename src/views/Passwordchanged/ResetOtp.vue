<template>
  <ion-page>
    <Header is-back-button />
    <ion-content>
      <ion-row>
        <ion-col class="ion-padding">
          <div class="custom-container ion-padding">
            <div class="custom-container ion-text-center ion-margin-bottom">
              <ion-text class="font-lg">Reset new password</ion-text>
              <ion-text class="font-sm"
                >Please enter the OTP code sent to email address
              </ion-text>
              <ion-text class="font-sm text-blue"
                >(danielrussel @google.com)
              </ion-text>
            </div>
            <div class="input-box">
              <v-otp-input
                ref="otpInput"
                input-classes="otp-input"
                separator=" "
                :num-inputs="6"
                v-model:value="bindValue"
                :should-auto-focus="true"
                :should-focus-order="true"
                @on-change="handleOnChange"
                @on-complete="handleOnComplete"
              />
            </div>
            <ion-button
              expand="block"
              class="ion-padding-vertical"
              router-link="/resetPassword"
            >
              VERIFY EMAIL
            </ion-button>
          </div>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonText,
  IonButton,
} from "@ionic/vue";
import Header from "@/components/Header/Header.vue";

const otpInput = ref<InstanceType<typeof VOtpInput> | null>(null);
const bindValue = ref("");

const handleOnComplete = (value: string) => {
  console.log("OTP completed: ", value);
};

const handleOnChange = (value: string) => {
  console.log("OTP changed: ", value);
};
</script>

<style>
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
.text-blue {
  color: #0d99ff;
}
.otp-input {
  width: 50px;
  height: 44px;
  padding: 12px 10px;
  margin: 0 4px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  background: #f2f2f2;
  text-align: center;
  outline: none;
}

.input-box {
  display: flex;
  justify-content: center;
}
/* Background colour of an input field with value */
/* .otp-input.is-complete {
  background-color: #e4e4e4;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
} */
</style>

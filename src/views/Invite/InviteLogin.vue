<template>
  <ion-content>
    <ion-page>
      <ion-row>
        <ion-col>
          <ion-text class="ion-text-center ion-margin custom-text">
            <h4>Welcome to</h4>
            <h1>Epicus.</h1>
          </ion-text>
          <div class="ion-text-wrap ion-text-center text-sm">
            An app that enables team spirits and bring the best
          </div>
          <ion-text class="ion-text-center ion-margin">
            <h3>Login with invitation</h3>
          </ion-text>
          <div class="ion-padding-horizontal">
            <div class="ion-margin-bottom">
              <ion-label class="custom-label">Invite code</ion-label>
              <ion-input
                fill="outline"
                placeholder="Enter the invite code"
                class="custom-input"
              ></ion-input>
            </div>
            <div class="ion-margin-bottom">
              <ion-label class="custom-label">Email</ion-label>
              <ion-input
                class="custom-input"
                fill="outline"
                placeholder="Type your email"
              ></ion-input>
            </div>
            <button
              type="button"
              @click="handleClick"
              class="text-base ion-text-end ion-margin-bottom align-item-end"
            >
              Forget Password
            </button>
          </div>
          <ion-button
            class="ion-padding"
            expand="block"
            @click="() => router.push('/inviteFound')"
            >Login</ion-button
          >
          <ion-content>
            <div class="ion-fixed-bottom">
              <ion-text class="ion-text-center">
                <h6 class="text-code">
                  Not able to find the link/ invite code?
                </h6>
              </ion-text>
              <ion-text class="ion-text-center text-base">
                <h6>Click here to resend the invite link/code</h6>
              </ion-text>
            </div>
          </ion-content>
        </ion-col>
      </ion-row>
    </ion-page>
  </ion-content>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonCol,
  IonContent,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/vue";
// import router from "@/router";
import { useRouter } from "vue-router";

const router = useRouter();

function handleClick() {
  router.push({ name: "resetPassword" });
}

const handleLogin = () => {
  router.push({ name: "inviteFound" });
};
</script>

<style scoped>
.custom-text {
  color: var(--tietiary, rgba(44, 58, 209, 0.5));
  font-size: 22px;
}

.custom-text h1 {
  font-family: "Epilogue", sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 28px;
}

.text-sm {
  color: #9f9f9f;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  margin-top: -20px;
  padding: 0 50px;
}
.custom-input {
  --background: #f2f2f2;
  --border-width: 0;
  --border-radius: 5px;
  margin-top: 10px;
}
ion-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100vh;
}

.ion-fixed-bottom {
  position: fixed;
  bottom: 80px;
  width: 100%;
}

.custom-label {
  color: #5e5e5e;
  font-size: 12px;
  line-height: 16px;
}

.text-base {
  color: #0d99ff;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  text-decoration-line: underline;
  background: none;
}

.ion-text-center h6 {
  font-size: 12px;
}

.ion-margin {
  margin-top: 93px;
}

.align-item-end {
  display: flex;
  align-items: end;
  width: 100%;
  justify-content: end;
}

.text-code {
  color: #5e5e5e;
  text-align: center;

  /* mobile/Body small */
  font-family: Cabin;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
}
</style>

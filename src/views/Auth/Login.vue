<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            text=""
            default-href="/"
            icon="/src/pictures/ph_arrow-up (1).svg"
          ></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="login-header">
        <h2>Login</h2>
      </div>

      <ion-list class="login-form">
         
         
          <ion-input
            v-model="email"
            clear-input
            ref="emailInput"
            type="email"
            fill="solid"
            label="Email"
            label-placement="floating"
            error-text="Invalid email"
            @ionInput="validate"
            @ionBlur="markTouched"
          ></ion-input>
         
           
          <ion-input
           v-model="password"
            clear-input
            ref="passwordInput"
            type="password"
            fill="solid"
            label="Password"
            label-placement="floating"
            error-text="Invalid password"
            @ionInput="validate"
            @ionBlur="markTouched"
          ></ion-input>
        

        <ion-text class="forgot-password">
          <a class="linkStyle" href="#">Forgot Password</a>
        </ion-text>

        <ion-button expand="block" @click="auth_login" class="login-btn"
          >LOGIN</ion-button
        >

        <p class="ion-text-center">OR</p>

        <ion-button expand="block" class="login-google-btn">
          <ion-icon src="/src/pictures/SSO Icon.svg" slot="start"></ion-icon>
          LOGIN WITH GOOGLE
        </ion-button>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonText,
  IonIcon,
  IonButtons,
  IonBackButton,
  IonContent,
  IonButton,
  IonInput,
  IonLabel,
  IonItem,
  IonList,
} from "@ionic/vue";
import router from "@/router/index";
import { presentToast } from "@/utils/toast";
// const userStore  = useUserStore()
import { AuthAPI } from "@/utils/actions";
// Create a ref for the input element
const emailInput = ref(null);

const email = ref("");
const password = ref("");

// Email validation method
const validateEmail = (email: string) => {
  return email.match(
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  );
};

// Validate input on user input
const validate = (ev: any) => {
  const value = ev.target.value;
  const inputElement = emailInput.value.$el;

  inputElement.classList.remove("ion-valid");
  inputElement.classList.remove("ion-invalid");

  if (value === "") return;

  validateEmail(value)
    ? inputElement.classList.add("ion-valid")
    : inputElement.classList.add("ion-invalid");
};

// Mark input as touched on blur
const markTouched = () => {
  const inputElement = emailInput.value.$el;
  inputElement.classList.add("ion-touched");
};

/**
 * Send details to the login function. If an error then present toast of failed login
 */
async function auth_login() {
  console.log(email.value);
  console.log(password.value);
  const login = {
    email: email.value,
    password: password.value,
  };
  if (email.value && password.value) {
    const res = await AuthAPI.userLogin(login);
    if (res.key) {
      email.value = "";
      password.value = "";
      router.push({ name: "team" });
    }
  }
}
</script>
<style scoped>
.login-header {
  text-align: center;
  margin-top: 80px;
  margin-bottom: 80px;
}

.ion-padding {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-form {
  width: 100%;
  max-width: 400px;
  padding: 20px;
}

.login-btn {
  --background: #8bc34a;
  margin-top: 20px;
  --border-radius: 5px;
}

.login-google-btn {
  --background: white;
  --color: #555;
  --border-radius: 5px;
  --border-style: solid;
  --border-width: 1px;
  --border-color: var(--ion-color-primary);
  --box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 20px;
}

.forgot-password {
  display: block;
  text-align: right;
  margin-top: 10px;
}

.back-button {
  margin-top: 10px;
  margin-left: 10px;
}
.linkStyle {
  color: #0d99ff;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
  text-decoration-line: underline;
}
</style>
<!-- <div >
        <div style="width: 100%; max-width: 330px;">
          <ion-list lines="full">
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input type="email" v-model="email"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input type="password" v-model="password"></ion-input>
            </ion-item>
          </ion-list>
          <ion-button expand="block"  @click="auth_login">Login</ion-button>
          <ion-button expand="block" fill="outline" class="ion-margin-top" @click="() => router.push({ name: 'registration' })">
            Register as new user
          </ion-button>
        </div>
      </div> -->

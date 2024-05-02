<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/" icon="/src/pictures/ph_arrow-up (1).svg"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="login-header">
        <h2 class="headingText">Login</h2>
      </div>
      <ion-list class="login-form">
        <ion-label class="custom-label">E-mail</ion-label>
        <ion-input v-model="email" ref="emailInput" type="email" fill="outline" placeholder="Enter your email here"
          error-text="This Email id is not found" @ionInput="validate" @ionBlur="markTouched"
          class="custom-input"></ion-input>

        <ion-label class="custom-label">Password</ion-label>

        <ion-input v-model="password" ref="passwordInput" :type="showPassword ? 'text' : 'password'" fill="outline"
          placeholder="Type your password" error-text="Your password is incorrect" @ionInput="validate"
          @ionBlur="markTouched" class="input-background custom-input">
          <ion-icon :icon="showPassword ? eyeOff : eye" slot="end" @click="toggleShowPassword"></ion-icon>
        </ion-input>

        <ion-text class="forgot-password">
          <a class="linkStyle" href="#">Forgot Password</a>
        </ion-text>
        <!-- <ion-item>
          <ion-label v-if="isLoading" class="spinner-container">
            <ion-spinner></ion-spinner>
          </ion-label>
        </ion-item> -->
        <LoginAlert :alertmessage="message" :isOpen="isAlertVisible"  />
        <ion-button expand="block" class="login-btn" :disabled="isLoading" @click="auth_login">
  <span v-if="isLoading" class="spinner-container">
    <ion-spinner></ion-spinner>
  </span>
  <span v-else>LOGIN</span>
</ion-button>

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
  IonSpinner
} from "@ionic/vue";
import { eye, eyeOff } from "ionicons/icons";
import router from "@/router/index";
const isLoading = ref(false);
const isAlertVisible = ref(false); 
import { presentToast } from "@/utils/toast";
import LoginAlert from "@/components/Personal/LoginAlert.vue";
// const userStore  = useUserStore()
import { AuthAPI } from "@/utils/actions";
// Create a ref for the input element
const emailInput = ref(null);

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const message = ref("");
// Email validation method
const validateEmail = (email: string) => {
  return email.match(
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  );
};

// Validate input on user input
const validate = (ev: any) => {
  const value = ev.target.value;
  const inputElement = emailInput;

  inputElement.classList.remove("ion-valid");
  inputElement.classList.remove("ion-invalid");

  console.log("Value:", value); // Adding console log for value

  if (value === "") {
    console.log("Value is empty");
    return;
  }

  validateEmail(value)
    ? (inputElement.classList.add("ion-valid"), console.log("Email is valid"))
    : (inputElement.classList.add("ion-invalid"), console.log("Email is invalid"));
};

// Mark input as touched on blur
const markTouched = () => {
  const inputElement = emailInput;
  inputElement.classList.add("ion-touched");

  console.log("Input marked as touched"); // Adding console log for marking as touched
};



/**
 * Send details to the login function. If an error then present toast of failed login
 */
 async function auth_login() {
  // console.log(email.value);
  // console.log(password.value);
  isLoading.value = true;
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
      isAlertVisible.value = true;
      message.value = "Login successfully";
    } else {
      // Set isAlertVisible to true when login fails
      message.value = "Login failed: invalid credentials";
      isAlertVisible.value = true;
    }
  }
  isLoading.value = false;
}


const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};
</script>
<style scoped>
.login-header {
  text-align: center;
  margin-top: 80px;
  margin-bottom: 80px;
}

/* .input-background {
  background-color: #f2f2f2; 
} */
.ion-padding {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-form {
  width: 100%;
  max-width: 400px;
  padding: 4px;
}

.login-btn {
  --background: #a5ce3e;
  margin-top: 20px;
  --border-radius: 5px;
  height: 50px;
}

.login-google-btn {
  --background: white;
  --color: #555;
  --border-radius: 5px;
  border: 1px solid var(--main-green, #a5ce3e);
  margin-top: 20px;
  color: var(--main-green, #a5ce3e);
  text-align: center;
  font-family: Cabin;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
  height: 50px;
  text-transform: uppercase;
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
  line-height: 16px;
  /* 133.333% */
  text-decoration-line: underline;
}

.custom-input {
  --background: #f2f2f2;
  --border-width: 0;
  --border-radius: 5px;
  margin-top: 10px;
}

.custom-label {
  color: #808080;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  /* 133.333% */
}

.headingText {
  color: #303030;
  text-align: center;

  /* mobile/Title Large */
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  /* 127.273% */
}

.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  /* Semi-transparent background */
  z-index: 9999;
  /* Ensure spinner appears above other content */
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

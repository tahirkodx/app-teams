<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            text=""
            default-href="/welcomeScreen"
            icon="/src/pictures/ph_arrow-up (1).svg"
          ></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content v-if="isRegister" class="ion-padding">
      <div class="login-header">
        <h2>Verify your account</h2>
      </div>
      <IonGrid>
        <IonRow>
          <IonCol>
            <div class="conEmail">
              <p>
                Please confirm your email which your received in you registered
                email ID
              </p>
            </div>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <div class="conEmailLink">
              <p>Not received an email?</p>
              <span class="policy">Click here</span>
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <ion-button expand="block" @click="goto_login" class="login-btn"
              >Go back to Login</ion-button
            >
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <p class="acceptTerm">
              By continuing you agree for our
              <span class="policy">Terms and conditions</span> and
              <span class="policy">Privacy policy </span>
            </p>
          </IonCol>
        </IonRow>
      </IonGrid>
    </ion-content>
    <ion-content v-else class="ion-padding">
      <div class="login-header">
        <h2>Register as user</h2>
      </div>
      <IonGrid>
        <IonRow>
          <IonCol>
            <ion-label class="label-text">First Name</ion-label>
            <ion-input v-model="fname" type="text" class="custom"></ion-input>
          </IonCol>
          <IonCol>
            <ion-label class="label-text">Last Name</ion-label>
            <ion-input v-model="lname" type="text" class="custom"></ion-input>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <ion-label class="label-text">Company / Company code</ion-label>
            <ion-input v-model="company" type="text" class="custom"></ion-input>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <ion-label class="label-text">Email Id</ion-label>
            <ion-input
              v-model="email"
              ref="emailInput"
              @ionInput="validate"
              @ionBlur="markTouched"
              class="custom"
            ></ion-input>
            <span class="error">{{ customErrorMessage }}</span>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <ion-label class="label-text">Password</ion-label>
            <ion-input
              v-model="password"
              ref="passwordInput"
              :type="showPassword ? 'text' : 'password'"
              class="custom"
              @ionInput="validatePassword"
            >
              <ion-icon
                :icon="showPassword ? eyeOff : eye"
                slot="end"
                @click="toggleShowPassword"
              ></ion-icon>
            </ion-input>
            <span class="error">{{ customErrorMessagePass }}</span>

            <!-- <span class="password"
              >Must contain minimum 8 letters and a special character</span
            > -->
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <ion-label class="label-text">Confirm Password</ion-label>
            <ion-input
              v-model="conPassword"
              ref="confirmPasswordInput"
              :type="showPassword ? 'text' : 'password'"
              class="custom"
              @ionInput="validateConfirmPasswordOnChange"
            >
              <ion-icon
                :icon="showPassword ? eyeOff : eye"
                slot="end"
                @click="toggleShowPassword"
              ></ion-icon>
            </ion-input>
            <span class="error">{{ confirmPasswordError }}</span>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <ion-button expand="block" @click="auth_login" class="login-btn"
              >Create Account</ion-button
            >
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <p class="acceptTerm">
              By continuing you agree for our
              <span class="policy">Terms and conditions</span> and
              <span class="policy">Privacy policy </span>
            </p>
          </IonCol>
        </IonRow>
      </IonGrid>
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
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { eye, eyeOff } from "ionicons/icons";
import router from "@/router/index";
import { presentToast } from "@/utils/toast";
// const userStore  = useUserStore()
import { AuthAPI } from "@/utils/actions";
// Create a ref for the input element
const emailInput = ref(null);
const isRegister = ref(false);
const customErrorMessage = ref("");
const customErrorMessagePass = ref("");
const confirmPasswordError = ref("");
const email = ref("");
const password = ref("");
const conPassword = ref("");
const fname = ref("");
const lname = ref("");
const company = ref("");
const showPassword = ref(false);
const validateConfirmPasswordOnChange = () => {
  validateConfirmPassword();
};
const validatePassword = () => {
  const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z0-9]).{8,}$/;

  // Check if the password matches the regular expression
  const isValidPassword = passwordRegex.test(password.value);

  if (!isValidPassword) {
    customErrorMessagePass.value =
      "Invalid password. Must contain a minimum of 8 characters and at least one special character.";
  } else {
    customErrorMessagePass.value = ""; // Clear the error message if the password is valid
  }
};
// Email validation method

const validateEmail = (email: string) => {
  return email.match(
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  );
};
const validateConfirmPassword = () => {
  if (password.value !== conPassword.value) {
    confirmPasswordError.value = "Passwords do not match";
  } else {
    confirmPasswordError.value = "";
  }
};
// Validate input on user input
const validate = (ev: any) => {
  const value = ev.target.value;
  const inputElement = emailInput?.value?.$el;

  inputElement.classList.remove("ion-valid");
  inputElement.classList.remove("ion-invalid");

  if (value === "") {
    customErrorMessage.value = "Email is required";
    return;
  }

  if (validateEmail(value)) {
    inputElement.classList.add("ion-valid");
    customErrorMessage.value = ""; // No error message when valid
  } else {
    inputElement.classList.add("ion-invalid");
    customErrorMessage.value = "Invalid Email Format"; // Custom error message when invalid
  }
};

const markTouched = () => {
  const inputElement = emailInput?.value?.$el;
  inputElement.classList.add("ion-touched");
};

/**
 * Send details to the login function. If an error then present toast of failed login
 */
async function goto_login() {
  router.push({ name: "login" });
}
async function auth_login() {
  // isRegister.value = true
  //   console.log(email.value);
  //   console.log(password.value);
  //   console.log(lname.value);
  //   console.log(fname.value);
  //   console.log(company.value);
  // return false
  //   todo need to add these values
  const login = {
    email: email.value,
    password1: password.value,
    password2: conPassword.value,
  };

  if (email.value && password.value && conPassword.value) {
    const res = await AuthAPI.userRegister(login);
    if (res.status === 400) {
      if (res?.data?.email[0]) {
        customErrorMessage.value = res.data.email[0];
      }
      if (res?.data?.password1[0]) {
        customErrorMessagePass.value = res.data.password1[0];
      }
    } else {
      isRegister.value = !isRegister.value;
      lname.value = "";
      fname.value = "";
      password.value = "";
      email.value = "";
      conPassword.value = "";
      company.value = "";
    }
  }
}

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};
</script>
<style scoped>
.login-header {
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
}
/* .input-background {
    background-color: #f2f2f2; 
  } */
ion-input {
  border-radius: 5px;
  background: #f2f2f2;
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
  --background: #a5ce3e;
  margin-top: 20px;
  --border-radius: 5px;
  height: 43px;
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
ion-input.custom {
  border-radius: 5px;
  --background: #f2f2f2;

  --padding-bottom: 10px;
  --padding-end: 10px;
  --padding-start: 10px;
  --padding-top: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
}

ion-input.custom.ios .input-bottom .helper-text,
ion-input.custom.ios .input-bottom .counter,
ion-input.custom.md .input-bottom .helper-text,
ion-input.custom.md .input-bottom .counter {
  color: var(--ion-color-primary);
}
.acceptTerm {
  color: var(--Color-Brand-black, #000);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
}
.policy {
  color: var(--Color-Brand-black, #0d99ff);
  font-family: Cabin;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-decoration-line: underline;
}
.error {
  color: #eb445a;
  font-size: 12px;
}
.password {
  font-size: 12px;
}
.conEmail {
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  color: #404040;
  text-align: center;

  /* mobile/Body medium */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
  max-width: 293px;
  margin: 0 auto;
}
.conEmailLink {
  padding-top: 40px;
  padding-bottom: 130px;
  text-align: center;
  color: #404040;
  text-align: center;

  /* mobile/Body medium */
  font-family: Cabin;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
}

.label-text {
  color: #808080;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
}
</style>

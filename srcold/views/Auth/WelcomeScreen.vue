<template>
  <ion-page>
    <ion-content>
      <div class="login-container">
        <h3 class="welcomeClass">Welcome to</h3>
        <h1>Epicus.</h1>
        <p class="subtitle">
          An app that enables team spirits and bring the best
        </p>
        <button @click="auth_login" class="login-btn">LOGIN</button>
        <div class="divider">OR</div>
        <button class="login-google-btn">
          <img src="/src/pictures/SSO Icon.svg" alt="Google" />
          LOGIN WITH GOOGLE
        </button>
        <p class="register-prompt">
          Logging for the first time? <a href="/register">Register here</a>
        </p>
        <button class="register-btn">REGISTER</button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import router from "@/router";
const auth_login = () => {
  router.push({ name: "login" });
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  max-width: 100%;
  margin-top: 70px;
}
.welcomeClass {
  color: var(--tietiary, rgba(44, 58, 209, 0.5));
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 127.273% */
}

h1 {
  color: var(--tietiary, rgba(44, 58, 209, 0.5));
  text-align: center;
  font-family: "Epilogue", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 70% */
}

.subtitle {
  color: #9f9f9f;
  text-align: center;
  font-family: Cabin;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
  padding: 0 50px;
}

.login-btn,
.login-google-btn,
.register-btn {
  width: 100%;
  padding: 12px 24px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.login-btn {
    margin-top: 150px;
  background-color: #8bc34a; /* Adjust the color to match your design */
  color: white;
}

.login-google-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;

  border: 1px solid var(--main-green, #a5ce3e);
  color: #a5ce3e;
}

.login-google-btn img {
  margin-right: 10px;
}

.divider {
  margin: 15px 0;
  color: #49454F;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
letter-spacing: 0.25px;
}

.register-prompt {
    margin-top: 210px ;
  color: #5e5e5e;
  text-align: center;
  font-family: Cabin;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
}

.register-prompt a {
  color: #5e5e5e;
  text-decoration: none;
}

.register-btn {
    color: var(--secondary, #FF8512);
text-align: center;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.75px;
text-transform: uppercase;
  background-color: transparent;
  color: #FF8512;  
  border: 1px solid var(--secondary, #FF8512);
}
</style>

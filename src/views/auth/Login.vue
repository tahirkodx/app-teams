<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Registration</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-input
        label-placement="floating"
        label="email"
        v-model="email"
      ></ion-input>
      <ion-input
        label-placement="floating"
        label="password"
        type="password"
        v-model="password"
      ></ion-input>
      <ion-button @click="auth_login">Login</ion-button>
      <p>
        <a @click="() => router.push({ name: 'registration' })"
          >Register as new user</a
        >
      </p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, watchEffect, onMounted} from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
} from "@ionic/vue";
import router from "@/router/index";
import { presentToast } from "@/utils/toast";
import { AuthAPI } from "@/utils/actions";
import  { useUserStore }  from "@/store";
import { storeToRefs } from 'pinia'

const email = ref("");
const password = ref("");

/**
 * Send details to the login function. If an error then present toast of failed login
 */
 
const userStore = useUserStore();

const { settings } = storeToRefs(userStore)
 
async function auth_login() {
  const login = {
    email: email.value,
    password: password.value,
  };
  const isLogin = await AuthAPI.userLogin(login);
  if (isLogin.key) {
    await userStore.getUserSettings();
    // console.log("Here is setting for user ;" , userSettings.value.email)
     router.push({ name: "team" });
  } else {
    presentToast("User password combination incorrect");
  }
  
}
onMounted(() => {
  console.log(settings)
}),
watchEffect(() => {
  console.log("Here is user data 1", settings);
});
</script>

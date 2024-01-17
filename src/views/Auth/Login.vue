<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Registration</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="ion-flex ion-justify-content-center ion-align-items-center" style="height: 100%;">
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
          <ion-button expand="block" class="ion-margin-top" @click="auth_login">Login</ion-button>
          <ion-button expand="block" fill="outline" class="ion-margin-top" @click="() => router.push({ name: 'registration' })">
            Register as new user
          </ion-button>
        </div>
      </div>
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
      IonContent,
      IonButton,
      IonInput,
    } from '@ionic/vue';
    import router from '@/router/index'
    import { presentToast } from "@/utils/toast";
    // const userStore  = useUserStore()
    import { AuthAPI } from "@/utils/actions";
 
    const email = ref("")
    const password = ref("")

    /**
     * Send details to the login function. If an error then present toast of failed login
     */
    async function auth_login() {
      console.log(email.value)
      console.log(password.value)
      const login = {
        email : email.value,
        password : password.value
      }
      if(email.value && password.value){
        const res = await AuthAPI.userLogin(login)
        if(res.key){
          email.value = ''
          password.value = ''
          router.push({name: 'team'})
        }
        
      }
      
    }
  </script>
  
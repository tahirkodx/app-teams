<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Registration</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-input
          label="email"
          label-placement="floating"
          v-model="details.email"
          @ion-blur="emailTouched=true"
          :helper-text="emailHelptext"
        />

        <ion-input
          label="Password"
          label-placement="floating"
          v-model="details.password1"
          @ion-blur="passwordTouched=true"
          :helper-text="passwordHelptext"
        />

        <ion-input
          label="Password confirmation"
          label-placement="floating"
          v-model="details.password2"
          @ion-blur="password_confirmTouched=true"
          :helper-text="password_confirmHelptext"
        />

        {{ failureMessage }}
        
        <ion-button expand="block" :disabled="!readyToSend" @click="register()">Register</ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
    import { ref, computed } from "vue";
    import { 
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonInput,
      IonButton,
    } from '@ionic/vue';
    import { useUserStore } from "@/stores/user";
    import { validateEmail, validatePassword } from '@/utils/validation'
    import router from '@/router/index'
    const userStore = useUserStore()

    const details = ref({
      password1: "",
      password2: "",
      email: "",
    })


    const emailTouched = ref(false)  // Turns true when email field loses focus
    const passwordTouched = ref(false)  // Turns true when 'password' field loses focus
    const password_confirmTouched = ref(false)  // Turns true when 'password confirmation' field loses focus

    // Display e-mail help text if email field is touched and the e-mail is invalid
    const emailHelptext = computed(() => {
      if (emailTouched.value && (!validateEmail(details.value.email))) {
        return "Enter valid e-mail"
      }
    })

    // Display password help text if password field is touched and the password is invalid
    const passwordHelptext = computed(() => {
      if (passwordTouched.value && (!validatePassword(details.value.password1))) {
        return "Password must be longer than 7 characters"
      }
    })

    // Display password confirmation help text if password confirmation field is touched and the passwords are not equal
    const password_confirmHelptext = computed(() => {
      if (password_confirmTouched.value && details.value.password1 != details.value.password2) {
        return "Passwords are not equal"
      }
    })

    /**
     * Function performs all checks and returns true if all are met:
     *   - Password is a valid password
     *   - Password is longer than 8 characters
     *   - Passwords are equal
     *   - Email is valid
     *   - Email is not empty
     */
    const readyToSend = computed(() => {      
      if (
        validateEmail(details.value.email) &&
        details.value.password1.length >= 8 &&
        details.value.password1 == details.value.password2 &&
        validatePassword(details.value.password1) &&
        details.value.email.length > 0
      ) {
        return true
      } else {
        return false
      }
    })


    /**
     * Registers the user or displays error message
     */
    const failureMessage = ref('')
    async function register() {
      try {
        await userStore.register(details.value)
        router.push({name: 'registrationsuccess'})
      } catch (error: any) {
        if (error.data) {
          failureMessage.value = error.data
        }
      }
    }
  
  </script>
  
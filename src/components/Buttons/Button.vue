<template>
  <ion-button class="custom" @click="() => router.push({ name: 'teamsupport' })" expand="block">Ask Help</ion-button>
</template>
<script setup lang="ts">
import { IonButton } from "@ionic/vue";
import router from "@/router/index";
</script>
<style scoped>
.custom {
    
    padding-top: 20px;
    padding-bottom: 20px;
  }
</style>

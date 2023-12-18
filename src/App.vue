<template>
  <ion-app>
    <suspense>
      <ion-router-outlet />
      <template #fallback>
        Loading...
      </template>
    </suspense>
  </ion-app>
</template>

<script setup lang="ts">
  import {
    IonApp,
    IonRouterOutlet,
  } from '@ionic/vue';
</script>
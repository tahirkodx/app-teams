<template>
 <ion-button id="auto-trigger">Size=Auto</ion-button>
  <ion-popover trigger="auto-trigger" size="auto">
    <ion-content class="ion-padding">Hello!</ion-content>
  </ion-popover>
</template>

<script lang="ts" setup>
 import { IonButton, IonContent, IonPopover } from '@ionic/vue';
 import { defineProps} from "vue";

 const props = defineProps({
  id: String,
  infoText: String,

});
 

</script>

 

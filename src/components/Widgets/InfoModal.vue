<template>
 <ion-icon
            class="iconStyle"
            icon="/src/pictures/quill_info.svg"
            id="auto-trigger" 
          ></ion-icon>
  <ion-popover mode="md" trigger="auto-trigger" size="auto">
    <ion-content class="ion-padding">
      <h4>New Member</h4>
      <p>
        For new members add e-mail address' or something in that direction to invite new members.
      </p>
    </ion-content>
  </ion-popover>
</template>

<script lang="ts" setup>
 import { IonButton, IonContent, IonPopover,IonIcon, } from '@ionic/vue';
 import { defineProps} from "vue";

 const props = defineProps({
  id: String,
  infoText: String,

});
 

</script>

<style scoped>
.iconStyle {
  padding-right: 5px;
  margin-bottom: -3px;
}
 
</style>

 

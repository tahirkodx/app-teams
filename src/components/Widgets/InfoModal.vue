<template>
  <ion-icon
    class="iconStyle"
    icon="/src/pictures/quill_info.svg"
    id="auto-trigger"
  ></ion-icon>
  <ion-popover mode="md" trigger="auto-trigger" size="auto">
    <ion-content class="ion-padding">
      <h6 class="title-text">New Member</h6>
      <p class="text-desc">
        For new members add e-mail address' or something in that direction to
        invite new members.
      </p>
    </ion-content>
  </ion-popover>
</template>

<script lang="ts" setup>
import { IonButton, IonContent, IonPopover, IonIcon } from "@ionic/vue";
import { defineProps } from "vue";

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
.title-text {
  margin-top: 0px;
  margin-bottom: 8px;
  color: var(--black, #000);

  /* mobile/Title Medium */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
}

.text-desc {
  color: var(--Grays-Casper-CA-600, #475569);

  /* mobile/Lable large */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
  margin: 0;
}
</style>

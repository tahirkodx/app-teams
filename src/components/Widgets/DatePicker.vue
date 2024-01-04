<template>
  <ion-modal ref="modal" :is-open="isVisible">
    <ion-content>
      <ion-toolbar>
        <ion-title slot="start">Schedule meeting with Coach</ion-title>
      </ion-toolbar>
      <ion-card>
        <ion-card-content>
          <ion-datetime
            :show-default-buttons="false"
            :show-default-title="true"
            :show-default-time-label="false"
            :show-default-time="false"
            @ionCancel="cancel"
            presentation="date"
            @ionConfirm="confirm"
            @ionChange="dateChanged"
          >
          <span slot="title" class="date-title"></span></ion-datetime>
          <!-- Custom buttons outside of ion-datetime -->

          <ion-toolbar>
            <ion-buttons slot="end">
              <ion-button @click="cancel"> Cancel </ion-button>
            </ion-buttons>
            <ion-buttons slot="end">
              <ion-button @click="confirm"> Ok </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-modal>
</template>

<script setup lang="ts">
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonContent,
  IonDatetime,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";
import { defineProps, watch, defineEmits, ref } from "vue";
import { closeOutline, heartOutline } from "ionicons/icons";

const props = defineProps({
  isVisible: Boolean,
});
// const datetime = ref();
//   const reset = () => datetime.value.$el.reset();
//   const cancel = () => datetime.value.$el.cancel();
//   const confirm = () => datetime.value.$el.confirm();
const datetimeValue = ref("2022-04-21T00:00:00");
const dateChanged = (event) => {
    datetimeValue.value = event.detail.value;
};

const cancel = () => {
  console.log("Cancel action triggered");
  closeModal()
  // Additional logic for cancel action
};

const confirm = () => {
  console.log("Confirm action triggered with value:", datetimeValue.value);
  // Additional logic for confirm action
};

const emit = defineEmits(["update:isVisible"]);

watch(
  () => props.isVisible,
  (newValue) => {
    if (!newValue) {
      emit("update:isVisible", false);
    }
  }
);

const closeModal = () => {
  emit("update:isVisible", false);
};
</script>

<style scoped>
ion-modal {
  --height: 60%;
  --width: 95%;
  --border-radius: 16px;
  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

ion-modal::part(backdrop) {
  background: rgba(209, 213, 219);
  opacity: 1;
}

ion-modal ion-toolbar {
  --background:transparent;
  /* --color: white; */
}
ion-card {
  box-shadow: none;
}
ion-datetime {
  background: transparent;
}
ion-title {
  padding: 5px;
  text-align: start;
}
.date-title{
    display: none;
}
</style>

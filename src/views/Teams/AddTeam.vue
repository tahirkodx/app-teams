<template>
  <ion-modal
    ref="modal"
    :is-open="isVisible"
    :initial-breakpoint="1"
    :breakpoints="[0, 1]"
    @willDismiss="onWillDismiss"
  >
    <div class="block">
      <h2 class="heading">Enter your Invites Details</h2>
      <ion-card class="input-card">
        <ion-card-content>
          <ion-text color="dark">{{ props.email }}</ion-text>
          <ion-row>
            <ion-col size="6">
              <ion-item>
                <ion-input
                  v-model="first_name"
                  placeholder="First name"
                ></ion-input>
              </ion-item>
            </ion-col>
            <ion-col size="6">
              <ion-item>
                <ion-input
                  v-model="last_name"
                  placeholder="Last name"
                ></ion-input>
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-card-content>
      </ion-card>
      <ion-button class="ion-padding" @click="updateMember" expand="block"
        >ADD INVITE DETAILS</ion-button
      >
    </div>
  </ion-modal>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import {
  IonText,
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonItem,
  IonInput,
  IonRow,
  IonCol,
  IonFooter,
  IonButton,
  IonToolbar,
  IonIcon,
  IonModal,
} from "@ionic/vue";

import {
  chevronForward,
  add,
  arrowUpOutline,
  closeOutline,
  play,
} from "ionicons/icons";
import { OverlayEventDetail } from "@ionic/core/components";

const props = defineProps(["members", "isVisible", "email"]);
const first_name = ref();
const last_name = ref();
const emit = defineEmits();

console.log(props.members);
const updateMember = () => {
  if (first_name.value && last_name.value) {
    const data = {
      email: props.email,
      first_name: first_name.value,
      last_name: last_name.value,
      role: 1,
    };
    props.members.push(data);
    first_name.value = "";
    last_name.value = "";
    emit("updateMembers", props.members);
    emit("updateVisible", false);
  }
};
const onWillDismiss = () => {
  // props.isVisible.value = false;
  emit("updateVisible", false);
};
</script>
<style scoped>
.heading {
  color: var(--black, #000);
  font-family: Cabin;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  margin-left: 10px;
}

.input-card {
  --ion-background-color: #fff;
  --ion-box-shadow: 0px 5px 20px 0px rgba(108, 117, 125, 0.2);
  border: 1px solid #f2f2f2;
}

ion-card-content {
  padding: 5px;
  --padding-start: 0;
  --padding-end: 0;
  --padding-top: 0;
  --padding-bottom: 0;
}

ion-item {
  --padding-end: 0;
  --border-radius: 8px; /* Customize the border radius if needed */
  --background: #f2f2f2; /* Custom background to match the screenshot */
  --ion-item-background: #f2f2f2;
  margin: 0.5rem 0;
}

ion-input {
  --padding-start: 1rem;
  --padding-end: 1rem;
  --placeholder-color: #808080;
  --placeholder-opacity: 1;
  --color: #808080;
  --font-family: Cabin;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
}

/* If you need to adjust the spacing between the ion-item elements */
ion-row {
  --ion-grid-column-padding: 0;
}

/* Adjust the size of the ion-col if you need more precise control */
ion-col {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
ion-icon {
  float: right;
}
.block {
  width: 100%;
  /* height: 300px; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
}

ion-modal {
  --height: auto;
  --border-radius: 20px 20px 0px 0px;
}
</style>

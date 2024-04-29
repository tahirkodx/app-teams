<template>
  <div class="ion-padding">
    <IonRow>
      <ion-col>
        <h4 class="text-lg">Invite requests<span>(20)</span></h4>
      </ion-col>
    </IonRow>
  </div>
  <div class="cus-padding">
    <IonList>
      <IonItem v-for="(item, index) in items" :key="index">
        <IonImg :src="item.imageUrl" :alt="item.alt" class="custom-img" />
        <IonLabel class="text-size ion-padding-start">
          <h4>{{ item.name }}</h4>
          <h5>{{ item.position }}</h5>
          <h6>{{ item.location }}</h6>
        </IonLabel>
        <div class="custom">
          <ion-icon
            :icon="closeOutline"
            class="cus-ion-padding customIcon"
          ></ion-icon>
          <ion-icon
            :icon="checkmarkOutline"
            color="primary"
            class="cus-ion-padding customIcon"
          ></ion-icon>
        </div>
      </IonItem>
    </IonList>
  </div>
</template>

<script setup lang="ts">
import {
  IonRow,
  IonCol,
  IonLabel,
  IonButton,
  IonIcon,
  IonItem,
  IonList,
  IonImg,
  IonPopover,
  IonText,
} from "@ionic/vue";
import { optionsOutline, closeOutline, checkmarkOutline } from "ionicons/icons";
const items = [
  {
    imageUrl: "/src/pictures/Ellipse1.svg",
    alt: "Finished Success",
    name: "Theresa Webb",
    position: "HR Manager at Google",
    location: "United Kingdom (GMT)",
  },
  {
    imageUrl: "/src/pictures/Ellipse1.svg",
    alt: "Finished Success",
    name: "Theresa Webb",
    position: "HR Manager at Google",
    location: "United Kingdom (GMT)",
  },
];
</script>

<style scoped>
ion-list {
  margin-left: -20px;
}

ion-img {
  margin-top: -15px;
}

.ion-icon {
  color: #303030;
}

.text-lg {
  color: var(--Neutrals-black, #303030);
  font-family: "Cabin", sans-serif;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
}

.text-lg span {
  color: #999;
}

.compact-filter-chip {
  display: flex;
  width: 100px;
  height: 32px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(51, 51, 51, 0.3);
  border-radius: 5px;
  --background: white;
}

.compact-filter-chip:hover {
  background: #f0f0f0;
}

.compact-filter-chip span {
  color: #999;
  width: 39px;
  letter-spacing: 0.1px;
}

.text-size h4 {
  font-size: 14px;
  letter-spacing: 0.1px;
}

.text-size h5 {
  color: var(--off-grey, #959ea3);
  font-size: 12px;
  letter-spacing: 0.2px;
}

.text-size h6 {
  color: #333;
  font-size: 10px;
  border: 1px solid #f2f2f2;
  background-color: #f2f2f2;
  padding: 5px;
  width: 110px;
}
.customIcon {
  background-color: #f2f2f2;
  border-radius: 50%;
}
.custom {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}

.cus-padding {
  padding: 0px 16px 16px 16px;
}

ion-col {
  padding: 0;
}

.cus-ion-padding {
  padding: 18px;
}
</style>

<template>
  <div class="ion-padding">
    <IonRow>
      <ion-col>
        <h4 class="text-lg">Buddies<span> (1.5k)</span></h4>
      </ion-col>
      <ion-button id="trigger-button" class="compact-filter-chip">
        <ion-icon :icon="optionsOutline" class="icon"></ion-icon>
        <span>All</span>
        <ion-popover
          trigger="trigger-button"
          side="bottom"
          size="cover"
          alignment="start"
        >
          <ion-text class="ion-padding">All</ion-text>
          <ion-text class="ion-padding">Buddies</ion-text>
          <ion-text class="ion-padding">Coaches</ion-text>
        </ion-popover>
      </ion-button>
    </IonRow>
  </div>
  <div class="ion-padding">
    <ion-list>
      <ion-item v-for="(item, index) in items" :key="index">
        <ion-img :src="item.imageUrl" :alt="item.alt" class="custom-img" />
        <ion-label class="text-size ion-padding-start">
          <h4>{{ item.name }}</h4>
          <h5>{{ item.position }}</h5>
          <h6>{{ item.location }}</h6>
        </ion-label>
        <ion-icon
          :icon="ellipsisVertical"
          class="ion-padding"
          color="dark"
        ></ion-icon>
        <ion-icon :icon="chatbubbleEllipses" color="primary"></ion-icon>
      </ion-item>
    </ion-list>
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
import {
  optionsOutline,
  ellipsisVertical,
  chatbubbleEllipses,
} from "ionicons/icons";
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
ion-button {
  --color: #yourColor;
  --padding-start: 8px;
}

ion-list {
  margin-left: -20px;
}

ion-img {
  margin-top: -15px;
}

.ion-icon {
  color: #303030;
}

ion-col {
  padding: 0;
}

.text-lg {
  color: var(--Neutrals-black, #303030);
  font-family: "Cabin", sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
}

.text-lg span {
  color: #999;
}

.compact-filter-chip {
  display: flex;
  width: 100px;
  height: 32px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 1px 2px 0px rgba(51, 51, 51, 0.3);
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
  color: #000;

  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
}

.text-size h5 {
  color: var(--off-grey, #959ea3);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
}

.text-size h6 {
  color: #333;
  font-size: 10px;
  border: 1px solid #f2f2f2;
  background-color: #f2f2f2;
  padding: 5px;
  width: 110px;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 160% */
}

.button-inner {
  display: flex;
  justify-content: flex-start;
}
</style>

<template>
  <div class="ion-padding">
    <ion-grid>
      <ion-row>
        <ion-col size="9">
          <ion-input
            type="email"
            ref="emailInput"
            class="custom"
            placeholder="add member"
          >
          </ion-input>
          <!-- <span class="error">{{ customErrorMessage }}</span> -->
        </ion-col>
        <ion-col size="3">
          <ion-button expand="block">ADD</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
  <div class="ion-padding">
    <IonGrid>
      <IonRow>
        <IonText>
          <p>Team member you may know</p>
        </IonText>
      </IonRow>
      <IonRow>
        <IonCol size="6">
          <ion-card class="ion-no-padding">
            <img
              alt="Silhouette of mountains"
              src="/src/pictures/Ellipse1.svg"
              class="customImg"
            />
            <ion-card-header>
              <ion-card-title>Albert Flores</ion-card-title>
            </ion-card-header>

            <ion-card-content class="ion-no-padding">
              <p class="role">HR Manager at Google</p>
              <p class="location">United Kingdom (GMT)</p>
              <ion-button expand="block">INVITE</ion-button>
            </ion-card-content>
          </ion-card>
        </IonCol>
        <IonCol size="6">
          <ion-card class="ion-no-padding">
            <img
              alt="Silhouette of mountains"
              src="/src/pictures/Ellipse1.svg"
              class="customImg"
            />
            <ion-card-header>
              <ion-card-title>Albert Flores</ion-card-title>
            </ion-card-header>

            <ion-card-content class="ion-no-padding">
              <p class="role">HR Manager at Google</p>
              <p class="location">United Kingdom (GMT)</p>
              <ion-button expand="block">INVITE</ion-button>
            </ion-card-content>
          </ion-card>
        </IonCol>
      </IonRow>
    </IonGrid>
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
  IonGrid,
} from "@ionic/vue";
import {
  optionsOutline,
  ellipsisVerticalOutline,
  chatbubbleEllipses,
} from "ionicons/icons";
</script>

<style scoped>
.ion-icon {
  color: #303030;
}
ion-card {
  margin: 0px;
  padding: 10px;
  text-align: center;
}
ion-card-title {
  color: #000;

  text-align: center;
  /* mobile/Title Medium */
  font-family: Cabin;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
}
.role {
  color: var(--off-grey, #959ea3);
  text-align: center;

  /* mobile/Body small */
  font-family: Cabin;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
}

ion-input.custom {
  border-radius: 5px;
  --background: #f2f2f2;
  --padding-bottom: 10px;
  --padding-end: 10px;
  --padding-start: 10px;
  --padding-top: 10px;
  height: 100%;
}
ion-input {
  border-radius: 5px;
  --background: #f2f2f2;
  --padding-start: 10px;
}
.customImg {
  display: block;
  margin: 0 auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.location {
  display: flex;
  padding: 2px 2px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background: #f2f2f2;
}
</style>

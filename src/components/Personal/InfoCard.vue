<template>
  <div class="ion-no-padding">
    <!-- new end -->
    <IonGrid>
      <IonRow>
        <IonCol size="4">
          <div class="profile-pic">
            <ion-img
              src="/src/pictures/Ellipse1.svg"
              alt="Finished Success"
            ></ion-img>
          </div>
        </IonCol>
        <IonCol size="8" class="frame">
          <div class="frame-wrapper-top">
            <div class="info-name">Devon Lane</div>
            <div class="info-role">Senior Manager</div>
            <ion-icon :icon="ellipsisVertical" class="ri-more-fill"></ion-icon>
          </div>
          <div class="frame-wrapper-bottom">
            <div class="info-active">3 Active Teams</div>
            <div class="info-profile">Big 5 Profile</div>
            <ion-icon
              :icon="alertCircleOutline"
              class="ri-more-fill"
            ></ion-icon>
          </div>
        </IonCol>
        <!-- <IonCol size="2">
            <ion-icon :icon="ellipsisVertical" ></ion-icon>
            <ion-icon :icon="ellipsisHorizontalCircle" ></ion-icon>
          </IonCol> -->
      </IonRow>
    </IonGrid>
    <!--  -->
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
  ellipsisVertical,
  ellipsisHorizontalCircle,
  alertCircleOutline,
} from "ionicons/icons";

</script>

<style scoped>
ion-grid {
  background: #aed351;
  color: #fff;
}
.info-profile {
  color: #e6e6e6;

  /* mobile/Body small */
  font-family: Cabin;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
}

.info-name {
  font-size: 22px;
  line-height: 28px;
}

.info-role {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
}

.info-active {
  color: var(--main-green, #a5ce3e);
  font-size: 10px;
  line-height: 16px;
  border: 1px solid #f2f2f2;
  background-color: #f2f2f2;
  padding: 2px 8px;
  width: 85px;
  border-radius: 100px;
  font-family: Cabin;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
}

.profile-pic {
  width: 100px;
  height: 100px;
  border: 4px solid #fff;
  border-radius: 50%;
}

.frame .frame-wrapper-top {
  position: relative;
  width: 100%;
}
.frame .frame-wrapper-bottom {
  display: flex;
  width: 100%;
  gap: 25%;
}

.frame-wrapper-top .ri-more-fill {
  height: 20px;
  left: 90%;
  position: absolute;
  top: 0;
  width: 20px;
}
.frame-wrapper-bottom .ri-more-fill {
  height: 20px;
  left: 88%;
  position: absolute;

  width: 20px;
}
</style>

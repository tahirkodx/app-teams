<template>
  <div class="ion-no-padding">
    <!-- new end -->
    <IonGrid :class="isSmall === true ? '' : 'ion-padding'">
      <IonRow>
        <IonCol :size="isSmall === true ? '2' : '4'">
          <div class="container">
            <div
              :class="isSmall === true ? 'small-profile-pic' : 'profile-pic'"
              id="top-center4"
            >
              <ion-img
                src="/src/pictures/Ellipse1.svg"
                alt="Finished Success"
                :class="isSmall === true ? 'small-image' : 'large-image'"
              ></ion-img>
            </div>
            <ion-popover trigger="top-center4" side="top" alignment="center">
              <ion-content class="ion-padding popover-content">
                <div class="popover-item">Robert Fox</div>
                <div class="popover-item info-role text-purple">
                  robertfox1101@gmail.com:
                </div>
                <div class="popover-item info-role text-purple">
                  (201) 555-0124
                </div>
                <div class="popover-item font-xs">(GMT) United Kingdom</div>
                <ion-icon :icon="closeOutline" class="close-icon"></ion-icon>
              </ion-content>
            </ion-popover>
          </div>
        </IonCol>
        <IonCol :size="isSmall === true ? '10' : '8'" class="frame">
          <div
            :class="
              isSmall === true
                ? 'frame-wrapper-small'
                : 'frame-wrapper-top ion-margin-top'
            "
          >
            <div class="info-name">Devon Lane</div>
            <div class="info-role">Senior Manager</div>

            <div v-if="isSmall === true" class="d-flex item-right">
              <div class="info-profile">Big 5 Profile</div>
              <ion-icon
                :icon="alertCircleOutline"
                class="ri-more-fill"
              ></ion-icon>
            </div>
            <!-- <ion-icon :icon="ellipsisVertical" class="ri-more-fill"></ion-icon> -->
          </div>
          <div v-if="isSmall === false" class="frame-wrapper-bottom">
            <div class="info-active">3 Active Teams</div>
            <div class="d-flex">
              <div class="info-profile">Big 5 Profile</div>
              <ion-icon
                :icon="alertCircleOutline"
                class="ri-more-fill"
              ></ion-icon>
            </div>
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
  IonIcon,
  IonImg,
  IonPopover,
  IonContent,
  IonGrid,
} from "@ionic/vue";
import { alertCircleOutline, closeOutline } from "ionicons/icons";

defineProps({
  isSmall: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
ion-grid {
  background: #aed351;
  color: #fff;
}

ion-popover {
  --width: 253px;
  --height: 120px;
  top: 9%;
  left: 11%;
  --ion-backdrop-color: transparent;
  --ion-backdrop-opacity: 0;
}

.popover-content {
  display: flex;
  flex-direction: column;
}

.popover-item {
  margin-bottom: 6px;
}

.close-icon {
  position: absolute;
  top: 12px;
  right: 14px;
  font-size: 21px;
  cursor: pointer;
  color: #808080;
}

.info-profile {
  color: #e6e6e6;

  /* mobile/Body small */
  font-family: Cabin;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  /* 133.333% */
}

.text-purple {
  color: #475569 !important;
}

.info-name {
  font-size: 22px;
  line-height: 28px;
}

.info-role {
  font-size: 14px;
  line-height: 20px;
  color: #f2f2f2;
  letter-spacing: 0.1px;
  font-weight: 400;
  letter-spacing: 0.25px;
}

.font-xs {
  color: #808080;
  font-family: Cabin;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  /* 160% */
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
  margin-left: 10px;
}

.small-profile-pic {
  width: 62px;
  height: 62px;
  border: 4px solid #fff;
  border-radius: 50%;
  margin-left: 10px;
  margin-top: 0;
}

.item-right {
  position: absolute;
  right: 5px;
  bottom: 0px;
}

.frame-wrapper-small {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-left: 14px;
  padding-top: 7px;
}

.frame .frame-wrapper-top {
  position: relative;
  width: 100%;
}

.frame .frame-wrapper-bottom {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 25%;
  margin-top: 4px;
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
  left: 84%;
  /* position: absolute; */
  margin-top: -3px;
  width: 20px;
}

.d-flex {
  display: inline-flex;
  gap: 4px;
}

.small-image {
  height: 52px;
  widows: 52px;
}

/* ion-col {
  display: flex;
  align-items: center;
  justify-content: center;
} */
</style>

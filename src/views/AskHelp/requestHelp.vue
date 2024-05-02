<template>
  <ion-page>
    <Header is-back-button router-link="ask-help" />
    <ion-content :fullscreen="true" class="ion-padding">
      <h3>Request help?</h3>
      <div class="title-line"></div>
      <div class="text-today">
        <span>Today</span>
      </div>
      <chat />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import Header from "@/components/Header/Header.vue";
import Chat from "@/components/Widgets/Chat.vue";
</script>

<style scoped>
.text-today {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-today span {
  background-color: #f2f2f2;
  color: black;
  width: fit-content;
  padding: 2px 8px;
  border-radius: 3px;

  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
.head-title {
  color: black;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  word-wrap: break-word;
  margin-bottom: 0px;
}

.ion-text {
  color: black;
  font-size: 14px;
  font-family: Cabin;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  word-wrap: break-word;
  padding-left: 8px;
}

.ion-text-desc {
  color: #757575;
  font-size: 14px;
  font-family: Cabin;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  word-wrap: break-word;
  padding-top: 120px;
  text-align: center;
}

.head-desc {
  color: #666666;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
  margin: 2px 0px;
}

.icons {
  height: 24px;
  width: 24px;
}

.head-clock-text {
  color: black;
  font-size: 14px;
  font-family: Cabin;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  word-wrap: break-word;
  margin: 0;
  display: flex;
  gap: 8px;
}

.clock-icon {
  height: 24px;
  width: 24px;
}

.select-day-text {
  color: black;
  font-size: 22px;
  font-weight: 500;
  line-height: 28px;
  word-wrap: break-word;
  text-align: center;
  padding-bottom: 16px;
}

.previousButton {
  border-radius: 5px;
  border: 1px solid var(--main-green, #f2f2f2);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--main-green, #a5ce3e);
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  --background: #fff;
  --background-activated: #ebe5e5;
  width: 100%;
}

.button-container {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: #fff;
  gap: 29px;
}

.nextButton {
  border-radius: 5px;
  border: 1px solid var(--main-green, #a5ce3e);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  background-color: #a5ce3e;
  width: 100%;
}

.title-line {
  border-bottom: 1px solid rgba(249, 238, 238, 0.95);
  margin-top: 18px;
  margin-bottom: 24px;
  width: auto;
}

.date-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <ion-page>
    <Swiper
      :spaceBetween="30"
      :pagination="{ clickable: true }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="slide-content">
          <ion-img
            class="imgStyle"
            src="/src/pictures/Frame 2608638.svg"
          ></ion-img>
          <div class="title">Building your team stronger and smarter</div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="slide-content">
          <ion-img
            class="imgStyle"
            src="/src/pictures/Frame 2608639.svg"
          ></ion-img>
          <div class="title">Grow your teams and grow yourself</div>
        </div></swiper-slide
      >
      <swiper-slide>
        <div class="slide-content">
          <div>
            <div class="slidertitle">Elevate your leadership</div>
          </div>
          <ion-img
            class="imgStyle"
            src="/src/pictures/follow the leader-pana 1.svg"
          ></ion-img>
          <div class="button-container">
            <button @click="welcomePage" class="login-button">LOGIN</button>
            <span class="or-text">OR</span>
            <button @click="reg_login" class="register-button">REGISTER</button>
          </div>
        </div>
      </swiper-slide>
    </Swiper>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { IonImg, IonButton, IonPage } from "@ionic/vue";
import router from "@/router/index";
// Define modules
const modules = ref([Pagination]);

const welcomePage = () => {
  router.push({ name: "welcomeScreen" });
};
const reg_login = () => {
  router.push({ name: "welcomeScreen" });
};
</script>

<style>
body {
  position: relative;
  height: 100%;
  width: 100%;
}

body {
  background: #eee;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.imgStyle {
  margin-bottom: 30%;
  /* margin-top: 20%; */
}

.swiper-slide .slide-content {
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
  width: 100%;
}

.title {
  color: #9f9f9f;
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
}
.slidertitle {
  color: var(--tietiary, rgba(44, 58, 209, 0.5));
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  margin-left: 130px;
}

.button-container {
  display: flex;
  flex-direction: column;
  width: 100%; /* Full width of the slide */
  align-items: center;
}

.login-button,
.register-button {
  width: 90%; /* Set the buttons to take 80% of the slide's width */
  padding: 12px 24px;
  margin: 10px 0; /* Add margin for spacing between buttons */
  font-size: 16px;
  border-radius: 5px;
}

.login-button {
  background-color: #8bc34a; /* Adjust the color if needed */
  border: none;
  color: white;
}

.register-button {
  background-color: white;
  color: #ff9800;
  border: 2px solid #ff9800;
}

.or-text {
  margin: 5px 0;
  color: #49454f;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
}
</style>

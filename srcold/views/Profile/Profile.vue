<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-button>
                    <ion-icon :icon="arrowBackOutline"></ion-icon>
                </ion-button>
            </ion-buttons>
            <ion-title class="toolbar-title">Profile</ion-title>
            <ion-buttons slot="start">
                <ion-button>
                    <ion-icon :icon="personCircleOutline"></ion-icon>
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <div class="profile-card">
            <div class="profile-image">
                <img src="/src/pictures/profile.svg" alt="Profile Image" />
            </div>
            <div class="profile-info">
                <h2 class="h2Style">Wouter van de Rijk</h2>
                <h3 class="h3Style">Senior Manager</h3>
                <div class="divider"></div>
                <p class="pStyle">3 active teams</p>
            </div>
        </div>
        <MyGoals />
       
            
    </ion-content>
    <!-- The rest of your page content goes here -->
</template>

<script setup lang="ts">
import {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonTitle,
    IonAvatar,
} from "@ionic/vue";
import { arrowBackOutline, personCircleOutline } from "ionicons/icons";
import MyGoals from '@/components/Goals/MyGoals.vue';



</script>

<style scoped>
ion-header {
    --background: #fff;
    /* or any color that matches your design */
    --ion-color-base: #fff;
    /* to ensure the background color fills the header */
    
}

ion-toolbar {
    --background: #fff;
    --padding-start: 0;
    /* to align the title and buttons properly */
    --padding-end: 0;
    /* to align the title and buttons properly */
}

ion-title {
    color: var(--Neutrals-black, #303030);
    /* Title Medium */
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    /* 150% */
    letter-spacing: 0.15px;
    text-align: justify;
}

/* If using scoped styles, deep selectors might be needed */
ion-button {
    --background: transparent;
    /* remove the default background */
}

/* Styling for the icons */
ion-icon {
    width: 27px;
    height: 27px;
    flex-shrink: 0;
    color: #747474;
}
 
.profile-card {
    display: flex;
    align-items: center;
    /* border: solid 1px #ccc; just for styling, can be removed */
    padding: 5px 15px 0px 0px;
    margin: 0px 5px 0px -10px;
    position: relative;
    
}

.profile-image {
    flex: 1;
    /* adjust size accordingly */
    width: 98px;
    /* adjust size accordingly */
    height: 98px;
    /* adjust size accordingly */
    border-radius: 12px;
    margin-right: 25px;
    margin-bottom: 45px;
}

.profile-image img {
    width: 85%;
    height: auto;
}

.profile-info {
    /* flex: 1; */
    text-align: right;
}

.profile-info h2,
.profile-info h3 {
    margin: 0;
}

/* .profile-info p {
  margin: 4px 0 0;
} */
.h2Style {
    color: #ff8512;

    /* Title Large */
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    /* 127.273% */
}

.h3Style {
    color: #868686;

    /* Body small */
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    /* 133.333% */
}

.pStyle {
    color: #c9c9c9;
    /* margin: 25px 0 0; */
    /* Body small */
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    /* 133.333% */
}

.profile-info .divider {
    border-bottom: 2px solid #cfcfcf;
    /* Light grey border */
    width: 100%;
    /* Length of the line */
    margin: 10px auto;
    /* Center the divider with equal margin on all sides */
    opacity: 0.5;
    margin-top: 38px;
}
</style>

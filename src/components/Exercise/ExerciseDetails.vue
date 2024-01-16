<template>
  <div class="exercise-details-container">
    <div class="header-container">
        <h1 class="header-title">Exercise Details</h1>
      </div>

    <div class="card-container">
      <ion-card class="info-card">
        <div class="info-section">
          <div class="info-label">Owner:</div>
          <div class="info-content">Ralph Edwards</div>
        </div>
        <div class="divider"></div>
        <div class="info-section">
          <div class="info-label">Created at:</div>
          <div class="info-content">2023-11-06</div>
        </div>
        <div class="divider"></div>
        <div class="info-section">
          <div class="info-label">Play Type:</div>
          <div class="info-content">Team</div>
        </div>
      </ion-card>
    </div>

    
    <div class="header-container">
      <h3 class="title">Academy Courses Links:</h3>
      <a href="#" class="link">Www.Loremsitiposuerenuncullamcorperamet.com</a>
      <a href="#" class="link">Www.Loremsitiposuerenuncullamcorperamet.com</a>
      <a href="#" class="link">Www.Loremsitiposuerenuncullamcorperamet.com</a>
    </div>
    <div class="header-container">
      <h3 class="title">External Materials:</h3>
      <a href="#" class="link">Www.Loremsitiposuerenuncullamcorperamet.com</a>
      <a href="#" class="link">Www.Loremsitiposuerenuncullamcorperamet.com</a>
      <a href="#" class="link">Www.Loremsitiposuerenuncullamcorperamet.com</a>
    </div>
    <div class="status-section">
      <h3>What Is The Status Of Your Exercise?</h3>
      <div class="status-badge">
        <ion-icon name="checkmark-circle" color="success"></ion-icon>
        Completed - 100%
      </div>
    </div>
  </div>
</template>
<script>
import { IonIcon } from "@ionic/vue";

export default {
  components: {
    IonIcon,
  },
};
</script>
<style scoped>
.header-container {
  margin: 0px 15px 0px 15px;
}

.header-title {
color: var(--tietiary, rgba(44, 58, 209, 0.50));
/* Title Medium */
font-family: 'Cabin',sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 150% */
letter-spacing: 0.15px;
}
.title{
color: #303030;
/* Lable large */
font-family: "Cabin",sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
letter-spacing: 0.1px;
}

.card-container {
  display: flex;
  justify-content: center;
  margin-top: -30px;
  margin-bottom: -25px;
  padding: 5px 
  /* align-items: left; */
}

.info-card {
  display: flex;
  flex-direction: row; /* Align children horizontally */
  width: 100%; /* Take full width of the container */
  max-width: 600px; /* Maximum width of the card */
  border-radius: 5px; /* Rounded corners */
    box-shadow: none; /* This line removes the shadow */
  --box-shadow: none; /* This line is for overriding shadow in Ionic's shadow DOM */
  --ion-shadow: none; 
}

.info-section {
  display: flex;
  flex-direction: column; /* Align children vertically */
  flex: 1; /* Distribute space evenly */
  align-items: flex-start;
  justify-content: flex-start;
  color: #303030;
  font-family: "Cabin", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
  letter-spacing: 0.1px;
padding: 0px 10px;
  background: #f7f7f7;
}

.divider {
  height: 70%; /* Height of the divider relative to its parent */
  width: 1px; /* Thin line */
  /* background-color: #d7d8da; */
  align-self: center; /* Center the divider */
  border-right: 0.5px solid rgba(204, 204, 204, 0.8);
}

.info-label {
  font-size: 0.8em; /* Smaller font size for labels */
  color: #707070; /* Grey color for labels */
  margin-bottom: 8px; /* Space between label and content */
}

.info-content {
  margin-top: -10px;
  color: #404040;
  font-family: "Cabin", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  letter-spacing: 0.25px;
}
</style>

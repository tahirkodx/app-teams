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
      <a href="#" class="links-container"
        >Www.Loremsitiposuerenuncullamcorperamet.com</a
      >
      <a href="#" class="links-container"
        >Www.Loremsitiposuerenuncullamcorperamet.com</a
      >
      <a href="#" class="links-container"
        >Www.Loremsitiposuerenuncullamcorperamet.com</a
      >
    </div>
    <div class="header-container">
      <h3 class="title">External Materials:</h3>
      <a href="#" class="links-container"
        >Www.Loremsitiposuerenuncullamcorperamet.com</a
      >
      <a href="#" class="links-container"
        >Www.Loremsitiposuerenuncullamcorperamet.com</a
      >
      <a href="#" class="links-container"
        >Www.Loremsitiposuerenuncullamcorperamet.com</a
      >
    </div>
    <div class="header-container">
      <h3 class="title">What Is The Status Of Your Exercise?</h3>
      <div >
        <div class="custom-card">
          <!-- Icon on the left -->
          <ion-icon
            src="/src/pictures/lucide_check-circle.svg"
            class="custom-icon-left"
          ></ion-icon>
          <!-- Title in the center -->
          <span class="custom-title">Completed - 100%</span>
          <!-- Three dots icon on the right, clickable -->
          <ion-button fill="clear" class="custom-icon-right">
            <ion-icon
              slot="icon-only"
              size="large"
              src="/src/pictures/mingcute_more-2-line.svg"
            ></ion-icon>
          </ion-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  IonPage,
  IonContent,
  IonCard,
  IonBadge,
  IonIcon,
  IonButton,
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonBadge,
    IonIcon,
    IonButton,
  },
};
</script>
<style scoped>
.header-container {
  margin: 0px 15px 0px 15px;
}

.header-title {
  color: var(--tietiary, rgba(44, 58, 209, 0.5));
  /* Title Medium */

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  /* 150% */
  letter-spacing: 0.15px;
}

.title {
  color: #303030;
  /* Lable large */

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  /* 142.857% */
  letter-spacing: 0.1px;
}

.card-container {
  display: flex;
  justify-content: center;
  margin-top: -30px;
  margin-bottom: -25px;
  padding: 5px;
  /* align-items: left; */
}

.info-card {
  display: flex;
  flex-direction: row;
  /* Align children horizontally */
  width: 100%;
  /* Take full width of the container */
  max-width: 600px;
  /* Maximum width of the card */
  border-radius: 5px;
  /* Rounded corners */
  box-shadow: none;
  /* This line removes the shadow */
  --box-shadow: none;
  /* This line is for overriding shadow in Ionic's shadow DOM */
  --ion-shadow: none;
}

.info-section {
  display: flex;
  flex-direction: column;
  /* Align children vertically */
  flex: 1;
  /* Distribute space evenly */
  align-items: flex-start;
  justify-content: flex-start;
  color: #303030;

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  /* 166.667% */
  letter-spacing: 0.1px;
  padding: 3px 10px;
  background: #f7f7f7;
}

.divider {
  height: 70%;
  /* Height of the divider relative to its parent */
  width: 1px;
  /* Thin line */
  /* background-color: #d7d8da; */
  align-self: center;
  /* Center the divider */
  border-right: 0.5px solid rgba(204, 204, 204, 0.8);
}

.info-label {
  font-size: 0.8em;
  /* Smaller font size for labels */
  color: #707070;
  /* Grey color for labels */
  margin-bottom: 8px;
  /* Space between label and content */
}

.info-content {
  margin-top: -10px;
  color: #404040;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  /* 166.667% */
  letter-spacing: 0.25px;
}

.links-container {
  display: block;
  /* or 'flex' if you need it */
  width: 100%;
  /* or the maximum width it should take */
  padding: 5px;
  /* adjust as necessary */
  box-sizing: border-box;
  /* ensures padding is included in width */
}

.links-container a {
  display: inline-block;
  /* Allows the link to be treated as a block while still flowing with the text */
  max-width: 100%;
  /* Ensures the link doesn't exceed the width of its container */
  word-wrap: break-word;
  /* Allows unbreakable words to be broken */
  overflow-wrap: break-word;
  /* Ensures proper breaking of the word */
  color: var(--ion-color-link);

  /* color: #0061A8 !important; */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  /* 142.857% */
  letter-spacing: 0.25px;
  text-decoration-line: underline;
}

.custom-card {
  display: flex;
  align-items: center;
  padding: 12px 24px; /* Adjust padding for sizing */
  background-color: #a5ce3e; /* Adjust the color to match your design */
  color: white;
  border-radius: 5px; /* Adjust for rounded corners */
  font-size: 1em; /* Adjust base font size */
  width: 96%;
  height: 50px;
}

.custom-icon-left {
  font-size: 2em; /* Adjust for larger icon size */
  margin-right: 16px; /* Space after the icon */
}

.custom-title {
  flex: 1; /* Allows title to expand to fill space */
  text-align: start;
  color: var(--white, #fff);

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
}

.custom-icon-right {
  font-size: 2em; /* Adjust for larger icon size */
  margin-right: -22px;
}

/* Ionic resets button padding to 0, so we need to override it for proper alignment */
.custom-icon-right ion-icon {
  padding: 0;
}

/* Ensure the text does not wrap and stays in one line */
.custom-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.custom-card {
  padding: 12px 16px;
}

.custom-icon-left,
.custom-icon-right {
  font-size: 1.5em; /* Smaller icons on smaller screens */
}
</style>

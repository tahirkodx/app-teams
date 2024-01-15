<template>
  <div class="exercise-details-container">
    <div class="detail-header">
      <h2>Exercise Details</h2>
    </div>
   
<div class="info-container">
  <div class="info-row">
    <div class="info-label">Owner:</div>
    <div class="info-value">Ralph Edwards</div>
  </div>
  <div class="info-row">
    <div class="info-label">Created at:</div>
    <div class="info-value">2023-11-06</div>
  </div>
  <div class="info-row">
    <div class="info-label">Play Type:</div>
    <div class="info-value">Team</div>
  </div>
</div>

    <div class="links-section">
      <h3>Academy Courses Links:</h3>
      <a href="#" class="link">Www.Loremsitiposuerenuncullamcorperamet.com</a>
      <a href="#" class="link">Www.Loremsitiposuerenuncullamcorperamet.com</a>
      <a href="#" class="link">Www.Loremsitiposuerenuncullamcorperamet.com</a>
    </div>
    <div class="links-section">
     
<h3>External Materials:</h3>
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
import { IonIcon } from '@ionic/vue';

export default {
  components: {
    IonIcon,
  },
};
</script>
<style scoped>
.exercise-details-container {
  font-family: 'Arial', sans-serif;
}

.detail-header h2 {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 1em;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5em;
  background: #FFFFFF;
  border: 1px solid #DDDDDD;
  padding: 1em;
}

.detail-item {
  display: flex;
  flex-direction: column;
}

.detail-label {
  font-size: 0.8em;
  color: #666666;
}

.links-section h3, .status-section h3 {
  font-size: 1em;
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 0.5em;
}

.link {
 
color: #007bff;
text-decoration: none;
word-break: break-all; /* This will ensure that the links will wrap and not overflow the container /
display: block; / This makes each link appear on a new line /
margin-bottom: 0.5em; / Add some space between the links */
}

.status-section {
background: #A5D6A7;
padding: 1.5em; /* Increase padding for better spacing /
margin-top: 1em;
border-radius: 4px;
display: flex;
justify-content: space-between; / This will position the status text and icon on opposite ends /
align-items: center; / This will vertically center the items in the status badge */
}

.status-badge {
display: flex;
align-items: center;
font-weight: bold;
color: #2e7d32; /* Adjust the color to match the screenshot */
}

ion-icon {
margin-right: 0.5em;
font-size: 1.5em;
color: #2e7d32; /* Adjust the color to match the screenshot */
}



.info-container {
  display: flex;
  justify-content: space-between;
  background-color: #fff; /* Assuming a white background */
  border-bottom: 1px solid #eaeaea; /* Light grey border at the bottom */
  padding: 10px; /* Add padding for some space inside the container */
}

.info-row {
  display: flex;
  flex-direction: column; /* Stack label and value vertically */
  align-items: start;
}
 
.info-label {
  font-size: 0.8em; /* Smaller font size for labels */
  color: #999; /* Light grey color for text */
  margin-bottom: 2px; /* Small space between label and value */
}

.info-value {
  font-size: 1em; /* Regular font size for values */
  font-weight: bold; /* Make the value text bold */
  color: #333; /* Darker color for better readability */
}


</style>
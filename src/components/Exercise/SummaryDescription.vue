<template>
  <div v-if="props.id">
    <ion-card
      class="custom-card"
      
    >
      <ion-card-content class="card-text">
        {{
          playbookStore.playbook.get(props.id)?.summary
        }}
      </ion-card-content>
    </ion-card>

    <div class="custom-section">
      <p>Exercise Objective:</p>

      <p
        v-html="
          converter.makeHtml(
            playbookStore.playbook.get(props.id)
              ?.description)
        "
      ></p>
    </div>
  </div>
  <div v-else>
    <ion-card
      class="custom-card"
      v-if="props.summary"
    >
      <ion-card-content class="card-text" >
        {{
          props.summary
        }}
      </ion-card-content>
    </ion-card>

    <div class="custom-section">
      <p>Exercise Objective:</p>

      <p
        v-html="
          converter.makeHtml(
            props.description
          )
        "
      ></p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { usePlaybookStore } from "@/store";
import showdown from "showdown";
const props = defineProps(["id","summary", "description"]);
console.log("Here is adil" , props.id)
var converter = new showdown.Converter();
const playbookStore = usePlaybookStore();
</script>
<style scoped>
.custom-card {
  --background: #f0fada; /* Replace with your desired background color */
  --border-radius: 5px; /* Adjust the border-radius as per your design */
  --padding-start: 20px; /* Left padding */
  --padding-end: 20px; /* Right padding */
  --padding-top: 20px; /* Top padding */
  --padding-bottom: 20px; /* Bottom padding */
  border: 1px solid var(--main-green, #a5ce3e);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adjust or remove shadow as needed */
}

.custom-section {
  background-color: #fff; /* Assuming you want a white background for the lower section /
/ Adjust the padding, and add any other styles as needed */
}

.custom-section p {
  color: #303030;
  /* Lable large */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
  margin-bottom: 2px;
  /* Style your 'Exercise Objective:' paragraph */
}

/* You may want to add media queries to adjust the layout on different screen sizes  */
/* @media (max-width: 768px) { */
.custom-section {
  padding: 18px;
  margin-top: -35px;
  color: #404040;
  /* Body medium */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
}
</style>

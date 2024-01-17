<template>
  <div class="video-container">
    <!-- You will need a direct video file link for the `src` attribute to work -->
    <video
      width="100%"
      ref="videoElement"
      class="video-player"
      @play="onPlay"
      @pause="onPause"
      @volumechange="onVolumeChange"
      @timeupdate="updateTime"
      @loadedmetadata="onLoadedMetadata"
    >
      <!-- You can place a source tag here or set the src attribute directly -->
      <source src="/src/videos/testvideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="controls">
      <!-- Play/Pause Toggle Button -->
      <div class="control-outer">
        <div class="control-inner">
          <ion-button @click="togglePlayPause">
            <ion-icon :icon="state.isPlaying ? pauseIcon : playIcon"></ion-icon>
          </ion-button>
          <span class="time-display">
            {{ currentTimeFormatted }} / {{ durationFormatted }}
          </span>
        </div>
        <!-- Mute/Unmute Toggle Button -->
        <div class="control-inner">
          <ion-button @click="toggleMute">
            <ion-icon
              :icon="state.isMuted ? volumeOffIcon : volumeHighIcon"
            ></ion-icon>
          </ion-button>
          <!-- Fullscreen Toggle Button -->
          <ion-button slot="end" @click="toggleFullscreen">
            <ion-icon :icon="scanOutline"></ion-icon>
          </ion-button>
        </div>
      </div>
      <ion-range
        min="0"
        :max="duration"
        step="0.1"
        :value="currentTime"
        @ionChange="seekVideo($event)"
      ></ion-range>

      <!-- Other controls like Fullscreen, SeekBar etc. -->
      <!-- Add here -->
    </div>
  </div>
  <div>   
     
      <ion-card class="custom-card">
        <ion-card-content class="card-text">
          Lorem ipsum dolor sit amet consectetur. At a orci molestie tincidunt nulla non feugiat blandit. 
          Tincidunt sed eget enim donec est. Amet aenean ut sed mi. Rutrum id habitant diam nunc egestas.
          Lorem sit in posuere nunc ullamcorper amet velit bibendum amet.
        </ion-card-content>
      </ion-card>
    

   <div class="custom-section">
        <p>Exercise Objective:</p>
        Lorem ipsum dolor sit amet consectetur. At a orci molestie tincidunt nulla non feugiat blandit.
        Tincidunt sed eget enim donec est. Amet aenean ut sed mi. Rutrum id habitant diam nunc egestas.
        Lorem sit in posuere nunc ullamcorper amet velit bibendum amet.
      </div>


  </div>
 
  
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { IonButton, IonIcon } from "@ionic/vue";
import {
  play as playIcon,
  pause as pauseIcon,
  volumeHigh as volumeHighIcon,
  volumeOff as volumeOffIcon,
  contract as contractIcon,
  scanOutline,
} from "ionicons/icons";

const videoElement = ref<HTMLVideoElement | null>(null);
const duration = ref(0);
const currentTime = ref(0);
const state = reactive({
  isPlaying: false,
  isMuted: false,
});
const onLoadedMetadata = () => {
  if (videoElement.value) {
    duration.value = videoElement.value.duration;
  }
};
const togglePlayPause = () => {
  if (!videoElement.value) return;

  if (videoElement.value.paused || videoElement.value.ended) {
    videoElement.value.play();
  } else {
    videoElement.value.pause();
  }
};

const onPlay = () => {
  state.isPlaying = true;
};

const onPause = () => {
  state.isPlaying = false;
};

const toggleMute = () => {
  if (!videoElement.value) return;

  videoElement.value.muted = !videoElement.value.muted;
};

const onVolumeChange = () => {
  if (!videoElement.value) return;

  state.isMuted = videoElement.value.muted;
};
const updateTime = () => {
  if (videoElement.value) {
    currentTime.value = videoElement.value.currentTime;
    duration.value = videoElement.value.duration;
  }
};

const seekVideo = (event: CustomEvent) => {
  if (videoElement.value) {
    videoElement.value.currentTime = event.detail.value;
  }
};

const toggleFullscreen = () => {
  if (!videoElement.value) return;

  if (!document.fullscreenElement) {
    videoElement.value.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};
// A computed property to format the current time
const currentTimeFormatted = computed(() => formatTime(currentTime.value));

// A computed property to format the duration
const durationFormatted = computed(() => formatTime(duration.value));

const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};
// Add other methods for seeking, volume control, fullscreen, etc.
</script>

<style scoped>
.pStyle{
color: #303030;
/* Lable large */
font-family: "Cabin",sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
letter-spacing: 0.1px;
}
/* Your styles here */
ion-range {
  --knob-size: 0px;
}
ion-button {
  --background: none;
  --color: #a5ce3e;
}
.card-text{
  color: #000;
/* Body medium */
font-family: 'Cabin', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
letter-spacing: 0.25px;
}
.control-outer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.control-inner {
  display: flex;
  gap: 5px; /* Adjust the gap as needed */
}
span {
  margin-top: 20px;
}

.custom-card {
  --background: #f0fada; /* Replace with your desired background color */
  --border-radius: 5px; /* Adjust the border-radius as per your design */
  --padding-start: 20px; /* Left padding */
  --padding-end: 20px; /* Right padding */
  --padding-top: 20px; /* Top padding */
  --padding-bottom: 20px; /* Bottom padding */
 border: 1px solid var(--main-green, #A5CE3E);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adjust or remove shadow as needed */
}

.custom-section {
 
background-color: #fff; /* Assuming you want a white background for the lower section /
/ Adjust the padding, and add any other styles as needed */
}

.custom-section p {
color: #303030;
/* Lable large */
font-family: "Cabin",sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
letter-spacing: 0.1px;
 margin-bottom:2px
/* Style your 'Exercise Objective:' paragraph */
}

/* You may want to add media queries to adjust the layout on different screen sizes  */
/* @media (max-width: 768px) { */
.custom-section {
padding: 18px;
margin-top: -35px;
 color: #404040;
/* Body medium */
font-family: "Cabin",sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
letter-spacing: 0.25px;
}
.controls{
  padding: 0px 20px 20px 0px;
}
/* } */
</style>

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
/* Your styles here */
ion-range {
  --knob-size: 0px;
}
ion-button {
  --background: none;
  --color: #a5ce3e;
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
</style>

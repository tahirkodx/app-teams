<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-segment @ionChange="segmentChanged($event)">
          <ion-segment-button value="team-coach" checked>
            <ion-label>Team coach</ion-label>
          </ion-segment-button>
          <ion-segment-button value="others">
            <ion-label>Others</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="chat-container">
        <div class="chat-bubble left">
          James just joined the team. He is a very bright but he does not communicate well
        </div>
        <div class="chat-bubble left">
          I see that his communication is annoying his team members and tensions are rising. What shall I do
        </div>
        <div class="chat-bubble right">
          First of all you should acknowledge the issue within the team and talk about it. Some plays you could try are;
        </div>
        <!-- ... more chat bubbles ... -->
      </div>
      <div class="chat-input">
        <ion-item lines="none">
          <ion-textarea placeholder="Ask me anything..."></ion-textarea>
          <ion-button fill="clear" slot="end" class="send-button">
            <ion-icon :icon="sendOutline"></ion-icon>
          </ion-button>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { 
    IonPage, IonHeader, IonToolbar, IonSegment, IonSegmentButton, IonLabel,
    IonContent, IonItem, IonTextarea, IonButton, IonIcon 
  } from '@ionic/vue';
  import { sendOutline } from 'ionicons/icons';
  
  
      const segmentChanged = (event) => {
        // Handle segment change
        console.log('Segment changed', event.detail.value);
      };
  
     
  </script>
  

<style scoped>
  .chat-container {
    padding: 15px;
    display: flex;
    flex-direction: column;
  }
  
  .chat-bubble {
    max-width: 75%;
    padding: 10px 15px;
    border-radius: 15px;
    margin: 5px 0;
    position: relative;
    background: #ccc;
    color: black;
  }
  
  .chat-bubble.right {
    background: #4e8cff;
    color: white;
    align-self: flex-end;
  }
  
  .chat-bubble.left {
    background: #f4f4f8;
    color: black;
    align-self: flex-start;
  }
  
  .chat-input {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-shadow: 0 -4px 6px rgba(0,0,0,0.1);
  }
  
  ion-textarea {
    flex: 1;
  }
  
  .send-button {
    --padding-start: 0;
    --padding-end: 0;
    --padding-top: 0;
    --padding-bottom: 0;
  }
  
  ion-segment {
    --background: transparent;
    --indicator-color: #4e8cff;
    --color-checked: #4e8cff;
    --padding: 5px;
  }
  
  ion-segment-button {
    --background-checked: transparent;
  }
  </style>
  

<template>
  <div class="video-wrapper">
    <video
        ref="videoElement"
        class="video-js vjs-big-play-centered"
        playsinline
    ></video>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, defineProps } from "vue";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const props = defineProps({
  src: String
});

const videoElement = ref(null);
const rewindSeconds = 5;
const rewindSound = 0.1;
let player;

function handleKeydown(e) {
  if (!player) return;
  switch (e.key) {
    case "ArrowRight":
      player.currentTime(player.currentTime() + rewindSeconds);
      break;
    case "ArrowLeft":
      player.currentTime(player.currentTime() - rewindSeconds); 
      break;
    case " ":
      e.preventDefault(); 
      if (player.paused()) {
        player.play();
      } else {
        player.pause();
      }
      break;
    case "ArrowUp":
      e.preventDefault();
      player.volume(Math.min(1, player.volume() + rewindSound));
      break;
    case "ArrowDown":
      e.preventDefault();
      player.volume(Math.max(0, player.volume() - rewindSound));
      break;
  }
}

onMounted(() => {
  player = videojs(videoElement.value, {
    controls: true,
    autoplay: true,
    preload: "auto",
    width: 1200,
    height: 800,
    sources: [{ src: props.src, type: "video/mp4" }]
  });

  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  if (player) {
    player.dispose();
  }
  window.removeEventListener("keydown", handleKeydown);
});
</script>


<style>
.video-wrapper {
  position: relative;
  width: 100%;
  max-width: 2500px;
  margin: 0 auto;
}

.video-js {
  width: 100% !important;
  height: auto !important;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  background: black;
}

</style>

<template>
  <div class="home">
    <div class="videos">
      <VideoThumbnail
          v-for="video in videos"
          :key="video.id"
          :video="video"
      />
    </div>
  </div>
</template>

<script setup>
import { videos } from "@/data/videos";
import VideoThumbnail from "@/components/video-thumbnail.vue";
</script>

<style>
.videos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  padding: 1rem;
}
</style>

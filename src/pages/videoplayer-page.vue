<template>
  <div class="player-page">
    <VideoPlayer v-if="video" :src="video.src" />

    <div class="video-info">
      <div class="meta">
        <h2 class="title">{{ video?.title }}</h2>
        <h3 class="channel">Channel: {{ video?.chanel }}</h3>
      </div>
      <div class="actions">
        <button :class="{ active: isLiked }" @click="likeVideo">
          👍 {{ likeCount }}
        </button>
        <button :class="{ active: isDisliked }" @click="dislikeVideo">
          👎 {{ dislikeCount }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { videos } from "@/data/videos";
import { useVideoStore } from "@/store/videoStore";
import VideoPlayer from "@/components/video-player.vue";

const route = useRoute();
const videoId = Number(route.params.id);
const video = videos.find(v => v.id === videoId);

const store = useVideoStore();
store.loadFromStorage();

const isLiked = computed(() => store.isLiked(videoId));
const isDisliked = computed(() => store.isDisliked(videoId));
const likeCount = computed(() => video.likesCount + (store.isLiked(videoId) ? 1 : 0));
const dislikeCount = computed(() => video.dislikesCount + (store.isDisliked(videoId) ? 1 : 0));

function likeVideo() {
  store.toggleLike(videoId);
}
function dislikeVideo() {
  store.toggleDislike(videoId);
}
</script>

<style>
.player-page {
  max-width: 1200px;
  margin: 1rem auto;
  padding: 0 1rem;
}

.video-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 0.8rem;
}

.meta {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
  color: #000000;
}

.channel {
  font-size: 1rem;
  font-weight: 400;
  color: rgb(62, 52, 52);
  margin-top: 0.2rem;
}

.actions button {
  margin-left: 0.5rem;
  padding: 0.4rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  background: #303030;
  color: #000000;
  transition: 0.2s;
}

.actions button:hover {
  background: #505050;
}

.actions button.active:first-child {
  background: #1b8a24;
}

.actions button.active:last-child {
  background: #ba332a;
}

@media (max-width: 600px) {
  .player-page {
    padding: 0 0.5rem;
  }

  .video-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .title {
    font-size: 1.1rem;
  }

  .channel {
    font-size: 0.9rem;
  }

  .actions button {
    font-size: 0.9rem;
    padding: 0.3rem 0.8rem;
  }
}
</style>

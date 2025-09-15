<template>
  <div class="thumbnail" @mouseenter="hover = true" @mouseleave="hover = false" @click="goToVideo">
    <div class="media">
      <template v-if="hover">
        <video :src="video.preview" autoplay muted loop></video>
      </template>
      <template v-else>
        <img :src="video.thumbnail" :alt="video.title" />
      </template>
    </div>
    <p><b>{{ video.title }}</b></p>
  </div>
</template>


<script setup>
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  video: Object
});

const hover = ref(false);
const router = useRouter();

function goToVideo() {
  router.push(`/video/${props.video.id}`);
}
</script>

<style>
.thumbnail {
  width: 320px;
  margin: 1rem;
  cursor: pointer;
  flex-shrink: 0;
}

.thumbnail .media {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  background: black;
}

.thumbnail video,
.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnail p {
  text-align: left;
  margin-top: 0.5rem;
  color: #000000;
  font-size: 1rem;
}

@media (max-width: 1024px) {
  .thumbnail {
    width: 45%;
  }
}

@media (max-width: 600px) {
  .thumbnail {
    width: 90%; 
  }
}
</style>


<template>
  <div>
    <AppNavbar />
    <router-view />
  </div>
</template>

<script setup>
import AppNavbar from "./components/app-navbar.vue";
</script>

<style>
body {
  margin: 0;
  font-family: "Roboto Light", sans-serif;
  background: #ffffff;
  color: #000000;
}

body.darkmode p,
body.darkmode h1,
body.darkmode a {
  color: #f5f5f5;
}

</style>

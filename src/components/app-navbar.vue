<template>
  <nav class="navbar">
    <router-link to="/" class="logo">YouTube clone</router-link>
    <div class="navbar-actions">
      <SwitchThemeButton />
    </div>
  </nav>
</template>

<script setup>
import SwitchThemeButton from "@/components/switch-theme-button.vue";
</script>

<style>
.navbar {
  background: #202020;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between; 
  align-items: center;
}

.logo {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}

.logo:hover {
  color: #ff0000;
}

.navbar-actions {
  display: flex;
  align-items: center;
}
</style>

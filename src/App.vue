<template>
  <div class="app-container">
    <Analytics />
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script setup>
import { Analytics } from '@vercel/analytics/vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style lang="scss">
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>

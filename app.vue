<script lang="ts" setup>
import { SpeedInsights } from '@vercel/speed-insights/vue';

useSeoMeta({
  description: "Kasia Laniecka's portfolio - Frontend Developer",
  author: 'Kasia Laniecka'
});
</script>

<template>
  <div>
    <SpeedInsights />
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

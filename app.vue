<script lang="ts" setup>
import { SpeedInsights } from '@vercel/speed-insights/vue';

useSeoMeta({
  description: "Kasia Laniecka's portfolio - Frontend Developer",
  author: 'Kasia Laniecka'
});
</script>

<template>
  <NuxtLayout>
    <SpeedInsights />
    <NuxtPage />
  </NuxtLayout>
</template>

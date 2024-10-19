<script lang="ts" setup>
import data from '~/content/experience.json';
</script>

<template>
  <template v-for="item in data.experiences" :key="`experience-preview__${item}`">
    <ExperiencePreview :experience="item" />
  </template>
</template>

<style lang="postcss" scoped></style>

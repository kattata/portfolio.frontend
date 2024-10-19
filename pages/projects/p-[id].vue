<script lang="ts" setup>
import data from '~/content/projects.json';

const id = useRoute().params.id;

const project = data.projects.find(project => project.id === id);
</script>

<template>
  <div class="container">project {{ id }}</div>
  <pre>{{ project }}</pre>
</template>

<style lang="postcss" scoped></style>

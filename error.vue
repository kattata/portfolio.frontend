<script lang="ts" setup>
import type { NuxtError } from '#app';

interface Props {
  error: NuxtError;
}

const props = defineProps<Props>();
</script>

<template>
  <NuxtLayout name="default">
    <div class="error">
      <div class="container">
        <h1>{{ props.error?.message }}</h1>
        <p>An error has occured.</p>
        <BaseLink to="/">Go to home</BaseLink>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="postcss" scoped>
.error {
  margin-top: 50px;

  a {
    margin-top: 32px;
    display: block;
  }
}
</style>

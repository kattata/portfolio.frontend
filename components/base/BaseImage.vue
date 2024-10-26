<script setup lang="ts">
import type { ImageModifiers } from '@nuxt/image';

const props = defineProps<{
  src: string;
}>();

const defaultProps: Partial<ImageModifiers> = {
  format: 'webp'
};
</script>

<template>
  <NuxtImg :src="props.src" v-bind="{ ...defaultProps, ...$attrs }" />
</template>

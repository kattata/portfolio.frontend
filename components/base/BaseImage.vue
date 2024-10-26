<script setup lang="ts">
import type { ImageModifiers } from '@nuxt/image';

const props = defineProps<{
  src: string;
  width?: string;
}>();

const defaultProps: Partial<ImageModifiers> = {
  format: 'webp'
};

const emit = defineEmits<{
  load: [void];
}>();

function handleLoad() {
  emit('load');
}
</script>

<template>
  <NuxtImg :src="props.src" v-bind="{ ...defaultProps, ...props }" @load="handleLoad" />
</template>

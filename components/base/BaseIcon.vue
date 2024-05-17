<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();
</script>

<template>
  <div class="icon">{{ props.name }}</div>
</template>

<style lang="postcss" scoped>
.icon {
  width: 24px;
  height: 24px;
}
</style>

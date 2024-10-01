<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    title?: string;
    image?: string;
  }>(),
  {
    title: '',
    image: ''
  }
);
</script>

<template>
  <div class="skill">
    <BaseDiamond :text="props.title" :size="'125px'" />
  </div>
</template>

<style lang="postcss" scoped>
/* .skill {
  display: flex;
  flex-direction: column;
  gap: 12px;
} */
</style>

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
    <div>{{ props.title }}</div>
    <BaseImage :src="props.image" />
  </div>
</template>

<style lang="postcss" scoped>
.skill {
  display: flex;
  flex-direction: column;
  gap: 12px;

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
}
</style>

<script lang="ts" setup>
interface Props {
  to: string;
  text: string;
}

const props = defineProps<Props>();
</script>

<template>
  <BaseLink :to="props.to">
    {{ props.text }}
  </BaseLink>
</template>

<style lang="postcss" scoped>
a {
  border: 1px solid var(--color-line);
  border-radius: var(--border-radius-large);
  padding: 24px;
  height: 50px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

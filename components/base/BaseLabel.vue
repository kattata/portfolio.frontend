<script lang="ts" setup>
interface Props {
  to?: string;
  text: string;
  size: 'small' | 'large';
  index?: number;
}

const props = defineProps<Props>();

const component = computed(() => {
  return props.to ? resolveComponent('BaseLink') : 'div';
});

const color = computed(() => {
  if (!props.index) {
    return 'rgba(0, 0, 0, 0.25)';
  }

  const baseHue = 222;
  const step = 20;
  const hue = (baseHue + props.index * step) % 360;

  return `hsl(${hue}, 60%, 40%)`;
});
</script>

<template>
  <component :is="component" class="label" :to="props.to" :class="`label--${props.size}`" :style="{ '--color-accent': color }">
    {{ props.text }}
  </component>
</template>

<style lang="postcss" scoped>
.label {
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  &--small {
    border-radius: 24px;
    padding: 16px;
  }

  &--large {
    border-radius: 32px;
    padding: 20px;
  }
}
</style>

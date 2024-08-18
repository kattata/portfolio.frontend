<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    text?: string;
    size?: string;
  }>(),
  {
    text: '',
    size: '100px'
  }
);
</script>

<template>
  <div class="diamond">
    <BaseIcon name="diamond" />
    <div class="diamond__text">{{ props.text }}</div>
  </div>
</template>

<style lang="postcss" scoped>
.diamond {
  width: fit-content;
  position: relative;

  &:deep(.icon svg) {
    color: var(--color-red-100);
    width: v-bind('props.size');
    height: v-bind('props.size');
  }

  &__text {
    position: absolute;
    margin-top: -1px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--color-secondary-100);
    font-size: var(--font-size-xs);
  }
}
</style>

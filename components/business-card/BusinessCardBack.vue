<script lang="ts" setup></script>

<template>
  <div class="business-card-back">
    <BaseIcon name="logo" class="business-card-back__logo" />
  </div>
</template>

<style lang="postcss" scoped>
.business-card-back {
  box-shadow: var(--shadow-soft);
  aspect-ratio: 5/3;
  width: 100%;
  padding: 24px;
  background-color: var(--color-primary-100);
  padding: 180px;

  &__logo {
    &:deep(svg) {
      width: 100%;
      height: 100%;
    }

    &:deep(path) {
      fill: var(--color-secondary-100);
    }
  }
}
</style>

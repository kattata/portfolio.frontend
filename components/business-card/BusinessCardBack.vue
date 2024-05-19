<script lang="ts" setup></script>

<template>
  <div class="business-card-back">
    <!-- <BaseImage
      src="/texture.jpg"
      class="business-card-back__texture"
      loading="eager"
    /> -->
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

  &__texture {
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: screen;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    pointer-events: none;
  }

  /* @media (min-width: 900px) {
    width: 800px;
  } */
}
</style>

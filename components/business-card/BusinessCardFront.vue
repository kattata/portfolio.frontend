<script lang="ts" setup></script>

<template>
  <div class="business-card-front">
    <!-- <BaseImage
      src="/texture.jpg"
      class="business-card-front__texture"
      loading="eager"
    /> -->
    <div class="business-card-front__frame">
      <BusinessCardFrontLeft />
      <BusinessCardFrontRight />
      <div class="business-card-front__stripe"></div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.business-card-front {
  box-shadow: var(--shadow-soft);
  aspect-ratio: 5/3;
  width: 100%;
  padding: 24px;
  position: relative;

  &__frame {
    position: relative;
    border: var(--business-card-border);
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 270px 1fr;
  }

  &__stripe {
    height: 100%;
    width: 16px;
    background-color: var(--color-red-100);
    position: absolute;
    right: 16px;
    top: 0;
    opacity: 0.7;
    z-index: -1;
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

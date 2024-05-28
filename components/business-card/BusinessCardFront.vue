<script lang="ts" setup></script>

<template>
  <div class="business-card-front">
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
    grid-template-columns: 2fr 3fr;

    @media (min-width: 900px) {
      grid-template-columns: 270px 1fr;
    }
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
}
</style>

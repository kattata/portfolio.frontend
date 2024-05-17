<script lang="ts" setup></script>

<template>
  <div class="business-card-front">
    <div class="business-card-front__frame">
      <BusinessCardFrontLeft />
      <BusinessCardFrontRight />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.business-card-front {
  box-shadow: var(--shadow-soft);
  aspect-ratio: 5/3;
  width: 100%;
  padding: 24px;

  &__frame {
    border: var(--business-card-border);
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 270px 1fr;
  }

  @media (min-width: 900px) {
    width: 800px;
  }
}
</style>

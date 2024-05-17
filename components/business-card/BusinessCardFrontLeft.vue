<script lang="ts" setup></script>

<template>
  <div class="business-card-left">
    <div class="business-card-left__cell business-card-left__cell--top">
      <BusinessCardDecorativeTop />
    </div>
    <div class="business-card-left__cell business-card-left__cell--center">
      <span> Tel. 50 34 93 98 </span>
      <span>&#8226;</span>
      <span> kasia.laniecka@gmail.com </span>
    </div>
    <div class="business-card-left__cell business-card-left__cell--bottom">
      <BusinessCardDiamondSlider />
      <div class="business-card-left__bar"></div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.business-card-left {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 50px 1fr;
  border-right: var(--business-card-border);

  &__cell {
    &:not(:last-of-type) {
      border-bottom: var(--business-card-border);
    }

    &--top {
    }

    &--center {
      display: flex;
      height: 100%;
      width: 100%;
      gap: 8px;
      justify-content: center;
      align-items: center;
      font-size: var(--font-size-xs);
      text-transform: uppercase;
    }

    &--bottom {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  &__bar {
    background-color: var(--color-primary-100);
    height: 60px;
    width: 100%;
  }
}
</style>

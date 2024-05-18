<template>
  <div class="business-card-right">
    <div class="business-card-right__cell business-card-right__cell--top">
      <BaseIcon name="logo" />
    </div>
    <div
      class="business-card-right__cell business-card-right__cell--bottom"
    ></div>
  </div>
</template>

<style lang="postcss" scoped>
.business-card-right {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;

  &__cell {
    &:not(:last-of-type) {
      border-bottom: var(--business-card-border);
    }

    &--top {
      padding: 36px;
      padding-right: 64px;
    }
  }

  &:deep(.icon) {
    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

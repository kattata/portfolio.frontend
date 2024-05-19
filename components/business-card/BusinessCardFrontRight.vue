<template>
  <div class="business-card-right">
    <div class="business-card-right__cell business-card-right__cell--top">
      <BaseIcon name="logo" />
    </div>
    <div class="business-card-right__cell business-card-right__cell--bottom">
      <!-- Top row -->
      <div class="business-card-right__row-top">
        <div class="business-card-right__signature">
          <div class="business-card-right__signature-name">K.Laniecka</div>
          <div class="business-card-right__signature-title">
            Frontend Developer
          </div>
        </div>

        <div class="divider divider--vertical"></div>

        <div class="business-card-right__description">
          {{ $t('BusinessCard.Front.Description') }}
          <!-- Dedicated to crafting
          <br />
          high-quality, visually engaging
          <br />
          web interfaces. -->
        </div>
      </div>

      <!-- Center row -->
      <div class="business-card-right__row-center">
        <div class="divider divider--horizontal"></div>
        <div class="divider divider--horizontal"></div>
        <div class="divider divider--horizontal"></div>
        <div class="divider divider--horizontal"></div>
      </div>

      <!-- Bottom row -->
      <div class="business-card-right__row-bottom">
        <div>Get in touch!</div>

        <div class="divider divider--vertical"></div>

        <div class="business-card-right__phone">No 50 34 93 98</div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.business-card-right {
  height: 100%;
  display: none;
  grid-template-rows: 1fr 1fr;

  @media (min-width: 900px) {
    display: grid;
  }

  &__cell {
    &:not(:last-of-type) {
      border-bottom: var(--business-card-border);
    }

    &--top {
      padding: 36px;
      padding-right: 64px;
    }

    &--bottom {
      padding: 24px;
      padding-right: 36px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      justify-content: space-between;
    }
  }

  &:deep(.icon) {
    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__row {
    &-top {
      display: grid;
      grid-template-columns: 40% 24px 1fr;
      grid-template-rows: 1fr;
      align-items: center;
    }

    &-center {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .divider {
        &:nth-of-type(1) {
          width: 90%;
        }

        &:nth-of-type(2) {
          width: 80%;
        }

        &:nth-of-type(3) {
          width: 70%;
        }

        &:nth-of-type(4) {
          width: 60%;
        }
      }
    }

    &-bottom {
      display: grid;
      grid-template-columns: 80px 24px 1fr;
      grid-template-rows: 1fr;
      align-items: center;
    }
  }

  &__signature {
    text-align: center;
    width: fit-content;

    &-name {
      font-family: var(--font-family-handwriting-primary);
      color: var(--color-red-100);
      font-size: 40px;
    }

    &-title {
      font-family: var(--font-family-base-secondary);
      font-size: var(--font-size-xs);
      margin-top: -4px;
    }
  }

  &__description {
    font-family: var(--font-family-base-secondary);
    font-size: var(--font-size-s);
    text-align: right;
    padding-right: 8px;
  }

  &__phone {
    font-family: var(--font-family-display-secondary);
    color: var(--color-red-100);
    font-size: 32px;
    letter-spacing: 4px;
    text-align: right;
    padding-right: 4px;
  }
}
</style>

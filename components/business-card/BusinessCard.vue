<script lang="ts" setup>
const showCardFront = ref<boolean>(true);
const businessCardRef = ref(null);
const hasTextureLoaded = ref<boolean>(false);

function flipCard() {
  showCardFront.value = !showCardFront.value;
}

// TODO: Add loader before texture loads
function handleLoad() {
  hasTextureLoaded.value = true;
}
</script>

<template>
  <div ref="businessCardRef" class="business-card" @click="flipCard">
    <BaseImage
      src="/texture.jpg"
      class="texture"
      loading="eager"
      :class="{ 'texture--active': !showCardFront }"
      @load="handleLoad"
    />
    <div class="business-card__flip">
      <div
        class="business-card__flip-inner"
        :class="{ 'business-card__flip-inner--active': !showCardFront }"
      >
        <div class="business-card__flip-front">
          <BusinessCardFront />
        </div>
        <div class="business-card__flip-back">
          <BusinessCardBack />
        </div>
      </div>
    </div>

    <div class="business-card__flip-button">
      <div class="divider divider--horizontal"></div>
      <button class="reset-button">
        {{ $t('Components.BusinessCard.Action.FlipCard') }}
      </button>
      <div class="divider divider--horizontal"></div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.business-card {
  width: 800px;
  height: 480px;
  position: absolute;
  transition: all 0.0001s ease-in-out;
  cursor: pointer;

  &__flip {
    perspective: 2500px;
    width: 100%;
    height: 480px;

    &-inner {
      position: relative;
      width: 100%;
      height: 480px;
      transition: transform 0.6s;
      transform-style: preserve-3d;

      &--active {
        transform: rotateY(180deg);
      }
    }

    &-front,
    &-back {
      position: absolute;
      width: 100%;
      height: 480px;
      -webkit-backface-visibility: hidden; /* stylelint-disable-line */
      backface-visibility: hidden;
    }

    &-back {
      transform: rotateY(180deg);
    }
  }

  &__flip-button {
    display: flex;
    gap: 16px;
    align-items: center;

    button {
      display: block;
      margin: 36px auto;
      white-space: nowrap;
    }
  }
}

.texture {
  width: 800px;
  height: 480px;
  object-fit: cover;
  mix-blend-mode: screen;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  pointer-events: none;
  transition: transform 0.6s;
  perspective: 2500px;
  transform-style: preserve-3d;

  &--active {
    transform: rotateY(-180deg);
  }
}
</style>

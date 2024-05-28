<script lang="ts" setup>
const showCardFront = ref<boolean>(true);

function flipCard() {
  showCardFront.value = !showCardFront.value;
}

</script>

<template>
  <div class="business-card">
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
      <button class="reset-button" @click="flipCard">
        {{ $t('Components.BusinessCard.Action.FlipCard') }}
      </button>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.business-card {
  margin-top: 60px;
  width: 800px;

  &__flip {
    perspective: 2500px;
    width: 100%;
    height: 100%;

    &-inner {
      position: relative;
      width: 100%;
      height: 100%;
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
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    &-back {
      transform: rotateY(180deg);
    }
  }

  &__flip-button {
    button {
      display: block;
      position: absolute;
      left: 50%;
      bottom: 24px;
      transform: translate(-50%, 0%);
    }
  }
}
</style>

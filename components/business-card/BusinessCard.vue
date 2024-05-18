<script lang="ts" setup></script>

<template>
  <div class="business-card">
    <div class="business-card__flip">
      <div class="business-card__flip-inner">
        <div class="business-card__flip-front">
          <BusinessCardFront />
        </div>
        <div class="business-card__flip-back">
          <BusinessCardBack />
        </div>
      </div>
    </div>

    <!-- <div class="business-card__flip-button">
      <button class="reset-button">Click to flip the card</button>
    </div> -->
  </div>
</template>

<style lang="postcss" scoped>
.business-card {
  margin-top: 60px;
  width: 100%;

  @media (min-width: 900px) {
    /* width: unset; */
  }

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
    }

    &:hover .business-card__flip-inner {
      transform: rotateY(180deg);
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
      margin: 24px auto;
    }
  }
}
</style>

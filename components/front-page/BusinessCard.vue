<script lang="ts" setup>
const isFrontSide = ref<boolean>(true);

function handleClick() {
  isFrontSide.value = !isFrontSide.value;
}

interface BusinessCardDimensions {
  width: string;
  height: string;
}
const cardDimensions = ref<BusinessCardDimensions | null>(null);

function updateBoxSize() {
  const width = Math.min(window.innerWidth, 600);
  const height = (width * 2) / 3;

  cardDimensions.value = {
    width: `${width}px`,
    height: `${height}px`
  };
}

onMounted(() => {
  window.addEventListener('resize', updateBoxSize);
  updateBoxSize();
});
</script>

<template>
  <div class="business-card" @click="handleClick">
    <div class="business-card-content">
      <div class="business-card-content-inner" :class="{ 'business-card-content-inner--back-side': !isFrontSide }">
        <div class="business-card-front">
          <div class="business-card-footer">
            <div class="h1">Kasia Laniecka</div>
            <div>Frontend Developer</div>
          </div>
        </div>

        <div class="business-card-back">
          <div class="business-card-footer">Info</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.business-card {
  /* stylelint-disable-next-line value-keyword-case */
  --business-card-height: v-bind(cardDimensions.height);
  /* stylelint-disable-next-line value-keyword-case */
  --business-card-width: v-bind(cardDimensions.width);

  height: var(--business-card-height);
  width: var(--business-card-width);
  transition: all 0.0001s ease-in-out;
  cursor: pointer;
}

.business-card-content {
  perspective: 2500px;
  width: 100%;
}

.business-card-content-inner {
  position: relative;
  width: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  &--back-side {
    transform: rotateY(180deg);
  }
}

.business-card-front,
.business-card-back {
  /* Flip styles */
  position: absolute;
  width: 100%;
  height: var(--business-card-height);

  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  /* General styles */
  background-color: var(--color-white);
  box-shadow: var(--shadow-soft);
  padding: 24px;
  display: flex;
  align-items: flex-end;
}

.business-card-back {
  transform: rotateY(180deg);
}

.business-card-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;

  .h1 {
    margin: 0;
  }
}
</style>

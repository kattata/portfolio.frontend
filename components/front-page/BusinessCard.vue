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
const { isMobile } = useBreakpoints();

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
  <div class="business-card-wrapper">
    <div class="business-card" @click="handleClick">
      <div class="business-card-content">
        <div class="business-card-content-inner" :class="{ 'business-card-content-inner--back-side': !isFrontSide }">
          <div class="business-card-front">
            <div class="business-card-front-footer">
              <div class="h1">Kasia Laniecka</div>
              <div class="business-card-front-footer-title">Frontend Developer</div>
            </div>
          </div>

          <div class="business-card-back">
            <div class="business-card-back-footer">
              <BaseIcon name="logo" />
              <div class="business-card-back-footer-details">
                <div>Kasia Laniecka</div>
                <div>kasia.laniecka@gmail.com</div>
                <div>+45 50 34 93 98</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="business-card-cursor">
      <div class="business-card-cursor-icon">{{ isMobile() ? '👇' : '👈' }}</div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.business-card-wrapper {
  --base-hue: 0;

  position: relative;

  @media (min-width: 900px) {
    &:hover {
      .business-card-front {
        background-image: linear-gradient(rgb(256 256 256 / 90%), rgb(256 256 256 / 90%)),
          linear-gradient(
            90deg,
            hsl(var(--base-hue) 60% 40%),
            hsl(calc(var(--base-hue) + 60) 60% 40%),
            hsl(calc(var(--base-hue) + 120) 60% 40%),
            hsl(calc(var(--base-hue) + 180) 60% 40%),
            hsl(calc(var(--base-hue) + 240) 60% 40%),
            hsl(calc(var(--base-hue) + 300) 60% 40%)
          );
      }

      .business-card-cursor {
        animation-play-state: paused;
      }
    }
  }
}

.business-card-cursor {
  position: absolute;
  font-weight: bold;
  font-size: 24px;
  animation: bounce2 2.8s ease infinite;
  top: -50px;
  right: 20px;

  @media (min-width: 900px) {
    right: -50px;
    top: 28px;
  }
}

.business-card {
  /* stylelint-disable-next-line value-keyword-case */
  --business-card-height: v-bind(cardDimensions?.height);
  /* stylelint-disable-next-line value-keyword-case */
  --business-card-width: v-bind(cardDimensions?.width);

  height: var(--business-card-height);
  width: var(--business-card-width);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
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

.business-card-back {
  transform: rotateY(180deg);
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
  border-radius: var(--border-radius-small);

  /* Animation */
  border: 2px solid transparent;
  background-image: linear-gradient(var(--color-white), var(--color-white)),
    linear-gradient(
      90deg,
      hsl(var(--base-hue) 60% 40%),
      hsl(calc(var(--base-hue) + 60) 60% 40%),
      hsl(calc(var(--base-hue) + 120) 60% 40%),
      hsl(calc(var(--base-hue) + 180) 60% 40%),
      hsl(calc(var(--base-hue) + 240) 60% 40%),
      hsl(calc(var(--base-hue) + 300) 60% 40%)
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
  animation: hue-rotate 2s linear infinite;
  transition: all 0.3s ease-in-out;
}

.business-card-front-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;

  .h1 {
    margin: 0;
    font-size: 20px @(min-width: 900px) var(--h1-font-size);
  }

  &-title {
    text-align: end;
  }
}

.business-card-back-footer {
  display: flex;
  gap: 12px;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  font-size: var(--font-size-xs) @(min-width: 900px) var(--font-size-m);

  &-details {
    display: flex;
    flex-direction: column;
    gap: 6px @(min-width: 900px) 12px;
    align-items: flex-end;
    justify-content: space-between;
  }

  :deep(.icon) {
    height: 30px;
    width: 70px;

    svg {
      height: 30px;
      width: 70px;
    }

    @media (min-width: 900px) {
      :deep(.icon) {
        height: 50px;
        width: 100px;

        svg {
          height: 50px;
          width: 100px;
        }
      }
    }
  }
}

@keyframes bounce {
  0% {
    transform: scale(1);
  }

  35% {
    transform: scale(1.01);
  }

  40%,
  60% {
    transform: rotate(-1.5deg) scale(1.01);
  }

  50% {
    transform: rotate(1.5deg) scale(1.01);
  }

  90% {
    transform: scale(1);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes bounce2 {
  0% {
    transform: scale(1);
  }

  35% {
    transform: scale(1.3);
  }

  40%,
  60% {
    transform: rotate(-3deg) scale(1.3);
  }

  50% {
    transform: rotate(3deg) scale(1.3);
  }

  90% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes hue-rotate {
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
}
</style>

<script lang="ts" setup>
import { useBreakpoints } from '~~/composables/useBreakpoints';
import { skills } from '~~/content/ts/skills';

const skillList = computed(() => {
  return skills.map(skill => skill.title);
});

function onInit(swiper: any) {
  swiper.detail[0].autoplay.start();
  swiper.detail[0].autoplay.delay = 0;
  swiper.detail[0].autoplay.waitForTransition = false;

  // TODO: Add pause on mouse enter (figure out with params or manually)
}
const { isMobile } = useBreakpoints();

// Change swiper into css animation?

const breakpoints = {
  200: {
    slidesPerView: 2
  },
  900: {
    slidesPerView: 2.7
  }
};

const diamondSize = computed(() => {
  return isMobile() ? '50px' : '100px';
});
</script>

<template>
  <div class="business-card-diamond-slider">
    <ClientOnly>
      <swiper-container
        ref="swiperRef"
        loop="true"
        centered-slides="true"
        pause-on-mouse-enter="true"
        :breakpoints="breakpoints"
        @swiperinit="onInit"
      >
        <template v-for="(skill, index) in skillList" :key="index">
          <swiper-slide>
            <BaseDiamond :text="skill" :size="diamondSize" />
          </swiper-slide>
        </template>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<style lang="postcss" scoped>
.business-card-diamond-slider {
  width: 100%;
  padding-block: 0;
  height: 100%;

  @media (min-width: 900px) {
    padding-block: 12px;
  }

  swiper-container {
    width: 150px;

    @media (min-width: 900px) {
      width: 268px;
    }
  }

  swiper-slide {
    cursor: pointer;
  }
}
</style>

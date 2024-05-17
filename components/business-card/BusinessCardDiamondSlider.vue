<script lang="ts" setup>
const skills = computed(() => {
  return ['HTML', 'CSS', 'JAVASCRIPT', 'VUE', 'GIT'];
});

function onInit(swiper: any) {
  swiper.detail[0].autoplay.start();
  swiper.detail[0].autoplay.delay = 0;
  swiper.detail[0].autoplay.waitForTransition = false;
  console.log(swiper.detail[0]);

  // TODO: Add pause on mouse enter (figure out with params or manually)
}
</script>

<template>
  <div class="business-card-diamond-slider">
    <ClientOnly>
      <swiper-container
        ref="swiperRef"
        slides-per-view="2.7"
        loop="true"
        centered-slides="true"
        pause-on-mouse-enter="true"
        @swiperinit="onInit"
      >
        <template v-for="(skill, index) in skills" :key="index">
          <swiper-slide>
            <BaseDiamond :text="skill" />
          </swiper-slide>
        </template>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<style lang="postcss" scoped>
.business-card-diamond-slider {
  width: 100%;
  padding-block: 12px;
  height: 100%;

  swiper-container {
    width: 270px;
  }

  swiper-slide {
    cursor: pointer;
  }
}
</style>

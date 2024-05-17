<script lang="ts" setup>
const skills = computed(() => {
  return ['HTML', 'CSS', 'JAVASCRIPT', 'VUE', 'GIT'];
});

function onInit(swiper: any) {
  swiper.detail[0].autoplay.start();
  // TODO: Add pause on mouse enter (figure out with params or manually)
}
</script>

<template>
  <div class="business-card-diamond-slider">
    <ClientOnly>
      <swiper-container
        ref="swiperRef"
        slides-per-view="3"
        loop="true"
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

  swiper-container {
    width: 300px;
  }

  swiper-slide {
    width: 100px;
    cursor: pointer;
  }
}
</style>

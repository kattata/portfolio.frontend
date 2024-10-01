<script lang="ts" setup>
import type { SwiperOptions } from 'swiper/types';
import { skills } from '~~/content/ts/skills';

const swiperOptions: SwiperOptions = {
  loop: true,
  loopAddBlankSlides: true,
  slidesPerView: 2,
  breakpoints: {
    200: {
      slidesPerView: 2
    },
    900: {
      slidesPerView: 2
    }
  }
};
</script>

<template>
  <div class="skill-list">
    <ClientOnly>
      <swiper-container ref="swiperRef" loop="true" v-bind="swiperOptions">
        <template v-for="(skill, index) in skills" :key="`skill__${index}`">
          <swiper-slide>
            <BaseSkill :title="skill.title" />
          </swiper-slide>
        </template>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<style lang="postcss" scoped>
.skill-list {
  display: flex;

  swiper-container {
    max-width: calc(100vw - 2 * 16px) @(min-width: 900px) 100%;
    overflow-x: hidden;
  }

  swiper-slide {
    width: fit-content !important;
  }
}
</style>

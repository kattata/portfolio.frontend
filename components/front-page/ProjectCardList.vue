<script lang="ts" setup>
import type { SwiperOptions } from 'swiper/types';

const swiperOptions: SwiperOptions = {
  slidesPerView: 2,
  spaceBetween: 16
};
</script>

<template>
  <div class="project-card-list">
    <ClientOnly>
      <swiper-container v-bind="swiperOptions">
        <template v-for="i in 5" :key="`project-card__${i}`">
          <swiper-slide>
            <ProjectCard to="/sunset-today" :image="undefined" name="Sunset Today" />
          </swiper-slide>
        </template>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<style lang="postcss" scoped>
.project-card-list {
  display: flex;
  gap: 16px;
}

swiper-container {
  max-width: fit-content;
  overflow-x: hidden;
}

swiper-slide {
  width: fit-content !important;
}
</style>

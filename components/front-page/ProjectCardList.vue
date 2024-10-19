<script lang="ts" setup>
import type { SwiperOptions } from 'swiper/types';
import data from '~/content/projects.json';

const swiperOptions: SwiperOptions = {
  slidesPerView: 2,
  spaceBetween: 16
};
</script>

<template>
  <div class="project-card-list">
    <ClientOnly>
      <swiper-container v-bind="swiperOptions">
        <template v-for="project in data.projects" :key="`project-card__${project.name}`">
          <swiper-slide>
            <ProjectCard :to="`/projects/p-${project.id}`" :image="project.primaryImage" :name="project.title" />
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

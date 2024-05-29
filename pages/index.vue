<script lang="ts" setup>
import { skills } from '~~/content/ts/skills'
const { data: aboutData } = await useLazyAsyncData('about', () =>
  queryContent('md', 'about').findOne()
);

</script>

<template>
  <div class="container">
    <main>
      <template v-if="!useBreakpoints().isMobile()">
        <section class="section section-business-card">
          <BusinessCard />
        </section>
      </template>

      <template v-if="aboutData">
        <div class="container container--small">
          <section id="about" class="section section--centered section-about">
            <BaseMarkdownRenderer :content="aboutData" />
          </section>
        </div>
      </template>

      <template v-if="skills">
        <section id="skills" class="section section--centered section-skills">
          <template v-for="skill in skills" :key="skill.title">
            <BaseSkill :title="skill.title" :image="skill.img" />
          </template>
        </section>
      </template>
    </main>
  </div>
</template>

<style lang="postcss" scoped>
.section {
  height: 100vh;

  &-business-card {
    justify-content: center;
    align-items: center;
    /* Screen height - header height */
    height: calc(100vh - (36px + 19px));
    display: flex;
  }

  &-skills {
    display: flex;
    gap: 24px;
    justify-content: center;
  }

  &--centered {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

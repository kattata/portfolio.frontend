<script lang="ts" setup>
import { skills } from '~~/content/ts/skills';

const { data: aboutData } = await useLazyAsyncData('about', () =>
  queryContent('md', 'about').findOne()
);

const { data: experienceData } = await useLazyAsyncData('experience', () =>
  queryContent('md', 'experience').findOne()
);

</script>

<template>
  <main>
    <template v-if="!useBreakpoints().isMobile()">
      <div class="container">
        <section class="section section-business-card">
          <BusinessCard />
        </section>
      </div>
    </template>

    <template v-if="aboutData">
      <div class="container container--small">
        <section id="about" class="section section--centered section-about">
          <div>
            <div class="section__heading">
              <h2 class="h1">
                About
              </h2>
            </div>
            <BaseMarkdownRenderer :content="aboutData" />
          </div>
        </section>
      </div>
    </template>

    <template v-if="experienceData">
      <div class="container container--small">
        <section id="experience" class="section section--centered section-experience">
          <div>
            <h2 class="h1">
              Experience
            </h2>
            <BaseMarkdownRenderer :content="experienceData" />
            <ExperienceCardList />
          </div>
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

  &-experience {
    :deep(.content-renderer) {
      margin-bottom: 24px;
    }
  }

  &--centered {
    display: flex;
    align-items: center;
  }
}
</style>

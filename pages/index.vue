<script lang="ts" setup>
import { skills } from '~~/content/ts/skills';
import { getNavigationItems } from '~/content/ts/navigation';
import { NavigationItemEnum } from '~/types/navigation';
import { getNavigationItemByName } from '~/utils/navigation';

const route = useRoute();

const activeSection = computed(() => {
  const activeNavigationItem = getNavigationItems().find(
    item => item.url === route.hash
  );

  return activeNavigationItem?.name ? ` | ${activeNavigationItem?.name}` : '';
});

useHead({
  title: () => `Kasia Laniecka ${activeSection.value}`
});

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
        <section
          :id="getNavigationItemByName(NavigationItemEnum.About)?.id"
          class="section section--centered section-about"
        >
          <div>
            <div class="section__heading">
              <h2 class="h1">
                {{ getNavigationItemByName(NavigationItemEnum.About)?.name }}
              </h2>
            </div>
            <BaseMarkdownRenderer :content="aboutData" />
          </div>
        </section>
      </div>
    </template>

    <template v-if="experienceData">
      <div class="container container--small">
        <section
          :id="getNavigationItemByName(NavigationItemEnum.Experience)?.id"
          class="section section--centered section-experience"
        >
          <div>
            <h2 class="h1">
              {{ getNavigationItemByName(NavigationItemEnum.Experience)?.name }}
            </h2>
            <BaseMarkdownRenderer :content="experienceData" />
            <ExperienceCardList />
          </div>
        </section>
      </div>
    </template>

    <template v-if="skills">
      <div class="container container--small">
        <section
          :id="getNavigationItemByName(NavigationItemEnum.Skills)?.id"
          class="section section--centered"
        >
          <div>
            <h2 class="h1">
              {{ getNavigationItemByName(NavigationItemEnum.Skills)?.name }}
            </h2>
            <template v-for="skill in skills" :key="skill.title">
              <BaseSkill :title="skill.title" :image="skill.img" />
            </template>
          </div>
        </section>
      </div>
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

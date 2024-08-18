<script lang="ts" setup>
import { getNavigationItems } from '~/content/ts/navigation';
import { NavigationItemEnum } from '~/types/navigation';
import { getNavigationItemByName } from '~/utils/navigation';

const route = useRoute();

const activeSection = computed(() => {
  const activeNavigationItem = getNavigationItems().find(item => item.url === route.hash);

  return activeNavigationItem?.name ? ` | ${activeNavigationItem?.name}` : '';
});

useHead({
  title: () => `Kasia Laniecka ${activeSection.value}`
});

const { data: aboutData } = await useLazyAsyncData('about', () => queryContent('md', 'about').findOne());

const { data: experienceData } = await useLazyAsyncData('experience', () => queryContent('md', 'experience').findOne());
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
        <section :id="getNavigationItemByName(NavigationItemEnum.About)?.id" class="section section--centered section-about">
          <div>
            <div class="section__heading">
              <BaseHeading :text="getNavigationItemByName(NavigationItemEnum.About)?.name || ''" tag-hx="h2" style-hx="h1" />
            </div>
            <BaseMarkdownRenderer :content="aboutData" />
          </div>
        </section>
      </div>
    </template>

    <template v-if="experienceData">
      <div class="container container--small">
        <section :id="getNavigationItemByName(NavigationItemEnum.Experience)?.id" class="section section--centered section-experience">
          <div>
            <BaseHeading :text="getNavigationItemByName(NavigationItemEnum.Experience)?.name || ''" tag-hx="h2" style-hx="h1" />
            <BaseMarkdownRenderer :content="experienceData" />
            <ExperienceCardList />
          </div>
        </section>
      </div>
    </template>

    <div class="container container--small">
      <section :id="getNavigationItemByName(NavigationItemEnum.Skills)?.id" class="section section--centered">
        <div>
          <BaseHeading :text="getNavigationItemByName(NavigationItemEnum.Skills)?.name || ''" tag-hx="h2" style-hx="h1" />
          <SkillList />
        </div>
      </section>
    </div>
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

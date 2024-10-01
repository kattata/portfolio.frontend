<script lang="ts" setup>
import { getNavigationItems } from '~/content/ts/navigation';
import { NavigationItemEnum } from '~/types/navigation';
import { getNavigationItemById } from '~/utils/navigation';

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
        <section :id="getNavigationItemById(NavigationItemEnum.About)?.id" class="section section--centered section-about">
          <div>
            <div class="section__heading">
              <BaseHeading :text="getNavigationItemById(NavigationItemEnum.About)?.name || ''" tag-hx="h2" style-hx="h1" />
            </div>
            <div class="about">
              <BaseMarkdownRenderer :content="aboutData" />
            </div>
          </div>
        </section>
      </div>
    </template>

    <div class="container container--small">
      <section :id="getNavigationItemById(NavigationItemEnum.Tech)?.id" class="section section--centered">
        <div>
          <BaseHeading :text="getNavigationItemById(NavigationItemEnum.Tech)?.name || ''" tag-hx="h2" style-hx="h1" />
          <SkillList />
        </div>
      </section>
    </div>

    <template v-if="experienceData">
      <div class="container container--small">
        <section :id="getNavigationItemById(NavigationItemEnum.Experience)?.id" class="section section--centered section-experience">
          <div>
            <BaseHeading :text="getNavigationItemById(NavigationItemEnum.Experience)?.name || ''" tag-hx="h2" style-hx="h1" />
            <BaseMarkdownRenderer :content="experienceData" />
            <ExperienceCardList />
          </div>
        </section>
      </div>
    </template>

    <div class="container container--small">
      <section :id="getNavigationItemById(NavigationItemEnum.Contact)?.id" class="section section--centered section-experience">
        <div>
          <BaseHeading :text="getNavigationItemById(NavigationItemEnum.Contact)?.name || ''" tag-hx="h2" style-hx="h1" />
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

  .about {
    display: flex;
    gap: 24px;
    align-items: center;

    img {
      width: 40%;
      height: 100%;
      object-fit: contain;
      mix-blend-mode: darken;
      filter: sepia(100%);
    }
  }
}
</style>

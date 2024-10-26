<script lang="ts" setup>
import data from '~/content/projects.json';

const id = useRoute().params.id;

const item = data.projects.find(project => project.id === id);

useHead({
  title: () => `${item?.title} | Kasia Laniecka`
});
</script>

<template>
  <div class="project-page">
    <main v-if="item">
      <div class="section-hero-wrapper">
        <div class="container">
          <section class="section-hero">
            <div class="section-hero-column section-hero-column--left">
              <BaseImage :src="item?.primaryImage.url" :alt="item?.primaryImage.alt" sizes="400px md:900px" fit="cover" />
            </div>
            <div class="section-hero-column section-hero-column--right">
              <div class="section-hero-meta">{{ capitalize(item.type) }} project, {{ item.yearCreated }}</div>
              <div class="section-hero-intro">
                <h1>{{ item.title }}</h1>
                <p>{{ item.description }}</p>
              </div>

              <div class="divider divider--horizontal"></div>

              <div class="section-hero-tech-stack">
                <h2>tech stack</h2>

                <div class="section-hero-tech-stack-list">
                  <template v-for="item in item.stack" :key="`tech-stack-item__${item}`">
                    <BaseLabel :text="item" size="large" />
                  </template>
                </div>
              </div>

              <div class="divider divider--horizontal"></div>

              <div class="section-hero-links">
                <div v-if="item.repo?.url" class="section-hero-link">
                  <BaseIcon name="external-link" />
                  <BaseLink :to="item.repo?.url" target="_blank"> Check out the code </BaseLink>
                </div>
                <div v-if="item.demo?.url" class="section-hero-link">
                  <BaseIcon name="external-link" />
                  <BaseLink :to="item.demo?.url" target="_blank"> Visit the website </BaseLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section v-if="item.images.length" class="section-gallery">
        <div class="container">
          <div class="section-gallery-images">
            <template v-for="image in item.images" :key="`gallery-image__${image.url}`">
              <BaseImage :width="300" :src="image.url" :alt="image.alt" />
            </template>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="postcss" scoped>
.project-page {
  --base-spacing: 30px @(min-width: 900px) 50px;
}

.section-hero-wrapper {
  margin-top: var(--base-spacing);
  margin-bottom: 0 @(min-width: 900px) var(--base-spacing);
}

.section-hero {
  display: grid;
  grid-template-columns: 1fr @(min-width: 900px) 60% 40%;
  gap: 12px @(min-width: 900px) 32px;

  img {
    border: 1px solid var(--color-line);
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius-small);
    box-shadow: var(--shadow-soft);
  }

  &-column {
    width: 100%;

    &--right {
      padding-block: var(--base-spacing);
    }
  }

  &-meta {
    margin-bottom: 16px;
  }

  &-intro {
    padding-bottom: var(--base-spacing);
  }

  &-tech-stack {
    padding-block: 50px;

    &-list {
      flex-wrap: wrap;
      display: flex;
      gap: 10px;
    }
  }

  &-links {
    display: flex;
    gap: 24px;
    padding-top: var(--base-spacing);
    padding-bottom: 0 @(min-width: 900px) var(--base-spacing);
  }

  &-link {
    display: flex;
    align-items: center;
    gap: 4px;

    :deep(.icon) {
      font-size: 24px;
      margin-bottom: 2px;
    }
  }

  .divider {
    position: absolute;
    width: 100vw;
    left: 0;
    z-index: -1;
  }
}

.section-gallery-images {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: var(--base-spacing);
  padding-bottom: 100px;

  img {
    width: 100% @(min-width: 900px) 300px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: var(--border-radius-small);
    border: 1px solid var(--color-line);
    box-shadow: var(--shadow-soft);
  }
}
</style>

<script lang="ts" setup>
import data from '~/content/projects.json';

const id = useRoute().params.id;

const project = data.projects.find(project => project.id === id);

useHead({
  title: () => `${project?.title} | Kasia Laniecka`
});
</script>

<template>
  <div class="project-page">
    <main v-if="project">
      <div class="section-hero-wrapper">
        <div class="container">
          <section class="section-hero">
            <div class="section-hero-column section-hero-column--left">
              <BaseImage :src="project?.primaryImage.url" />
            </div>
            <div class="section-hero-column section-hero-column--right">
              <div class="section-hero-meta">{{ capitalize(project.type) }} project, {{ project.yearCreated }}</div>
              <div class="section-hero-intro">
                <h1>{{ project.title }}</h1>
                <p>{{ project.description }}</p>
              </div>

              <div class="divider divider--horizontal"></div>

              <div class="section-hero-tech-stack">
                <h2>tech stack</h2>

                <div class="section-hero-tech-stack-list">
                  <template v-for="item in project.stack" :key="`tech-stack-item__${item}`">
                    <BaseLabel :text="item" size="large" />
                  </template>
                </div>
              </div>

              <div class="divider divider--horizontal"></div>

              <div class="section-hero-links">
                <BaseLink v-if="project.repo?.url" :to="project.repo?.url" target="_blank"> Check out the code </BaseLink>
                <BaseLink v-if="project.demo?.url" :to="project.demo?.url" target="_blank"> Visit the website </BaseLink>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="postcss" scoped>
.section-hero-wrapper {
  margin-top: 50px;
  margin-bottom: 100px;
}

.section-hero {
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 32px;

  img {
    border: 1px solid var(--color-line);
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top: -1px;
    border-radius: var(--border-radius-small);
  }

  &-column {
    width: 100%;

    &--right {
      padding-block: 50px;
    }
  }

  &-meta {
    margin-bottom: 16px;
  }

  &-intro {
    padding-bottom: 50px;
  }

  &-tech-stack {
    padding-block: 50px;

    &-list {
      flex-wrap: wrap;
      display: flex;
      gap: 16px;
    }
  }

  &-links {
    display: flex;
    gap: 16px;
    padding-block: 50px;
  }

  .divider {
    position: absolute;
    width: 100vw;
    left: 0;
    z-index: -1;
  }
}
</style>

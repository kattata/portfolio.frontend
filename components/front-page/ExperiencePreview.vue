<script lang="ts" setup></script>

<template>
  <div class="experience-preview">
    <div class="experience-preview-inner">
      <div>
        <h3>Frontend Developer at Novicell</h3>
        <p>
          Building large-scale B2B and B2C e-commerce platforms. Working with Vue, Nuxt, TypeScript, HTML and CSS.Refining and estimating
          stories, code reviews, debugging. Collaboration with backend developers, designers and testers. Working in a SCRUM environment
        </p>
      </div>
      <div class="experience-preview-column experience-preview-column--right">2022 - present</div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.experience-preview {
  display: flex;
  justify-content: center;

  &-inner {
    border-bottom: 1px solid var(--color-line);
    padding-block: 40px;
    padding-inline: var(--container-padding) @(min-width: 1400px) 0;
    display: grid;
    grid-template-columns: 1fr @(min-width: 900px) 1fr 300px;
    gap: 40px;
    max-width: calc(var(--container-width-m) - (2 * var(--container-padding)));
  }

  &:last-of-type {
    .experience-preview-inner {
      border-bottom: 0;
      padding-bottom: 0;
    }
  }

  &-column {
    &--right {
      text-align: start @(min-width: 900px) end;
    }
  }
}
</style>

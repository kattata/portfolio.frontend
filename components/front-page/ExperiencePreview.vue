<script lang="ts" setup></script>

<template>
  <div class="experience-preview">
    <div>
      <h3>Frontend Developer at Novicell</h3>
      <p>
        Building large-scale B2B and B2C e-commerce platforms. Working with Vue, Nuxt, TypeScript, HTML and CSS.Refining and estimating
        stories, code reviews, debugging. Collaboration with backend developers, designers and testers. Working in a SCRUM environment
      </p>
    </div>
    <div class="experience-preview-column experience-preview-column--right">2022 - present</div>
  </div>
</template>

<style lang="postcss" scoped>
.experience-preview {
  padding-block: 40px;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 40px;
  border-bottom: 1px solid var(--color-line);

  &-column {
    &--right {
      text-align: end;
    }
  }
}
</style>

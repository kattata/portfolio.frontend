<script lang="ts" setup>
interface Props {
  to: string;
  name: string;
  image: string | undefined;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="project-card">
    <div class="project-card-name">
      {{ props.name }}
    </div>
    <BaseLink :to="props.to" class="project-card-content">
      <template v-if="props.image">
        <BaseImage :src="props.image" height="700px" width="700px" fit="cover" />
      </template>
      <template v-else>
        <div class="project-card-image-placeholder"></div>
      </template>
    </BaseLink>
  </div>
</template>

<style lang="postcss" scoped>
.project-card-name {
  opacity: 1 @(min-width: 900px) 0;
  transition: opacity 0.3s ease-in-out;
  padding-bottom: 12px;
}

.project-card-content {
  border: 1px solid var(--color-line);
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  width: 300px @(min-width: 900px) 500px;
  aspect-ratio: 1/1;
  border-radius: var(--border-radius-small);
  display: flex;
  align-items: center;
  justify-content: center;
  filter: brightness(90%);
  transition: filter 0.3s ease-in-out;
}

.project-card {
  &:hover {
    .project-card-name {
      opacity: 1;
    }

    .project-card-content {
      filter: brightness(100%);
    }
  }
}

.project-card-image-placeholder {
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-small);
}
</style>

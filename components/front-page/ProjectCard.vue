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
        <BaseImage :src="props.image" />
      </template>
      <template v-else>
        <div class="project-card-image-placeholder"></div>
      </template>
    </BaseLink>
  </div>
</template>

<style lang="postcss" scoped>
.project-card-name {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  padding-bottom: 12px;
}

.project-card {
  &:hover {
    .project-card-name {
      opacity: 1;
    }
  }
}

.project-card-content {
  display: block;
  height: 500px;
  width: 500px;
  border-radius: var(--border-radius-small);
}

.project-card-image-placeholder {
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-small);
}
</style>

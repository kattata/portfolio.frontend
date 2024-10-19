<script lang="ts" setup>
interface ExperiencePreview {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  dateStarted: string;
  dateEnded: string | null;
}

interface Props {
  experience: ExperiencePreview;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="experience-preview">
    <div class="experience-preview-inner">
      <div>
        <h3>{{ props.experience.title }}</h3>
        <p>{{ props.experience.description }}</p>

        <div class="experience-preview-keywords">
          <template v-for="item in props.experience.keywords" :key="`keyword__${item}`">
            <BaseLabel :text="item" size="large" />
          </template>
        </div>
      </div>
      <div class="experience-preview-column experience-preview-column--right">
        {{ props.experience.dateStarted }} - {{ props.experience.dateEnded ? props.experience.dateEnded : 'now' }}
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.experience-preview {
  display: flex;
  justify-content: space-between;
  width: 100%;

  &-inner {
    width: 100%;
    border-bottom: 1px solid var(--color-line);
    padding-block: 40px;
    display: grid;
    grid-template-columns: 1fr @(min-width: 900px) 1fr 300px;
    gap: 40px;
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

  &-keywords {
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>

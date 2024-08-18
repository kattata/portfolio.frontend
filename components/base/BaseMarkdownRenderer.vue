<script lang="ts" setup>
const props = defineProps<{
  content: any;
}>();
</script>

<template>
  <ContentRendererMarkdown :value="props.content" class="content-renderer" />
</template>

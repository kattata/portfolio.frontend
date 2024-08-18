<script lang="ts" setup>
import { skills } from '~~/content/ts/skills';
</script>

<template>
  <div class="skill-list">
    <template v-for="skill in skills" :key="skill.title">
      <BaseSkill :title="skill.title" :image="skill.img" />
    </template>
  </div>
</template>

<style lang="postcss" scoped>
.skill-list {
  display: flex;
}
</style>

<script lang="ts" setup></script>

<template>
  <div class="expandable-card">
    <div class="expandable-card__content">
      <div class="expandable-card__content--collapsed">
        <slot name="collapsed"></slot>
      </div>
      <div class="expandable-card__content--expanded">
        <slot name="expanded"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.expandable-card {
  width: 150px;
  height: 400px;
  transition: all 0.5s ease-in-out;

  &__content {
    transition: all 0.5s ease-in-out;
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    overflow: hidden;

    &--collapsed {
      background-color: var(--color-red-100);
      color: var(--color-secondary-100);
      transition: all 0.5s ease-in-out;
      opacity: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 16px;
      min-width: 150px;
      overflow: hidden;
    }

    &--expanded {
      border: 1px solid var(--color-red-100);
      transition: all 0.5s ease-in-out;
      padding: 24px;
      min-width: 400px;
      overflow: hidden;
    }
  }

  &:hover {
    width: 400px;

    .expandable-card__content--collapsed {
      transform: translateX(-150px);
    }

    .expandable-card__content--expanded {
      transform: translateX(-150px);
    }
  }
}
</style>

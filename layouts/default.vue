<script lang="ts" setup></script>

<template>
  <TheHeader />
  <main>
    <slot></slot>
  </main>
  <TheFooter />
</template>

<style lang="postcss" scoped>
main {
  min-height: calc(100vh - 200px);
}
</style>

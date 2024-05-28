<script lang="ts" setup></script>

<template>
  <div class="container">
    <main>
      <template v-if="!useBreakpoints().isMobile()">
        <section class="section-business-card">
          <BusinessCard />
        </section>
      </template>
    </main>
  </div>
</template>

<style lang="postcss" scoped>
main {
  height: 300vh;
}

.section-business-card {
  justify-content: center;
  align-items: center;
  height: calc(100vh - (36px + 19px)); /* Screen height - header height */
  display: flex;
}
</style>

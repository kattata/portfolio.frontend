<script lang="ts" setup></script>

<template>
  <div class="business-card">
    <BusinessCardFront />
  </div>
</template>

<style lang="postcss" scoped>
.business-card {
  margin-top: 60px;
  width: 100%;

  @media (min-width: 900px) {
    width: unset;
  }
}
</style>

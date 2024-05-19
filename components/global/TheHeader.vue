<script lang="ts" setup></script>

<template>
  <div class="container">
    <header>
      <!-- <BaseIcon name="logo" /> -->
      logo
      <ul>
        <li>
          <BaseLink to="/about">About</BaseLink>
        </li>
        <li>
          <BaseLink to="/experience">Experience</BaseLink>
        </li>
      </ul>
    </header>
  </div>
</template>

<style lang="postcss" scoped>
header {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;

    li {
      list-style-type: none;
    }
  }
}
</style>

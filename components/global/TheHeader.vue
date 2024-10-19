<script lang="ts" setup></script>

<template>
  <div class="container">
    <header>
      <BaseLink to="/"> K/L </BaseLink>

      <ul>
        <li>
          <BaseLink to="#about"> about </BaseLink>
        </li>
        <li>
          <BaseLink to="#projects"> projects </BaseLink>
        </li>
        <li>
          <BaseLink to="#experience"> experience </BaseLink>
        </li>
        <li>
          <BaseLink to="#contact"> contact </BaseLink>
        </li>
      </ul>
    </header>
  </div>
</template>

<style lang="postcss" scoped>
header {
  display: flex;
  justify-content: space-between;
  padding-block: 32px;

  ul {
    margin: 0;
    display: flex;
    gap: 16px;

    li {
      list-style-type: none;
    }
  }
}
</style>

<script lang="ts" setup></script>

<template>
  <div class="container container--no-padding">
    <header>
      <div class="divider divider--horizontal"></div>
      <BaseLink to="/">KL</BaseLink>

      <ul class="navigation-items-desktop">
        <li>
          <BaseLink to="/#about">about</BaseLink>
        </li>
        <li>
          <BaseLink to="/#projects">projects</BaseLink>
        </li>
        <li>
          <BaseLink to="/#experience">experience</BaseLink>
        </li>
        <li>
          <BaseLink to="/#contact">contact</BaseLink>
        </li>
      </ul>

      <ul class="navigation-items-mobile">
        <li>
          <BaseLink to="#contact">get in touch!</BaseLink>
        </li>
      </ul>
    </header>
  </div>
</template>

<style lang="postcss" scoped>
header {
  display: flex;
  justify-content: space-between;
  padding-block: 40px;
  position: relative;

  ul {
    margin: 0;
    display: flex;
    gap: 32px;

    li {
      list-style-type: none;
    }
  }

  a {
    background-color: var(--color-background);
    padding-inline: 16px;
    text-decoration: none;
  }

  .divider {
    z-index: -1;
    position: absolute;
    left: 0 @(min-width: 1400px) calc((100vw - var(--container-width-m) + var(--container-padding)) / 2 * -1);
    top: 50%;
    width: 100vw;
  }

  .navigation-items-desktop {
    display: none @(min-width: 900px) flex;
  }

  .navigation-items-mobile {
    display: flex @(min-width: 900px) none;
  }
}
</style>

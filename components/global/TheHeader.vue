<script lang="ts" setup></script>

<template>
  <header class="header">
    <div class="divider divider--horizontal"></div>

    <div class="container container--no-padding">
      <div class="header__inner">
        <BaseLink to="/" class="header__logo">
          {{ $t('Header.Logo') }}
        </BaseLink>
        <ul>
          <li>
            <BaseLink to="#about">
              {{ $t('Header.NavigationItems.About') }}
            </BaseLink>
          </li>
          <li>
            <BaseLink to="#skills">
              {{ $t('Header.NavigationItems.Skills') }}
            </BaseLink>
          </li>
          <li>
            <BaseLink to="#experience">
              {{ $t('Header.NavigationItems.Experience') }}
            </BaseLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.header {
  margin-top: 20px;
  position: relative;

  &__inner {
    z-index: 10;
    position: relative;
    gap: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
  }

  ul {
    margin: 0;
    display: flex;
    gap: 20px;
    background-color: var(--color-secondary-100);
    padding: 16px;

    li {
      list-style-type: none;
    }
  }

  &__logo {
    white-space: nowrap;
    background-color: var(--color-secondary-100);
    padding: 16px;
  }

  .divider {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>

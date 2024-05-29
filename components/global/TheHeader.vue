<script lang="ts" setup></script>

<template>
  <div class="container">
    <header class="header">
      <BaseLink to="/" class="header__logo">
        {{ $t('Header.Logo') }}
      </BaseLink>
      <div class="divider divider--horizontal"></div>
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
    </header>
  </div>
</template>

<style lang="postcss" scoped>
.header {
  margin-top: 36px;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;

    li {
      list-style-type: none;
    }
  }

  &__logo {
    white-space: nowrap;
  }
}
</style>

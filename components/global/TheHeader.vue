<script lang="ts" setup>
import { NavigationItemEnum } from '~/types/navigation';
import { getNavigationItemByName } from '~/utils/navigation';
</script>

<template>
  <header class="header">
    <div class="divider divider--horizontal"></div>

    <div class="container container--no-padding">
      <div class="header__inner">
        <BaseLink
          :to="getNavigationItemByName(NavigationItemEnum.Home)?.url"
          class="header__logo"
        >
          {{ $t('Header.Logo') }}
        </BaseLink>
        <ul>
          <li>
            <BaseLink
              :to="getNavigationItemByName(NavigationItemEnum.About)?.url"
            >
              {{ getNavigationItemByName(NavigationItemEnum.About)?.name }}
            </BaseLink>
          </li>
          <li>
            <BaseLink
              :to="getNavigationItemByName(NavigationItemEnum.Experience)?.url"
            >
              {{ getNavigationItemByName(NavigationItemEnum.Experience)?.name }}
            </BaseLink>
          </li>
          <li>
            <BaseLink
              :to="getNavigationItemByName(NavigationItemEnum.Skills)?.url"
            >
              {{ getNavigationItemByName(NavigationItemEnum.Skills)?.name }}
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

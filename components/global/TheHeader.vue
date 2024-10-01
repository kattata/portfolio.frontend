<script lang="ts" setup>
import { getNavigationItems } from '~/content/ts/navigation';
import { NavigationItemEnum } from '~/types/navigation';
import { getNavigationItemById } from '~/utils/navigation';
</script>

<template>
  <header class="header">
    <div class="divider divider--horizontal"></div>

    <div class="container container--no-padding">
      <div class="header__inner">
        <BaseLink :to="getNavigationItemById(NavigationItemEnum.Home)?.url" class="header__logo">
          {{ $t('Header.Logo') }}
        </BaseLink>

        <ul>
          <template v-for="item in getNavigationItems()" :key="`nav-item__${item.id}`">
            <li>
              <BaseLink :to="getNavigationItemById(item.id as NavigationItemEnum)?.url">
                {{ getNavigationItemById(item.id as NavigationItemEnum)?.name }}
              </BaseLink>
            </li>
          </template>
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
    display: none @(min-width: 900px) flex;
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

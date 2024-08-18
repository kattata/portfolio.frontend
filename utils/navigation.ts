import { getNavigationItems } from '~/content/ts/navigation';
import type { NavigationItemEnum, NavigationType } from '~/types/navigation';

export function getNavigationItemByName(name: NavigationItemEnum) {
  return getNavigationItems().find(
    (item: NavigationType) => item.name === name
  );
}

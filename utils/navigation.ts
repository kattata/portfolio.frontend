import { getNavigationItems } from '~/content/ts/navigation';
import type { NavigationItemEnum, NavigationType } from '~/types/navigation';

export function getNavigationItemById(id: NavigationItemEnum) {
  return getNavigationItems().find((item: NavigationType) => item.id === id);
}

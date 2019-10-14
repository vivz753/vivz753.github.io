import { MenuItems } from '../constants';

export const getMenuTitle = (key) => {
  let found = MenuItems.find(item => item.key === key)
  return found.name;
}
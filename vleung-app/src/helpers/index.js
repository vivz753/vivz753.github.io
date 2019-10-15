import { MenuItems, ProjectItems } from '../constants';

export const getMenuName = (key) => {
  let found = MenuItems.find(item => item.key === key)
  return found.name;
}

export const getProjectName = (groupKey, itemKey) => {

  let siderItemName = '';

  let siderGroupName = ProjectItems.find(item => item.key === groupKey);
  itemKey ? siderItemName = siderGroupName.submenu.find(item => item.key === itemKey).name : siderItemName = ''; 
  siderGroupName = siderGroupName.name;
  
  return [siderGroupName, siderItemName];
}
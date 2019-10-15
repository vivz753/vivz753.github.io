import { MenuItems, ProjectItems, AboutItems } from '../constants';

// returns the name of the nav item
export const getMenuName = (key) => {
  let found = MenuItems.find(item => item.key === key)
  return found.name;
}

// returns the name of the selected sider group and sider item from Projects nav
export const getProjectName = (groupKey, itemKey) => {

  // group key always exists thanks to getProjectGroupOf which is called everytime a menu itme is clicked
  let siderGroup = ProjectItems.find(item => item.key === groupKey)
    // groupKey ? 
    // ProjectItems.find(item => item.key === groupKey) : 
    // itemKey ? 
    // ProjectItems.find(item => item.submenu.find (subitem => subitem.key === itemKey)) : 
    // '';

  // 
  let siderItem = siderGroup.submenu.find(item => item.key === itemKey)
    // groupKey && itemKey ? 
    // siderGroup.submenu.find(item => item.key === itemKey) :
    // '';

  let siderGroupName = siderGroup ? siderGroup.name : ''; 
  let siderItemName = siderItem ? siderItem.name : '';
  
  return [siderGroupName, siderItemName];
}

// returns the key of the sider group which the sider item belongs to in the Projects nav
export const getProjectGroupOf = (itemKey) => {
  return ProjectItems.find(item => item.submenu.find (subitem => subitem.key === itemKey));
}

export const getAboutItemName = (itemKey) => {
  return itemKey ? AboutItems.find(item => item.key === itemKey).name : '';
}
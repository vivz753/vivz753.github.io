import React, {createContext, useContext, useState } from 'react';

export const SelectedMenuItemContext = createContext();
export const SelectedMenuItemProvider = ({children}) => {
  // if menu item is not selected, default to projects
  const [ selectedMenuItem, setSelectedMenuItem ] = useState('PROJECTS');
  const [ selectedSiderGroup, setSelectedSiderGroup ] = useState('2D/3D');
  const [ selectedSiderItem, setSelectedSiderItem ] = useState('PUMPKINCAT');
  const [ contentPage, setContentPage ] = useState('PUMPKINCAT');

  return (
    <SelectedMenuItemContext.Provider value={{
      selectedMenuItem, setSelectedMenuItem, 
      selectedSiderGroup, setSelectedSiderGroup, 
      selectedSiderItem, setSelectedSiderItem, 
      contentPage, setContentPage
    }}>
      {children}
    </SelectedMenuItemContext.Provider>
  )
};

export const useSelectedMenuItemValue = () => useContext(SelectedMenuItemContext);
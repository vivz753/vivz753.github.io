import React, {createContext, useContext, useState } from 'react';

export const SelectedMenuItemContext = createContext();
export const SelectedMenuItemProvider = ({children}) => {
  // if menu item is not selected, default to projects
  const [ selectedMenuItem, setSelectedMenuItem ] = useState('PROJECTS');
  return (
    <SelectedMenuItemContext.Provider value={{selectedMenuItem, setSelectedMenuItem}}>
      {children}
    </SelectedMenuItemContext.Provider>
  )
};

export const useSelectedMenuItemValue = () => useContext(SelectedMenuItemContext);
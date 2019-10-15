import React, {createContext, useContext, useState } from 'react';

export const SelectedMenuItemContext = createContext();
export const SelectedMenuItemProvider = ({children}) => {
  // set the defaults here
  const [ selectedMenuItem, setSelectedMenuItem ] = useState('ABOUT');
  const [ selectedSiderGroup, setSelectedSiderGroup ] = useState('');
  const [ selectedSiderItem, setSelectedSiderItem ] = useState('BIO');
  const [ contentPage, setContentPage ] = useState('BIO');
  const [ siderCollapsed, setSiderCollapsed ] = useState(false);


  return (
    <SelectedMenuItemContext.Provider value={{
      selectedMenuItem, setSelectedMenuItem, 
      selectedSiderGroup, setSelectedSiderGroup, 
      selectedSiderItem, setSelectedSiderItem, 
      contentPage, setContentPage,
      siderCollapsed, setSiderCollapsed 
    }}>
      {children}
    </SelectedMenuItemContext.Provider>
  )
};

export const useSelectedMenuItemValue = () => useContext(SelectedMenuItemContext);
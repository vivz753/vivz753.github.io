import React, {createContext, useContext, useState } from 'react';

export const SelectedMenuItemContext = createContext();
export const SelectedMenuItemProvider = ({children}) => {
  // set the defaults here
  const [ selectedMenuItem, setSelectedMenuItem ] = useState('ABOUT');
  const [ selectedSiderGroup, setSelectedSiderGroup ] = useState('');
  const [ selectedSiderItem, setSelectedSiderItem ] = useState('BIO');
  const [ contentPage, setContentPage ] = useState('BIO');

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
// ColorContext.js
import React, { createContext, useContext } from 'react';

const ColorContext = createContext('light'); // valor por defecto

export function ColorProvider({ children }) {
  return (
    <ColorContext.Provider value="blue">
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  return useContext(ColorContext);
}
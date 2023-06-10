import React, { createContext, useState, useEffect } from 'react'
export const ManageContext = createContext();

export const ContextProvider = ({ children }) => {
  const uwu = 'uwu'

  return (
    <ManageContext.Provider value={{ uwu }}>
      { children }
    </ManageContext.Provider>
  )
}
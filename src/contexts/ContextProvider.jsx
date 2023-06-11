import React, { createContext, useState, useEffect } from 'react'
import { COMMANDS } from './../constants/commands'
export const ManageContext = createContext();

export const ContextProvider = ({ children }) => {

  const [test, setTest] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const command = COMMANDS[test].SHORTCUT;

  const handleToggleOptions = () => {
    setInputValue('')
  }

  return (
    <ManageContext.Provider value={{ 
      command,
      test, 
      setTest,
      inputValue,
      setInputValue,
      handleToggleOptions
    }}>
      { children }
    </ManageContext.Provider>
  )
}
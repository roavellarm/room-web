import React, { useState, createContext, useContext } from 'react'

const initialState = {
  isLoading: false,
  isAuthenticated: !!localStorage.getItem('isAuthenticated') ? true : false,
}

export const Context = createContext({})

const Provider = ({ children }) => {
  const [store, updateStore] = useState(initialState)

  const setStore = props => updateStore(Object.assign({}, store, props))

  return (
    <>
      <Context.Provider value={{ store, setStore }}>
        {children}
      </Context.Provider>
    </>
  )
}

export const useStore = () => useContext(Context)

export default Provider

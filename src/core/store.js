import React, { useState, createContext, useContext } from 'react'

const getCurrentUserId = () => {
  const currentUser = localStorage.getItem('currentUser')
  if (currentUser) return JSON.parse(currentUser).id
  return undefined
}

const initialState = {
  isLoading: false,
  isAuthenticated: !!localStorage.getItem('isAuthenticated') ? true : false,
  userId: getCurrentUserId(),
}

export const Context = createContext({})

const Provider = ({ children }) => {
  const [store, updateStore] = useState(initialState)

  const setStore = props => updateStore(Object.assign({}, store, props))

  return (
    <Context.Provider value={{ store, setStore }}>{children}</Context.Provider>
  )
}

export const useStore = () => useContext(Context)

export default Provider

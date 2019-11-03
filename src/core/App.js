import React from 'react'
import Router from './Router'
import { NavBar } from '../components'
import { useStore } from './store'

export default () => {
  const { store } = useStore()
  return (
    <>
      <div>
        <NavBar isAuthenticated={store.isAuthenticated} />
      </div>
      <div>
        <Router isAuthenticated={store.isAuthenticated} />
      </div>
    </>
  )
}

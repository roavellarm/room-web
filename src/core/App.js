import React from 'react'
import Router from './Router'
import { Menu } from '../components'
import { useStore } from './store'

export default () => {
  const { store } = useStore()
  return (
    <>
      <div>
        <Menu isAuthenticated={store.isAuthenticated} />
      </div>
      <div>
        <Router isAuthenticated={store.isAuthenticated} />
      </div>
    </>
  )
}

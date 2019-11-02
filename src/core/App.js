import React from 'react'
// import styled from 'styled-components'
import Router from './Router'
import { Menu } from '../components'
import { useStore } from './store'

// `   ` this is a function that returns a value to a component
// const AppWrapper = styled.div`
//   font-size: 12px;
// `

export default () => {
  const { store, setStore } = useStore()
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

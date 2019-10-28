import React from 'react'
import styled from 'styled-components'
import Router from './Router'
import { Menu } from '../components'

// `   ` this is a function that returns a value to a component
const AppWrapper = styled.div`
  font-size: 12px;
`

export default () => {
  return (
    <AppWrapper>
      <Menu />
      <Router isAuthenticated={true} />
    </AppWrapper>
  )
}

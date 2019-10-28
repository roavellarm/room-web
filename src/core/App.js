import React from 'react'
import styled from 'styled-components'
import Router from './Router'
import { Menu } from '../components'

// `   ` é uma função que retorna um valor para um componente
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

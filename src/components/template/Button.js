import React from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  border: none;
  cursor: pointer;
  color: white;
  background: black;
  width: 100px;
  height: 30px;

  &:hover {
    color: black;
    background: white;
  }
`

export default ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

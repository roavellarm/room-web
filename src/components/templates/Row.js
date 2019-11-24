import React from 'react'
import styled from 'styled-components'

export const StyledRow = styled.div`
  display: ${({ inline }) => (inline ? 'flex' : null)};
  flex-direction: ${({ inline }) => (inline ? 'inline' : null)};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : null)};
  position: relative;
  width: 100%;
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`

export default ({ children, ...props }) => (
  <StyledRow {...props}>{children}</StyledRow>
)

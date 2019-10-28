import React from 'react'
import styled from 'styled-components'

const StyledTextField = styled.input`
  border: solid black 2px;
  border-radius: 10px;
`

export default ({ label, name, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <StyledTextField name={name} value={value} onChange={onChange} />
    </div>
  )
}

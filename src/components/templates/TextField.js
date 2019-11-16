import React from 'react'
import { TextField } from '@material-ui/core'

export default ({
  id,
  name,
  label,
  value,
  onChange,
  onKeyDown,
  rows,
  autoComplete = 'off',
}) => {
  return (
    <TextField
      autoComplete={autoComplete}
      key={id}
      id={id}
      fullWidth
      label={label}
      margin="normal"
      name={name}
      onChange={onChange}
      onKeyDown={onKeyDown}
      rows={rows}
      value={value}
      multiline
      variant="outlined"
    />
  )
}

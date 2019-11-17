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
  required,
  type,
  autoComplete,
  autoFocus,
  multiline,
}) => {
  return (
    <TextField
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      type={type}
      required={required}
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
      multiline={multiline}
      variant="outlined"
    />
  )
}

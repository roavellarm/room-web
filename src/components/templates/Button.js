import React from 'react'
import Button from '@material-ui/core/Button'

export default ({ children, onClick }) => {
  return (
    <Button
      fullWidth
      type="submit"
      variant="contained"
      color="primary"
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

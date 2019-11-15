import React from 'react'
import Typography from '@material-ui/core/Typography'

export default ({ children }) => {
  return (
    <Typography
      component="h1"
      variant="h4"
      align="center"
      color="textPrimary"
      gutterBottom
    >
      {children}
    </Typography>
  )
}

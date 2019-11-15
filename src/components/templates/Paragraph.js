import React from 'react'
import Typography from '@material-ui/core/Typography'

export default ({ children }) => {
  return (
    <Typography variant="h6" align="center" color="textSecondary" paragraph>
      {children}
    </Typography>
  )
}

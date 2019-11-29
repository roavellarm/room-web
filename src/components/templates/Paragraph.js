import React from 'react'
import Typography from '@material-ui/core/Typography'

export default ({
  children,
  variant = 'h6',
  align = 'center',
  color = 'textSecondary',
}) => {
  return (
    <Typography variant={variant} align={align} color={color} paragraph>
      {children}
    </Typography>
  )
}

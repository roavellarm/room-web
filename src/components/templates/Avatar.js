import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { Tooltip } from '@material-ui/core'
import Box from '@material-ui/core/Box'

const defaultProps = {
  bgcolor: 'background.paper',
  // borderColor: 'text.primary',
  m: 1,
  border: 8,
  style: { margin: 10, width: 60, height: 60 },
}

// borderColor="primary.main" {...defaultProps} />
//       <Box borderColor="secondary.main" {...defaultProps} />
//       <Box borderColor="error.main" {...defaultProps} />
//       <Box borderColor="grey.500" {...defaultProps} />
//       <Box borderColor="text.primary" {...defaultProps} />

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    // margin: 10,
    width: 60,
    height: 60,
  },
}))

export default ({ status, children, name, img, tooltip }) => {
  const classes = useStyles()

  return (
    <Tooltip title={tooltip}>
      <Box display="flex" justifyContent="center">
        <Box borderRadius="50%" borderColor={status} {...defaultProps}>
          <Avatar alt={name} src={img} className={classes.bigAvatar}>
            {children}
          </Avatar>
        </Box>
      </Box>
    </Tooltip>
  )
}

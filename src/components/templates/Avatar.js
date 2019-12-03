import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { Tooltip } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}))

export default ({ children, name, img, tooltip }) => {
  const classes = useStyles()

  return (
    <Tooltip title={tooltip}>
      <Avatar alt={name} src={img} className={classes.bigAvatar}>
        {children}
      </Avatar>
    </Tooltip>
  )
}

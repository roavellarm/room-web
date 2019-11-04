import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}))

export default ({ children, name, img }) => {
  const classes = useStyles()

  return (
    <Avatar alt={name} src={img} className={classes.bigAvatar}>
      {children}
    </Avatar>
  )
}

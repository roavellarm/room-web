import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  frame: {
    minWidth: '100%',
    minHeight: 'inherit',
  },
}))

// src="https://meet.jit.si/098098098"

export default ({ url }) => {
  const classes = useStyles()

  return (
    <iframe
      className={classes.frame}
      id="call"
      title="Call"
      src={url}
      allow="geolocation; microphone; camera"
    />
  )
}

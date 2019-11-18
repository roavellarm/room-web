import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  frame: {
    minWidth: '100%',
    minHeight: 'inherit',
  },
}))

export default ({ token }) => {
  const classes = useStyles()

  return (
    <iframe
      className={classes.frame}
      id="call"
      title="Call"
      src={`https://meet.jit.si/${token}`}
      allow="geolocation; microphone; camera"
    />
  )
}

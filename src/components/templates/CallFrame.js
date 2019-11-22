import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  frame: {
    width: '99%',
    minHeight: 'calc(100vh - 115px)',
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

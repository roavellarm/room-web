import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    // minHeight: '80%',
  },
}))

export default () => {
  const classes = useStyles()
  return (
    <Box
      display="flex"
      justifyContent="center"
      // p={1}
      bgcolor="background.paper"
      border={4}
      className={classes.root}
    >
      {"I'm a flexbox container!"}
    </Box>
  )
}

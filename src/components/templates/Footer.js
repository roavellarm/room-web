import React from 'react'
import { Typography, Container, makeStyles } from '@material-ui/core'
import { Copyright } from '.'

const useStyles = makeStyles(theme => ({
  footer: {
    // backgroundColor: '#FBECDD',
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
    marginTop: 'auto',
  },
}))

export default () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography
          variant="subtitle"
          align="center"
          color="textSecondary"
          component="p"
        >
          Room - Bringing remote workers together
        </Typography>
        <Copyright />
      </Container>
    </footer>
  )
}

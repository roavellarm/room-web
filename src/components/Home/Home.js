import React from 'react'
import { Grid, makeStyles, Container, CssBaseline } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  frame: {
    flex: 3,
    width: '100%',
    height: '100vh',
  },
}))

export default () => {
  const classes = useStyles()

  return (
    <Grid container component="main" align="center" className={classes.root}>
      <CssBaseline />
      <Container width="100%">
        <Grid item square>
          HOME
        </Grid>
        <Grid item square>
          <iframe
            className={classes.frame}
            id="Teste"
            title="teste"
            src="https://meet.jit.si/098098098"
          ></iframe>
        </Grid>
      </Container>
    </Grid>
  )
}

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Router from './Router'
import { NavBar } from '../components'
import { useStore } from './store'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inherit',
    minHeight: '100vh',
    maxWidth: '100%',
    flexDirection: 'column',
  },
  navbar: {
    maxHeight: '48px',
  },
  main: {
    minHeight: 'calc(100vh - 48px)',
  },
}))

export default () => {
  const classes = useStyles()
  const { store } = useStore()
  return (
    <Grid className={classes.root}>
      <Grid className={classes.navbar}>
        <NavBar isAuthenticated={store.isAuthenticated} />
      </Grid>
      <Grid className={classes.main}>
        <Router isAuthenticated={store.isAuthenticated} />
      </Grid>
    </Grid>
  )
}

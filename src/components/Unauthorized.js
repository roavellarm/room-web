import React from 'react'
import Layout from './templates/Layout'
import dogo from '../assets/images/dogo-unauthorized.gif'
import HeroSection from './templates/HeroSection'
import { makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  img: {
    position: "relative",
    width: '100%',
    height: 'auto',
  },
}))

export default () => {
  const classes = useStyles()

  const content = (
    <>
      <HeroSection title="Unautorized" />
      <Grid xs={12} sm={5} md={7} lg={5}>
        <img alt="unauthorized" src={dogo} className={classes.img} />
      </Grid>
    </>
  )
  return <Layout content={content} />
}

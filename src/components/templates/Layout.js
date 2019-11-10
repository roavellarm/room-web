import React from 'react'
import { makeStyles, Typography, Container, Grid } from '@material-ui/core'
import { Footer } from '../templates'

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 0, 1),
  },
  content: {
    minHeight: 'calc(100vh - 157px)',
  },
  content2: {
    minHeight: 'calc(100vh - 102px)',
  },
}))

export default ({ title, content }) => {
  const classes = useStyles()

  return (
    <>
      {title != null && (
        <Container align="center" maxWidth="sm" className={classes.heroContent}>
          <Typography component="h2" variant="h4" color="textPrimary">
            {title}
          </Typography>
        </Container>
      )}
      {title != null ? (
        <Grid align="center" className={classes.content}>
          {content}
        </Grid>
      ) : (
        <Grid align="center" className={classes.content2}>
          {content}
        </Grid>
      )}
      <Footer />
    </>
  )
}

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(8, 0, 6),
  },
}))

export default ({ title, subtitle }) => {
  const classes = useStyles()

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {subtitle}
        </Typography>
      </Container>
    </div>
  )
}

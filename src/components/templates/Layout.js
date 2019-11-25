import React from 'react'
import styled, { keyframes } from 'styled-components'
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
    minHeight: 'calc(100vh - 107px)',
  },
}))

const animation = keyframes`
  0% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
`

const StyledWrapper = styled.div`
  animation: ${animation} 1s linear;
`

export default ({ title, children, content }) => {
  const classes = useStyles()

  return (
    <StyledWrapper>
      {title != null && (
        <Container align="center" maxWidth="sm" className={classes.heroContent}>
          <Typography component="h2" variant="h4" color="textPrimary">
            {title}
          </Typography>
        </Container>
      )}
      {title != null ? (
        <Grid align="center" className={classes.content}>
          {content || children}
        </Grid>
      ) : (
        <Grid align="center" className={classes.content2}>
          {content || children}
        </Grid>
      )}
      {<Footer />}
    </StyledWrapper>
  )
}

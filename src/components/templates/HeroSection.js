import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Title, Paragraph } from './'

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2, 0, 1),
  },
}))

export default ({ title, subtitle }) => {
  const classes = useStyles()

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Title>{title}</Title>
        <Paragraph variant={'overline'} color={'primary'}>
          {subtitle}
        </Paragraph>
      </Container>
    </div>
  )
}

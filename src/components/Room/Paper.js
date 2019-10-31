import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}))

export default function PaperSheet() {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        Aqui vai o nome da sala
      </Typography>
      <Typography component="p">Aqui vão aparecer os avatares</Typography>
    </Paper>
  )
}

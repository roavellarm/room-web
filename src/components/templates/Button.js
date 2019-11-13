import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  buttonStyle: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
}))

export default ({ children, onClick }) => {
  const classes = useStyles()

  return (
    <div className={classes.buttonStyle}>
      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  )
}

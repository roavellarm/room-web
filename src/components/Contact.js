import React from 'react'
import { Typography } from '@material-ui/core'
import { Button } from './templates'

export default ({ showMessage }) => {
  return (
    <>
      <Typography component="h1" variant="h3">
        Contact
      </Typography>
      <Button onClick={() => showMessage()}>Show message</Button>
    </>
  )
}

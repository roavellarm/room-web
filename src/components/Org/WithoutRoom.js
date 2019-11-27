import React from 'react'
import { Grid } from '@material-ui/core'
import { Paragraph } from '../templates'

export default ({ orgName }) => {
  return (
    <>
      <Grid style={{ paddingTop: 35 }}>
        <Paragraph>{orgName} doesn't have any room yet.</Paragraph>
      </Grid>
    </>
  )
}

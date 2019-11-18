import React from 'react'
import { Grid } from '@material-ui/core'
import { HeroSection, Paragraph } from '../templates'

export default () => {
  return (
    <>
      <HeroSection title={'Dashboard'} />
      <Grid>
        <Paragraph>You don't have any organization yet.</Paragraph>
      </Grid>
    </>
  )
}

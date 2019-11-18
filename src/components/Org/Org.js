import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Button, HeroSection } from '../templates'
import { RoomsGrid } from '.'
import { Grid } from '@material-ui/core'

export default ({ list, name, org_id }) => {
  return (
    <Layout>
      <HeroSection title={name} />
      <RoomsGrid list={list} />
      <Grid container>
        <Link to={`/create-room/${org_id}`} style={{ textDecoration: 'none' }}>
          <Button>Create new room</Button>
        </Link>
      </Grid>
    </Layout>
  )
}

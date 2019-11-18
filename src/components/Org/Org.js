import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Button } from '../templates'
import { RoomsGrid } from '.'

export default ({ list, org_id }) => {
  return (
    <Layout>
      <Link to={`/create-room/${org_id}`} style={{ textDecoration: 'none' }}>
        <Button>Create new room</Button>
      </Link>
      <RoomsGrid list={list} />
    </Layout>
  )
}

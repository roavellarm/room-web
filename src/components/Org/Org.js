import React from 'react'
import { Link } from 'react-router-dom'
import { RoomsGrid } from '.'
import { Layout, Button } from '../templates'

export default ({ rooms, orgId }) => {
  return (
    <Layout>
      <Link to={`/create-room/${orgId}`}>
        <Button>Create new room</Button>
      </Link>
      <RoomsGrid rooms={rooms} />
    </Layout>
  )
}

import React from 'react'
import { RoomsGrid } from '.'
import { Layout } from '../templates'

export default ({ rooms }) => {
  return <Layout content={<RoomsGrid rooms={rooms} />} />
}

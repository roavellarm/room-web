import React from 'react'
import { Org } from '../components'
import rooms from '../api/exampleData/orgs.json'

export default () => {
  return <Org rooms={rooms} />
}

import React from 'react'
import { Org } from '../components'
import rooms from '../assets/data/orgs.json'

export default () => {
  return <Org rooms={rooms} />
}

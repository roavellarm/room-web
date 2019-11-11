import React from 'react'
import Dashboard from '../components/Dashboard'
import orgs from '../api/exampleData/orgs.json'

export default () => {
  return <Dashboard orgs={orgs} />
}

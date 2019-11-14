import React, { useState, useEffect } from 'react'
import Dashboard from '../components/Dashboard'
import { getUserOrgs } from '../api/org'

export default () => {
  const [list, setList] = useState([])

  useEffect(() => {
    getOrgs()
  }, [])

  const getOrgs = async () => {
    try {
      const { data } = await getUserOrgs()
      setList(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Dashboard
      orgs={list.map(org => {
        return org
      })}
    />
  )
}

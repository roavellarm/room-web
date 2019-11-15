import React, { useState, useEffect } from 'react'
import Dashboard from '../components/Dashboard'
import { getUserOrgs } from '../api/org'
import { saveData } from '../helpers/storage'

export default () => {
  const [list, setList] = useState([])

  useEffect(() => {
    getOrgs()
  }, [])

  const getOrgs = async () => {
    try {
      const response = await getUserOrgs()
      saveData(response.headers)
      setList(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return <Dashboard orgs={list.map(org => org)} />
}

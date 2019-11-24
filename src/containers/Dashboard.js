import React, { useState, useEffect } from 'react'
import Dashboard from '../components/Dashboard'
import { getUserOrgs } from '../api/org'
import { saveData } from '../helpers/storage'

export default () => {
  const [list, setList] = useState([])

  const getOrgs = async () => {
    try {
      const response = await getUserOrgs()
      setList(response.data)
      saveData(response.headers)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getOrgs()
  }, [])

  return <Dashboard orgs={list} />
}

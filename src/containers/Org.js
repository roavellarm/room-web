import React, { useEffect, useState } from 'react'
import { Org } from '../components'
import { getRoomsByOrg } from '../api/room'
import { saveData } from '../helpers/storage'

export default props => {
  const { id } = props.match.params
  const [list, setList] = useState([])

  const getRooms = async () => {
    try {
      const response = await getRoomsByOrg(id)
      setList(response.data.rooms)
      localStorage.setItem('orgName', response.data.name)
      saveData(response.headers)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRooms()
    // eslint-disable-next-line
  }, [])

  return <Org list={list} name={localStorage.getItem('orgName')} org_id={id} />
}

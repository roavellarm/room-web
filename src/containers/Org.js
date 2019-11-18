import React, { useEffect, useState } from 'react'
import { Org } from '../components'
import { getRoomsByOrg } from '../api/room'

export default props => {
  const { id } = props.match.params
  const [list, setList] = useState([])

  const getRooms = async () => {
    try {
      const response = await getRoomsByOrg(id)
      setList(response.data.rooms)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRooms()
  }, [])

  return <Org list={list} org_id={id} />
}

import React, { useEffect, useState } from 'react'
import { Org } from '../components'
import { getRoomsByOrg } from '../api/room'

export default props => {
  const { id } = props.match.params
  const [list, setList] = useState([])

  const getRooms = async () => {
    try {
      const response = await getRoomsByOrg(id)
      setList(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRooms()
  }, [getRooms])

  return <Org rooms={list} orgId={id} />
}

import React, { useEffect, useState } from 'react'
import { Org } from '../components'
import { getRoomsByOrg } from '../api/room'
import { saveData } from '../helpers/storage'
import { useStore } from '../core/store'

export default props => {
  const { id } = props.match.params
  const [list, setList] = useState([])
  const [memberList, setMemberList] = useState([])
  const { store, setStore } = useStore()

  const getRooms = async () => {
    try {
      const response = await getRoomsByOrg(id)
      if (!store.currentOrg) {
        setStore({
          currentOrgName: response.data.name,
          currentOrgCreator: response.data.user,
        })
      }
      setList(response.data.rooms)
      setMemberList(response.data.members)
      saveData(response.headers)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRooms()
    const interval = setInterval(() => getRooms(), 5000)

    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <Org
      getRooms={getRooms}
      list={list}
      memberList={memberList}
      name={store.currentOrgName}
      creator={store.currentOrgCreator}
      org_id={id}
    />
  )
}

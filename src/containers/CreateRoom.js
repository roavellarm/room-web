import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import CreateRoomComponent from '../components/CreateRoom'
import { createRoom } from '../api/room'
import { saveData } from '../helpers/storage'

export default withRouter(({ history, match }) => {
  const { org_id } = match.params
  const [fields, setFields] = useState({ org_id: +org_id })

  const onChangeField = e => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const onSubmit = async () => {
    try {
      const response = await createRoom(fields)
      if (response.status === 201) {
        alert('Register room with success')
        saveData(response.headers)
        history.push(`/org/${org_id}`)
      }
    } catch (error) {
      console.log(error)
      alert('Something went wrong...')
    }
  }

  return (
    <CreateRoomComponent
      fields={fields}
      onChangeField={onChangeField}
      onSubmit={onSubmit}
    />
  )
})

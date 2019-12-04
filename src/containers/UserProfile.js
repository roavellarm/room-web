import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import UserProfileComponent from '../components/UserProfile'
import { updateUserInfo } from '../api/user'
import { saveData } from '../helpers/storage'
import { saveUser } from '../helpers/handleUser'

export default withRouter(({ history }) => {
  const currentUser = localStorage.getItem('currentUser')
  const [fields, setFields] = useState(JSON.parse(currentUser))
  const { id } = JSON.parse(currentUser)

  const onChangeField = e => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const onSubmit = async () => {
    try {
      const response = await updateUserInfo(id, fields)
      if (response.status === 200) {
        alert('Data updated with success')
        saveData(response.headers)
        saveUser(response.data)
        history.push('/dashboard')
      }
    } catch (error) {
      console.log(error)
      alert('Something went wrong...')
    }
  }

  return (
    <UserProfileComponent
      fields={fields}
      onChangeField={onChangeField}
      onSubmit={onSubmit}
    />
  )
})

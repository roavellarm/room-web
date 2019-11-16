import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import CreateOrgComponent from '../components/CreateOrg'
import { createUserOrg } from '../api/org'
import { saveData } from '../helpers/storage'

export default withRouter(({ history }) => {
  const [fields, setFields] = useState({})

  const onChangeField = e => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const onSubmit = async () => {
    try {
      console.log(fields)
      const response = await createUserOrg(fields)
      if (response.status === 201) {
        saveData(response.headers)
        alert('Register organization with success')
        setFields({ name: '', description: '' })
        history.push('/dashboard')
      }
    } catch (error) {
      console.log(error)
      alert('Something went wrong...')
    }
  }

  return (
    <CreateOrgComponent
      fields={fields}
      onChangeField={onChangeField}
      onSubmit={onSubmit}
    />
  )
})

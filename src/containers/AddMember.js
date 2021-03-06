import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import AddMemberComponent from '../components/AddMember'
import { addNewMember } from '../api/org'
import { saveData } from '../helpers/storage'

export default withRouter(({ history, match }) => {
  const { org_id } = match.params

  const [fields, setFields] = useState({ org_id: +org_id })

  const onChangeField = e => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const onSubmit = async () => {
    try {
      const response = await addNewMember(org_id, fields)
      if (response.status === 200) {
        saveData(response.headers)
        alert('Register email with success')
        setFields({ email: '' })
        history.push(`/org/${org_id}`)
      }
    } catch (error) {
      const status = error.response.status
      if (status === 422 || status === 404) {
        saveData(error.response.headers)
        alert(error.response.data.errors.message)
        console.log(error.response.data.errors.message)
      } else {
        console.log(error)
        alert('Something went wrong...')
      }
    }
  }

  return (
    <>
      <AddMemberComponent
        fields={fields}
        onChangeField={onChangeField}
        onSubmit={onSubmit}
      />
    </>
  )
})

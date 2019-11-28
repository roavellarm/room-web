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
    debugger
    try {
      const response = await addNewMember(org_id, fields)
      if (response.status === 201) {
        alert('Register email with success')
        setFields({ email: '' })
        saveData(response.headers)
        history.push(`/org/${org_id}`)
      }
    } catch (error) {
      console.log(error)
      alert('Something went wrong...')
    }
  }

  return (
    <>
      {console.log(match.params)}
      <AddMemberComponent
        fields={fields}
        onChangeField={onChangeField}
        onSubmit={onSubmit}
      />
    </>
  )
})

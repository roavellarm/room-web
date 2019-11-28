import React from 'react'
import { Form } from './templates'

export default ({ fields, onChangeField, onSubmit }) => {
  const orgs = [
    {
      autoFocus: true,
      name: 'email',
      label: "Add the new member's email",
      type: 'email',
      field: fields.email,
    },
  ]

  return (
    <Form
      onChangeField={onChangeField}
      onSubmit={onSubmit}
      list={orgs}
      sectionTitle="Add Member"
      sectionSubtitle="Add the email"
      buttonTitle="Add member"
    />
  )
}

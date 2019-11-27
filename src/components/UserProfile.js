import React from 'react'
import { Form } from './templates'

export default ({ fields, onChangeField, onSubmit }) => {
  const userData = [
    {
      autoFocus: true,
      required: true,
      name: 'first_name',
      label: 'First name',
      field: fields.first_name,
    },
    {
      name: 'last_name',
      label: 'Last name',
      field: fields.last_name,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      field: fields.email,
    },
    {
      name: 'image',
      label: 'Avatar image',
      field: fields.image,
    },
    {
      name: 'mood',
      label: 'Current mood',
      field: fields.mood,
    },
  ]

  return (
    <Form
      onChangeField={onChangeField}
      onSubmit={onSubmit}
      list={userData}
      sectionTitle={'User Profile'}
      sectionSubtitle={'Update changes in your profile here'}
      buttonTitle="Save changes"
    />
  )
}

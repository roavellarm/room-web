import React from 'react'
import { Form } from './templates'

export default ({ fields, onChangeField, onSubmit }) => {
  const orgs = [
    {
      autoFocus: true,
      name: 'name',
      label: 'Name',
      field: fields.name,
    },
    {
      name: 'description',
      label: 'Description',
      field: fields.description,
      multiline: 'true',
      rows: 4,
    },
    {
      name: 'image',
      label: 'Image',
      field: fields.image,
    },
  ]

  return (
    <Form
      onChangeField={onChangeField}
      onSubmit={onSubmit}
      list={orgs}
      sectionTitle="Create Organization"
      sectionSubtitle="Start here creating your own organization"
      buttonTitle="Create Organization"
    />
  )
}

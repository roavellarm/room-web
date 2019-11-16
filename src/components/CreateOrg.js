import React from 'react'
import { Form } from './templates'

export default ({ fields, onChangeField, onSubmit }) => {
  const orgs = [
    {
      name: 'name',
      label: 'Name',
      field: fields.name,
      rows: 1,
    },
    {
      name: 'description',
      label: 'Description',
      field: fields.description,
      rows: 4,
    },
    {
      name: 'image',
      label: 'Image',
      field: fields.image,
      rows: 1,
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

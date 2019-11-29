import React from 'react'
import { Form } from './templates'

export default ({ fields, onChangeField, onSubmit }) => {
  const orgs = [
    {
      autoFocus: true,
      name: 'title',
      label: 'Title',
      field: fields.title,
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      field: fields.subtitle,
    },
    {
      name: 'background_image',
      label: 'Background Image URL',
      field: fields.background_image,
    },
    // {
    //   name: 'avatar_image',
    //   label: 'Avatar Image URL',
    //   field: fields.avatar_image,
    // },
  ]

  return (
    <Form
      onChangeField={onChangeField}
      onSubmit={onSubmit}
      list={orgs}
      sectionTitle="Create Room"
      sectionSubtitle="Create a room for your organization"
      buttonTitle="Create Room"
    />
  )
}

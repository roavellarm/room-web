import React from 'react'
import { Form } from './templates'

export default ({ fields, onChangeField, onSubmit }) => {
  const feedbacks = [
    {
      autoFocus: true,
      required: true,
      name: 'name',
      label: 'Name',
      field: fields.name,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      field: fields.email,
    },
    {
      name: 'positives',
      label: 'Positives feedbacks',
      field: fields.positives,
      multiline: true,
      rows: 4,
    },
    {
      name: 'negatives',
      label: 'Negatives feedbacks',
      field: fields.negatives,
      multiline: true,
      rows: 4,
    },
  ]

  return (
    <Form
      onChangeField={onChangeField}
      onSubmit={onSubmit}
      list={feedbacks}
      sectionTitle={'Feedback'}
      sectionSubtitle={'Please, share your experience using this MVP website'}
      buttonTitle="Send feedback"
    />
  )
}

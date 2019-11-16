import React from 'react'
import { Form } from './templates'

export default ({ fields, onChangeField, onSubmit }) => {
  const feedbacks = [
    {
      name: 'name',
      label: 'Name',
      field: fields.name,
      rows: 1,
    },
    {
      name: 'email',
      label: 'Email',
      field: fields.email,
      rows: 1,
    },
    {
      name: 'positives',
      label: 'Positives',
      field: fields.positives,
      rows: 4,
    },
    {
      name: 'negatives',
      label: 'Negatives',
      field: fields.negatives,
      rows: 4,
    },
  ]

  return (
    <Form
      onChangeField={onChangeField}
      onSubmit={onSubmit}
      list={feedbacks}
      sectionTitle={'Feedback'}
      sectionSubtitle={'Please, share your experience using this app'}
      buttonTitle="Send feedback"
    />
  )
}

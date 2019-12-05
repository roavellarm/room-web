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
      label: 'Your avatar image URL',
      field: fields.image,
    },
    {
      name: 'mood',
      label: 'Current mood',
      field: fields.mood,
      type: 'select',
      options: [
        {
          value: 'available',
          text: 'Available',
        },
        {
          value: 'busy',
          text: 'Busy',
        },
        {
          value: 'on_call',
          text: 'In a call',
        },
      ],
    },
    {
      name: 'mood',
      label: 'Current mood',
      field: fields.mood,
      type: 'select',
      options: [
        {
          value: 'Very dissatisfied',
          text: 'Very dissatisfied',
        },
        {
          value: 'Very bad',
          text: 'Very bad',
        },
        {
          value: 'Bad',
          text: 'Bad',
        },
        {
          value: 'Dissatisfied',
          text: 'Dissatisfied',
        },
        {
          value: 'Satisfied',
          text: 'Satisfied',
        },
        {
          value: 'Happy',
          text: 'Happy',
        },
        {
          value: 'Very happy',
          text: 'Very happy',
        },
        {
          value: 'Very satisfied',
          text: 'Very satisfied',
        },
      ],
    },
  ]

  return (
    <>
      <Form
        onChangeField={onChangeField}
        onSubmit={onSubmit}
        list={userData}
        sectionTitle={'User Profile'}
        sectionSubtitle={'Update changes in your profile here'}
        buttonTitle="Save changes"
      />
    </>
  )
}

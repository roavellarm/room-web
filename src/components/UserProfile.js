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
      name: 'status',
      label: 'Current status',
      field: fields.status,
      type: 'select',
      options: [
        {
          value: { status: 'available' },
          text: 'Available',
        },
        {
          value: { status: 'busy' },
          text: 'Busy',
        },
        {
          value: { status: 'on_call' },
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
          value: { name: 'Very dissatisfied' },
          text: 'Very dissatisfied',
        },
        {
          value: { name: 'Very bad' },
          text: 'Very bad',
        },
        {
          value: { name: 'Bad' },
          text: 'Bad',
        },
        {
          value: { name: 'Dissatisfied' },
          text: 'Dissatisfied',
        },
        {
          value: { name: 'Satisfied' },
          text: 'Satisfied',
        },
        {
          value: { name: 'Happy' },
          text: 'Happy',
        },
        {
          value: { name: 'Very happy' },
          text: 'Very happy',
        },
        {
          value: { name: 'Very satisfied' },
          text: 'Very satisfied',
        },
      ],
    },
  ]

  return (
    <>
      {console.log(userData)}
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

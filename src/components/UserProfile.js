import React from 'react'
import { Form } from './templates'
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined'
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined'
import MoodBadOutlinedIcon from '@material-ui/icons/MoodBadOutlined'
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
import SentimentVeryDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentVeryDissatisfiedOutlined'
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied'

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
          value: '0',
          text: <SentimentVeryDissatisfiedOutlinedIcon fontSize="large" />,
        },
        {
          value: '1',
          text: <MoodBadOutlinedIcon fontSize="large" />,
        },
        {
          value: '2',
          text: <SentimentDissatisfiedOutlinedIcon fontSize="large" />,
        },
        {
          value: '3',
          text: <SentimentDissatisfiedIcon fontSize="large" />,
        },
        {
          value: '4',
          text: <SentimentSatisfiedIcon fontSize="large" />,
        },
        {
          value: '5',
          text: <SentimentSatisfiedOutlinedIcon fontSize="large" />,
        },
        {
          value: '6',
          text: <EmojiEmotionsOutlinedIcon fontSize="large" />,
        },
        {
          value: '7',
          text: <SentimentVerySatisfiedOutlinedIcon fontSize="large" />,
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

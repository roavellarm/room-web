import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import FeedbackComponent from '../components/Feedback'
import { sendFeedback } from '../api/feedback'
import onChangeField from './shared/onChangeField'

export default withRouter(({ history }) => {
  const [fields, setFields] = useState({})

  const onSubmit = async () => {
    try {
      const response = await sendFeedback(fields)
      if (response.status === 201) {
        alert('Register feedback with success')
        setFields({ name: '', email: '', positives: '', negatives: '' })
      }
    } catch (error) {
      console.log(error)
      alert('Something went wrong...')
    }
  }

  return (
    <FeedbackComponent
      fields={fields}
      onChangeField={onChangeField(fields, setFields)}
      onSubmit={onSubmit}
    />
  )
})

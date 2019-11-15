import React from 'react'
import { Button, Layout, HeroSection } from './templates'
import { Container } from '@material-ui/core'
import { TextField } from './templates'

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
    <Layout
      content={
        <>
          <HeroSection
            title={'Feedback'}
            subtitle={'Please, share your experience using this app'}
          />
          <Container align="left" component="main" maxWidth="xs">
            {feedbacks.map(feedback => (
              <TextField
                key={feedback.name}
                id={feedback.name}
                name={feedback.name}
                value={feedback.field}
                label={feedback.label}
                onChange={onChangeField}
                rows={feedback.rows}
              />
            ))}
            <Button onClick={() => onSubmit()}>Send feedback</Button>
          </Container>
        </>
      }
    />
  )
}

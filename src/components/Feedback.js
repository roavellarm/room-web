import React from 'react'
import { Button, Layout, HeroSection } from './templates'
import { Container, TextField } from '@material-ui/core'

export default function Feedback({
  fields,
  onChangeField,
  onSubmit,
  onKeyDown,
}) {
  return (
    <Layout
      content={
        <>
          <HeroSection
            title={'Feedback'}
            subtitle={'Please, share your experience using this app'}
          />
          <Container align="left" component="main" maxWidth="xs">
            <TextField
              variant="outlined"
              id="name"
              name="name"
              value={fields.name}
              label="Name"
              fullWidth
              margin="normal"
              onChange={onChangeField}
              onKeyDown={onKeyDown}
            />
            <TextField
              id="email"
              name="email"
              value={fields.email}
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              onChange={onChangeField}
              onKeyDown={onKeyDown}
            />
            <TextField
              id="positives"
              name="positives"
              value={fields.positives}
              label="Positives"
              fullWidth
              multiline
              variant="outlined"
              rows="4"
              margin="normal"
              onChange={onChangeField}
              onKeyDown={onKeyDown}
            />
            <TextField
              id="negatives"
              name="negatives"
              value={fields.negatives}
              label="Negatives"
              fullWidth
              multiline
              variant="outlined"
              rows="4"
              margin="normal"
              onChange={onChangeField}
              onKeyDown={onKeyDown}
            />
            <Button onClick={() => onSubmit()}>Send feedback</Button>
          </Container>
        </>
      }
    />
  )
}

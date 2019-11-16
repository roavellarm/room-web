import React from 'react'
import { Button, Layout, HeroSection } from './templates'
import { Container } from '@material-ui/core'
import { TextField } from './templates'

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
    <Layout
      content={
        <>
          <HeroSection
            title={'Create Organization'}
            subtitle={'Start here creating your own organization'}
          />
          <Container align="left" component="main" maxWidth="xs">
            {orgs.map(org => (
              <TextField
                key={org.name}
                id={org.name}
                name={org.name}
                value={org.field}
                label={org.label}
                onChange={onChangeField}
                rows={org.rows}
              />
            ))}
            <Button onClick={() => onSubmit()}>Create Organization</Button>
          </Container>
        </>
      }
    />
  )
}

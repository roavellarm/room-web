import React from 'react'
import { Button, Layout, HeroSection, TextField } from './'
import { Container } from '@material-ui/core'

export default ({
  list,
  onChangeField,
  onSubmit,
  sectionTitle,
  sectionSubtitle,
  buttonTitle,
}) => {
  return (
    <Layout
      content={
        <>
          <HeroSection title={sectionTitle} subtitle={sectionSubtitle} />
          <Container align="left" component="main" maxWidth="xs">
            {list.map(item => (
              <TextField
                key={item.name}
                id={item.name}
                name={item.name}
                value={item.field}
                label={item.label}
                onChange={onChangeField}
                rows={item.rows}
              />
            ))}
            <Button onClick={() => onSubmit()}>{buttonTitle}</Button>
          </Container>
        </>
      }
    />
  )
}

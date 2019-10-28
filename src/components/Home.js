import React from 'react'
import { Button, TextField } from './'

export default ({ fields, onChangeField, onSubmit }) => {
  return (
    <div>
      HOME
      <TextField
        label="Name"
        name="firstName"
        value={fields.firstName}
        onChange={onChangeField}
      />
      {/* <TextField
        label="Sobrenome"
        value={fields.lastName}
        onChange={event =>
          setFields({ ...fields, lastName: event.target.value })
        }
      /> */}
      <TextField
        label="Age"
        name="age"
        value={fields.age}
        onChange={onChangeField}
      />
      <Button onClick={() => onSubmit()}>Save</Button>
    </div>
  )
}

import React from 'react'
import { Button, TextField } from './'

export default ({ fields, onChangeField, onSubmit }) => {
  return (
    <div>
      HOME
      <TextField
        label="Nome"
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
        label="Idade"
        name="age"
        value={fields.age}
        onChange={onChangeField}
      />
      <Button onClick={() => onSubmit()}>Salvar</Button>
    </div>
  )
}

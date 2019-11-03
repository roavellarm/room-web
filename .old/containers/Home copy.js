import React, { useState } from 'react'
import Home from '../../src/components/Home'

export default () => {
  // a primeira posição do array vai ter um valor que é inicializado dentro do useState
  // a segunda posição é uma função que vai ATUALIZAR o valor
  // evitar usar var ou let, pois o const é mais leve
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    age: 0
  })

  const onSubmit = () => {
    alert(JSON.stringify(fields))
  }

  const onChangeField = e => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  return (
    <Home fields={fields} onSubmit={onSubmit} onChangeField={onChangeField} />
  )
}

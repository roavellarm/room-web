import React from 'react'
import { Button } from './'

export default ({ showMessage }) => {
  return (
    <>
      <h1>Me contacte aí</h1>
      <Button onClick={() => showMessage()}>Mostrar mensagem</Button>
    </>
  )
}

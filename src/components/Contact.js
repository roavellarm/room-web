import React from 'react'
import { Button } from './'

export default ({ showMessage }) => {
  return (
    <>
      <h1>Contact me!</h1>
      <Button onClick={() => showMessage()}>Show message</Button>
    </>
  )
}

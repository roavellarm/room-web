import React from 'react'
import { Button, Layout } from './templates'

export default ({ showMessage }) => {
  const content = <Button onClick={() => showMessage()}>Show message</Button>

  return <Layout title={'Contact'} content={content} />
}

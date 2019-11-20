import React from 'react'
import { Layout, CallFrame } from './templates'

export default ({ token }) => {
  return (
    <Layout>
      <CallFrame token={token} />
    </Layout>
  )
}

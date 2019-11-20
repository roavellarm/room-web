import React from 'react'
import { Call } from '../components'

export default props => {
  const { token } = props.match.params
  return <Call token={token} />
}

import React from 'react'
import Avatar from '../templates/Avatar'

export default ({ status, tooltip, image }) => {
  console.log(`!!!!!!Aqui o status no userIcon: ${status}`)
  const statusType = {
    onCall: 'on_call',
    available: 'available',
    busy: 'busy',
  }
  const getStatus = () => {
    if (status === statusType.onCall) return ' #ffa31a'
    if (status === statusType.available) return '#00FF17'
    if (status === statusType.busy) return 'error.main'
  }

  return (
    <Avatar name="icon" status={getStatus()} tooltip={tooltip} img={image} />
  )
}

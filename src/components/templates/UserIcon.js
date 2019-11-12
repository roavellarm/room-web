import React from 'react'

export default ({ status }) => {
  const statusType = {
    onCall: 'onCall',
    available: 'available',
    busy: 'busy',
  }
  const getIcon = () => {
    if (status === statusType.onCall)
      return require('../../assets/images/icons/call.png')

    if (status === statusType.available)
      return require('../../assets/images/icons/available.png')

    if (status === statusType.busy)
      return require('../../assets/images/icons/busy.png')
  }

  return <img alt="icon" height="55px" src={getIcon()} />
}

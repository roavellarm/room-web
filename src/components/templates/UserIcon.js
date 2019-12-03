import React from 'react'
import Avatar from '../templates/Avatar'

export default ({ status, tooltip, image }) => {
  // const statusType = {
  //   onCall: 'onCall',
  //   available: 'available',
  //   busy: 'busy',
  // }
  // const getIcon = () => {
  //   if (status === statusType.onCall)
  //     return require('../../assets/images/icons/call.png')

  //   if (status === statusType.available)
  //     return require('../../assets/images/icons/available.png')

  //   if (status === statusType.busy)
  //     return require('../../assets/images/icons/busy.png')
  // }

  return <Avatar name="icon" tooltip={tooltip} img={image} />
}

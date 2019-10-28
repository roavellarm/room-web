import React from 'react'
import Contact from '../components/Contact'

export default () => {
  const showMessage = () => {
    alert('Hi!!!')
  }
  return <Contact showMessage={showMessage} />
}

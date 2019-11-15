import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import SignInComponent from '../components/SignIn'
import { signIn } from '../api/auth'
import { useStore } from '../core/store'
import { saveData } from '../helpers/storage'

export default withRouter(({ history }) => {
  const { setStore } = useStore()

  const [fields, setFields] = useState({ email: '', password: '' })
  function onChangeField(e) {
    return setFields({ ...fields, [e.target.name]: e.target.value })
  }

  function onKeyDown({ keyCode }) {
    if (keyCode === 13) return onSubmit()
  }

  function cleanFields() {
    setFields({ email: '', password: '' })
  }

  const onSubmit = async () => {
    try {
      const response = await signIn(fields)
      if (response.status === 200) {
        setStore({ isAuthenticated: true })
        saveData(response.headers)
        // Clean user data from the fields after submit
        localStorage.setItem('isAuthenticated', true)
        cleanFields()
        // debugger
        history.push('/dashboard')
      }
    } catch (error) {
      console.log(error)
      // Clean password field if something went wrong
      cleanFields()
      alert('Something went wrong...')
    }
  }
  return (
    <SignInComponent
      fields={fields}
      onChangeField={onChangeField}
      onSubmit={onSubmit}
      onKeyDown={onKeyDown}
    />
  )
})

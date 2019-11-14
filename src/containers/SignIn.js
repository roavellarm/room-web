import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import SignInComponent from '../components/SignIn'
import { signIn } from '../api/auth'
import { useStore } from '../core/store'
import { saveData } from '../helpers/storage'

export default withRouter(({ history }) => {
  const { setStore } = useStore()

  const [fields, setFields] = useState({ email: '', password: '' })
  const onChangeField = e => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const onKeyDown = ({ keyCode }) => {
    if (keyCode === 13) return onSubmit()
  }

  const onSubmit = async () => {
    const cleanFields = () => {
      setFields({ email: '', password: '' })
    }
    try {
      const response = await signIn(fields)
      if (response.status === 200) {
        setStore({ isAuthenticated: true })
        // Clean user data from the fields after submit
        cleanFields()
        localStorage.setItem('isAuthenticated', true)
        saveData(response.headers)
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

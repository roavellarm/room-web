import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useStore } from '../core/store'
import SignUp from '../components/SignUp'
import { signUp } from '../api/auth'
import onChangeField from './shared/onChangeField'

export default withRouter(({ history }) => {
  const { setStore } = useStore()

  const [fields, setFields] = useState({})

  const onSubmit = async () => {
    try {
      if (fields.password !== fields.passwordConfirmation) {
        return alert("Password doesn't match")
      }
      const response = await signUp(fields)

      if (response.status === 200) {
        alert('Register with success')
        setStore({ isAuthenticated: true })
        // Clean user data after register
        setFields({ email: '', password: '' })
        localStorage.setItem('isAuthenticated', true)
        history.push('/')
      }
    } catch (error) {
      console.log(error)
      setFields({ ...fields, password: '', passwordConfirmation: '' })
      alert('Something went wrong...')
    }
  }

  return (
    <SignUp
      fields={fields}
      onChangeField={onChangeField(fields, setFields)}
      onSubmit={onSubmit}
    />
  )
})

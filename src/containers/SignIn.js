import React, { useState } from 'react'
import SignInComponent from '../components/SignIn'
// import * as authApi from '../api/auth'
import { signIn } from '../api/auth'
import { useStore } from '../core/store'
import { withRouter } from 'react-router-dom'

const SignIn = ({ history }) => {
  const { setStore } = useStore()

  const [fields, setFields] = useState({ email: '', password: '' })
  const onChangeField = e => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const onSignIn = async () => {
    try {
      const response = await signIn(fields)
      if ((response.status = 200)) {
        setStore({ isAuthenticated: true })
        // limpar os dados do user depois
        setFields({ email: '', password: '' })
        localStorage.setItem('isAuthenticated', true)
        history.push('/')
      }
    } catch (error) {
      console.log(error)
      // limpar a senha caso der errado
      setFields({ ...fields, password: '' })
      alert('Something went wrong...')
    }
  }
  return (
    <SignInComponent
      fields={fields}
      onChangeField={onChangeField}
      onSignIn={onSignIn}
    />
  )
}

export default withRouter(SignIn)

import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import SignInComponent from '../components/SignIn'
import { signIn } from '../api/auth'
import { useStore } from '../core/store'
import { saveData } from '../helpers/storage'
import { saveUser } from '../helpers/handleUser'

export default withRouter(({ history }) => {
  const { store, setStore } = useStore()

  const [fields, setFields] = useState({ email: '', password: '' })
  function onChangeField(e) {
    return setFields({ ...fields, [e.target.name]: e.target.value })
  }

  function onKeyDown({ keyCode }) {
    if (keyCode === 13) return onSubmit()
  }

  const onSubmit = async () => {
    const cleanFields = () => setFields({ ...fields, password: '' })

    try {
      setStore({ isSubmitting: true })
      const response = await signIn(fields)
      if (response.status === 200) {
        localStorage.setItem('isAuthenticated', true)
        saveData(response.headers)
        saveUser(response.data.data)
        setStore({
          isSubmitting: false,
          isAuthenticated: true,
          currentUser: response.data.data,
        })
        // Clean user data from the fields after submit
        history.push('/dashboard')
      }
    } catch (error) {
      setStore({ isSubmitting: false })
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
      isSubmitting={store.isSubmitting}
    />
  )
})

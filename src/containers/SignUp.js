import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useStore } from '../core/store'
import SignUp from '../components/SignUp'
import { signUp } from '../api/auth'
import { saveData } from '../helpers/storage'
import { saveUser } from '../helpers/handleUser'

export default withRouter(({ history }) => {
  const { store, setStore } = useStore()

  const [fields, setFields] = useState({})

  const onChangeField = e => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const onKeyDown = ({ keyCode }) => {
    if (keyCode === 13) return onSubmit()
  }

  const cleanFields = () =>
    setFields({ ...fields, password: '', passwordConfirmation: '' })

  const onSubmit = async () => {
    try {
      setStore({ isSubmitting: false })
      if (fields.password !== fields.passwordConfirmation) {
        return alert("Password doesn't match")
      }
      const response = await signUp(fields)

      if (response.status === 200) {
        saveData(response.headers)
        alert('Register with success')
        localStorage.setItem('isAuthenticated', true)
        saveUser(response.data.data)
        setStore({
          isSubmitting: false,
          isAuthenticated: true,
          currentUser: response.data.data,
        })

        history.push('/dashboard')
      }
    } catch (error) {
      setStore({ isSubmitting: false })
      console.log(error)
      cleanFields()
      alert('Something went wrong...')
    }
  }

  return (
    <SignUp
      fields={fields}
      onChangeField={onChangeField}
      onSubmit={onSubmit}
      onKeyDown={onKeyDown}
      isSubmitting={store.isSubmitting}
    />
  )
})

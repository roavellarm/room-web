import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useStore } from '../core/store'
import SignUp from '../components/SignUp'
import { signUp } from '../api/auth'

// Criar endpoints na camada de api (axios)         ok
// importar react                                   ok
// criar um export default                          ok
// colocar return null                              ok
// importar useState                                 ok
/* criar todas as possiveis coisas relacionadas ao useState
{

}
*/

// Pensar quais funções vou utilizar
// Precisaria pelo menos um onChange pq tem pelo menos um campom de texto
// Criaria um OnSubmit pq tem pelo menos um no signUp
// Começaria a montar o componente (visual)

export default withRouter(({ history }) => {
  const { setStore } = useStore()

  const [fields, setFields] = useState({})
  const onChangeField = e => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const onSubmit = async () => {
    try {
      if (fields.password !== fields.passwordConfirmation) {
        return alert("Password doesn't match")
      }
      const response = await signUp(fields)

      if (response.status === 200) {
        alert('Register with success')
        setStore({ isAuthenticated: true })
        // limpar os dados do user depois
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
    <SignUp fields={fields} onChangeField={onChangeField} onSubmit={onSubmit} />
  )
})

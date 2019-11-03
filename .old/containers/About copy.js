import React, { useState, useEffect } from 'react'
import * as requestsApi from '../../src/api/requests'

export default () => {
  const [list, setList] = useState([])

  // O useEffect garante que será chamado pelo menos uma vez o que estiver
  // dentro da função ou toda vez que o array for alterado
  useEffect(() => {
    getAllGithubUsers()
  }, [])

  const getAllGithubUsers = async () => {
    try {
      const { data } = await requestsApi.getAll()
      setList(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      ABOUT
      <div>
        {list.map(user => {
          return <p>{user.login}</p>
        })}
      </div>
    </div>
  )
}

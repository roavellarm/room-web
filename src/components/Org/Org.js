import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Layout, Button, HeroSection } from '../templates'
import { Grid } from '@material-ui/core'
import SocketIOClient from 'socket.io-client'
import { RoomsGrid, Chat } from '.'
import { useStore } from '../../core/store'
import { enterInRoom } from '../../api/user'
import { getMessages } from '../../api/chat'

export default withRouter(({ list, name, org_id }) => {
  const [socket, setSocket] = useState(undefined)
  const [currentChat, setCurrentChat] = useState(false)
  const [chatMessages, setChatMesages] = useState([])
  const { store } = useStore()

  const { userId } = store

  const manipulateSocket = () => {
    // socket.on('enterRoom', listener => {
    //   console.log(listener)
    // })
    // socket.on('enterChat', listener => {
    //   console.log(listener)
    // })
  }

  useEffect(() => {
    if (!socket) {
      const url = process.env.REACT_APP_API_URL
      const socketClient = new SocketIOClient(url)
      setSocket(socketClient)
    } else {
      manipulateSocket()
    }
  }, [socket])

  const onEnterInRoom = async roomId => {
    try {
      // const { userId } = store
      // const response = await enterInRoom(userId, roomId)
      alert(`Entrando na sala ${roomId}`)
      // socket.emit('enterRoom', { user_id: userId })
    } catch (error) {
      alert('Erro ao entrar na sala')
    }
  }

  const onEnterInChat = async ({ id, title }) => {
    try {
      // const response = await getMessages(userId, id)
      const response = {
        messages: [
          {
            user_id: 3,
            user_name: 'Rodrigo',
            message: 'batata batata batata batata batata batata ',
          },
          {
            user_id: 2,
            user_name: 'Gabriel',
            message: 'batata 2',
          },
          {
            user_id: 2,
            user_name: 'Gabriel',
            message: 'batata 3',
          },
        ],
      }
      setChatMesages(response.messages)
      setCurrentChat({ id, title })
      // socket.emit('enterChat', { user_id: userId })
    } catch (error) {
      alert('Erro ao entrar no chat')
    }
  }

  const onSendMessage = async message => {
    try {
      alert(message)
      // const response = await sendMessage(userId, message)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      {!!currentChat ? (
        <Chat
          chatMessages={chatMessages}
          currentChat={currentChat}
          userId={userId}
          onSendMessage={onSendMessage}
        />
      ) : (
        <>
          <HeroSection title={name} />
          <RoomsGrid
            onEnterInRoom={onEnterInRoom}
            onEnterInChat={onEnterInChat}
            list={list}
          />
          <Grid container>
            <Link
              to={`/create-room/${org_id}`}
              style={{ textDecoration: 'none' }}
            >
              <Button>Create new room</Button>
            </Link>
          </Grid>
        </>
      )}
    </Layout>
  )
})

import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Layout, Button, HeroSection } from '../templates'
import { Grid } from '@material-ui/core'
// import SocketIOClient from 'socket.io-client'
import { RoomsGrid, Chat } from '.'
import { useStore } from '../../core/store'
// import { enterInRoom } from '../../api/user'
import { sendMessage, getMessages } from '../../api/chat'

export default withRouter(({ list, name, org_id, getRooms }) => {
  const { store } = useStore()
  // const [socket, setSocket] = useState(undefined)
  const [currentChat, setCurrentChat] = useState(false)
  const [chatMessages, setChatMesages] = useState([])

  // const manipulateSocket = () => {
  // socket.on('enterRoom', listener => {
  //   console.log(listener)
  // })
  // socket.on('enterChat', listener => {
  //   console.log(listener)
  // })
  // }

  // useEffect(() => {
  //   if (!socket) {
  //     const url = process.env.REACT_APP_API_URL
  //     const socketClient = new SocketIOClient(url)
  //     setSocket(socketClient)
  //   } else {
  //     manipulateSocket()
  //   }
  // }, [socket])

  const onGetRoomsInfo = async orgId => {
    getRooms()
  }

  const scrollToBottom = () => window.scrollTo(0, document.body.scrollHeight)

  const onGetMessages = async roomId => {
    try {
      const response = await getMessages(roomId)
      setChatMesages(response.data)
      scrollToBottom()
      // socket.emit('enterChat', { user_id: userId })
    } catch (error) {
      // alert('Erro ao entrar no chat')
    }
  }

  useEffect(() => {
    if (currentChat.id) {
      onGetMessages(currentChat.id)
    }
  }, [])

  useEffect(() => {
    onGetRoomsInfo(org_id)
  }, [])

  const onEnterInRoom = async roomId => {
    try {
      // const response = await enterInRoom(roomId)
      alert(`Entrando na sala ${roomId}`)
      onGetRoomsInfo()
      // socket.emit('enterRoom', { user_id: userId })
    } catch (error) {
      alert('Erro ao entrar na sala')
    }
  }

  const onEnterInChat = async ({ id, title }) => {
    await onGetMessages(id)
    setCurrentChat({ id, title })
  }

  const onSendMessage = async message => {
    try {
      await sendMessage(currentChat.id, message)
      await onGetMessages(currentChat.id)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      {!!currentChat ? (
        <Chat
          currentUser={store.currentUser}
          chatMessages={chatMessages}
          currentChat={currentChat}
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

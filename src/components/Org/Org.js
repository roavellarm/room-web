import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, HeroSection } from '../templates'
// import SocketIOClient from 'socket.io-client'
import { RoomsGrid, Chat, LinksBar, WithoutRoom } from '.'
import { useStore } from '../../core/store'
import { enterInRoom } from '../../api/user'
import { sendMessage, getMessages } from '../../api/chat'
import { saveData } from '../../helpers/storage'

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
      saveData(response.headers)
      scrollToBottom()
      // socket.emit('enterChat', { user_id: userId })
    } catch (error) {
      alert('Erro ao entrar no chat')
    }
  }

  useEffect(() => {
    if (currentChat.id) {
      setInterval(onGetMessages(currentChat.id), 5000)
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    onGetRoomsInfo(org_id)
    // eslint-disable-next-line
  }, [])

  const onEnterInRoom = async roomId => {
    try {
      const response = await enterInRoom(roomId)
      saveData(response.headers)
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
      const response = await sendMessage(currentChat.id, message)
      saveData(response.headers)
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
          currentOrg={name}
          currentChat={currentChat}
          setCurrentChat={setCurrentChat}
          onSendMessage={onSendMessage}
        />
      ) : (
        <>
          <HeroSection title={name} />
          {!list.length ? (
            <WithoutRoom orgName={name} />
          ) : (
            <RoomsGrid
              onEnterInRoom={onEnterInRoom}
              onEnterInChat={onEnterInChat}
              list={list}
            />
          )}
          <LinksBar org_id={org_id} />
        </>
      )}
    </Layout>
  )
})

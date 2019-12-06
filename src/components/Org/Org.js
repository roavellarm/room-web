import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Layout, HeroSection } from '../templates'
// import SocketIOClient from 'socket.io-client'
import { RoomsGrid, Chat, LinksBar, WithoutRoom, OrgMembers } from '.'
import { useStore } from '../../core/store'
import { enterInRoom } from '../../api/user'
import { sendMessage, getMessages } from '../../api/chat'
import { saveData } from '../../helpers/storage'

export default withRouter(
  ({ list, name, org_id, getRooms, memberList, creator }) => {
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

    const scrollToBottom = () => window.scrollTo(0, document.body.scrollHeight)

    const onGetMessages = async (roomId, canScrollToBottom) => {
      try {
        const response = await getMessages(roomId)
        setChatMesages(response.data)
        saveData(response.headers)
        if (canScrollToBottom) scrollToBottom()
        // socket.emit('enterChat', { user_id: userId })
      } catch (error) {
        console.log('Erro ao entrar no chat')
      }
    }

    const onEnterInRoom = async roomId => {
      try {
        const response = await enterInRoom(roomId)
        saveData(response.headers)
        getRooms()
        // socket.emit('enterRoom', { user_id: userId })
      } catch (error) {
        console.log(`Error entering room: ${error}`)
      }
    }

    const onEnterInChat = async ({ id, title }) => {
      await onGetMessages(id, false)
      setCurrentChat({ id, title })
    }

    const onSendMessage = async message => {
      try {
        const response = await sendMessage(currentChat.id, message)
        saveData(response.headers)
        await onGetMessages(currentChat.id, true)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      const interval = !!currentChat
        ? setInterval(() => onGetMessages(currentChat.id), 5000)
        : undefined

      if (!currentChat) clearInterval(interval)

      return () => {
        clearInterval(interval)
      }
      // eslint-disable-next-line
    }, [currentChat])

    useEffect(() => {
      const interval = setInterval(() => getRooms(), 5000)

      if (currentChat) clearInterval(interval)

      return () => clearInterval(interval)
      // eslint-disable-next-line
    }, [currentChat])

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
            <Link to={`/dashboard`} style={{ textDecoration: 'none' }}>
              <HeroSection title={name} subtitle={'Back to Dashboard'} />
            </Link>
            {list && list.length ? (
              <RoomsGrid
                onEnterInRoom={onEnterInRoom}
                onEnterInChat={onEnterInChat}
                list={list}
              />
            ) : (
              <WithoutRoom orgName={name} />
            )}

            <OrgMembers creator={creator} memberList={memberList} />
            <LinksBar org_id={org_id} />
          </>
        )}
      </Layout>
    )
  },
)

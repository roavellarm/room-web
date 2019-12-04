import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Row, HeroSection } from '../components/templates'
import { sendMessage, getMessages } from '../api/chat'
import { getRoomsByOrg } from '../api/room'

const StyledMessagesContainer = styled.div``

const StyledMessage = styled.div`
  background: ${({ isUser }) => (isUser ? '#3f51b5' : 'silver')};
  color: ${({ isUser }) => (isUser ? '#FAFAFA' : 'black')};
  text-align: ${({ isUser }) => (isUser ? 'right' : 'left')};
  float: ${({ isUser }) => (isUser ? 'right' : 'left')};
  padding: 10px;
  border-radius: 10px 0 10px 0;
  margin: 3px 10px;
  min-width: 100px;
  letter-spacing: 1px;
`

const StyledTextField = styled.input`
  width: 100%;
  font-size: 1.3em;
`

const StyledButton = styled.button`
  background: #3f51b5;
  color: #fafafa;
  width: 100px;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 1.1em;
  border: none;
`

const StyledFieldArea = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 50px;
`

const HoverText = styled.div`
  :hover {
    cursor: pointer;
  }
`

function Chat({ currentOrg, currentUser, match }) {
  const [message, setMessage] = useState(undefined)
  const [chatMessages, setChatMessages] = useState([])
  const [title, setTitle] = useState(undefined)
  const { orgId, roomId } = match.params

  const onSendMessage = async () => {
    try {
      await sendMessage(roomId, message)
      setMessage('')
    } catch (error) {
      console.log(error)
    }
  }

  const onGetOrgInfo = async () => {
    try {
      const response = await getRoomsByOrg(orgId)
      setTitle(response.data.name)
    } catch (error) {
      console.log(error)
    }
  }

  const onGetMessages = async () => {
    try {
      const response = await getMessages(+roomId)
      setChatMessages(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    onGetOrgInfo()
    const interval = setInterval(() => onGetMessages(), 5000)

    return () => clearInterval(interval)
    // eslint-disable-next-line
  }, [])

  const getUserEmail = () => currentUser.email

  return (
    <StyledMessagesContainer>
      <Link to={`/org/${orgId}`}>
        <HoverText>
          <HeroSection title={`${title} - Chat`} subtitle={currentOrg} />
        </HoverText>
      </Link>
      {chatMessages.map(m => (
        <Row key={m.user_email}>
          <StyledMessage isUser={getUserEmail() === m.user_email}>
            <strong>
              <div>{m.user_name}</div>
            </strong>
            <div>{m.message}</div>
          </StyledMessage>
        </Row>
      ))}
      <StyledFieldArea>
        <StyledTextField
          value={message}
          onKeyDown={({ keyCode }) =>
            keyCode === 13 ? onSendMessage() : undefined
          }
          onChange={({ target }) => setMessage(target.value)}
        />
        <StyledButton onClick={() => onSendMessage()}>Send</StyledButton>
      </StyledFieldArea>
    </StyledMessagesContainer>
  )
}

export default Chat

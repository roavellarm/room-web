import React, { useState } from 'react'
import styled from 'styled-components'
import { Row, HeroSection } from '../templates'

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

function Chat({
  currentChat,
  setCurrentChat,
  currentOrg,
  chatMessages,
  onSendMessage,
  currentUser,
}) {
  const [message, setMessage] = useState(undefined)
  const { title } = currentChat

  const _onSendMessage = () => {
    onSendMessage(message)
    setMessage('')
  }

  const getUserEmail = () => currentUser.email

  return (
    <StyledMessagesContainer>
      <div onClick={() => setCurrentChat(undefined)}>
        <HeroSection title={title + ' chat'} subtitle={currentOrg} />
      </div>
      {chatMessages.map(m => (
        <Row>
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
            keyCode === 13 ? _onSendMessage() : undefined
          }
          onChange={({ target }) => setMessage(target.value)}
        />
        <StyledButton onClick={() => _onSendMessage()}>Send</StyledButton>
      </StyledFieldArea>
    </StyledMessagesContainer>
  )
}

export default Chat

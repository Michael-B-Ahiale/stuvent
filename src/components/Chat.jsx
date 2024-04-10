import React from 'react'
import Messages from './Messages'
import Input from './Input'
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>John Doe</span>
        <div className="chatIcons">

        </div>
        
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat

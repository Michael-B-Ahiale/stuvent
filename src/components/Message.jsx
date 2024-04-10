import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageinfo">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww" alt="" />
        <span>just now</span>
      </div>
      <div className="messagecontent">
        <p>hello</p>
        {/*<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww" alt="" />*/}
      </div>
    </div>
  )
}

export default Message

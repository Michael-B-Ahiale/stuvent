import React from 'react'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='type something' />
      <div className="send">
        <img src="" alt="" />
        <input type="file" style={{display:'none'}} id='file'/>
        <label htmlFor="file"><img src="" alt="" /></label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input

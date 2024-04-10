import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo' >Stuvent</span>
      <div className="user">
        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8fHww" alt="" />
        <span>John Doe</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar

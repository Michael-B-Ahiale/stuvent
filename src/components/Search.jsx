import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find forum'/>
      </div>
      <div className="userchat">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww" alt="" />
        <div className="userchatinfo">
          <span>John Doe</span>
        </div>
      </div>
      
    </div>
  )
}

export default Search

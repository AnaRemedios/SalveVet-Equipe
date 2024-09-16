import React from 'react'
import NavBar from './NavBar.jsx'
import Search from './Search.jsx'
import Chats from './Chats.jsx'

function SideBarChat() {
  return (
    <div className='sidebarchat'>
      <NavBar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default SideBarChat
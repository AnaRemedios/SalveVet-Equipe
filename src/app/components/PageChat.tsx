import React from 'react'
import SideBarChat from './SideBarChat.jsx'
import Chat from './Chat.jsx'

function PageChat() {
  return (
    <div className='pageChat'>
      <div className='containerchat'>
        <SideBarChat/>
        <Chat/>
      </div>
    </div>
  )
}

export default PageChat
import React from 'react';
import SideBarVet from './SideBarVet.jsx';
import { LuBellRing } from "react-icons/lu";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import PageChat from './PageChat.jsx';
function ChatSection() {
  return (
    <div className='UserSection-container'>
      <SideBarVet />
      <main className='principalUser'>
        <header className='header-U'>
          <LuBellRing />
          <IoChatbubbleEllipsesOutline />
          <GoGear />
        </header>
        <section>
          <div className='dashb'>
            <h1>Chat</h1>
          </div>
          <PageChat/>
        </section>
      </main>
    </div>
  )
}

export default ChatSection
import React from 'react'
import ChatInput from './ChatInput'
import MessageList from './MessageList'

function HomePage() {
  return (
   <main>
    {/* MessageList */}

    <MessageList />

    {/* ChatInput */}

    <ChatInput />

   </main>
  )
}

export default HomePage
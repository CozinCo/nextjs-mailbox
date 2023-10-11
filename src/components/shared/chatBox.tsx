import React from 'react'
import { CardsChat } from '../cards/chat'
import { AuthContext } from '@/context/AuthContext'

const ChatBox = ({closeChatBox}:{ closeChatBox:AuthContext}) => {
    return (
        <div className="fixed bottom-0 right-0">
            <div className="w-80   flex flex-col">
                <CardsChat ctx={closeChatBox}/>
            </div>
        </div>
    )
}

export default ChatBox
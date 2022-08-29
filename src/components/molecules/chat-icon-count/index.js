import React from 'react'
import { IoChatbubbleOutline } from 'react-icons/io5'

function ChatIconCount({ count }) {
    return (
        <div>
            <IoChatbubbleOutline size={'24px'} />
            <span>{count}</span>
        </div>
    )
}

export default ChatIconCount

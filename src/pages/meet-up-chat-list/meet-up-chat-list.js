import React from 'react'
import MeetUpChatListTemp from './meet-up-chat-list-template'

function MeetUpChatList() {
    return <MeetUpChatListTemp />
}

export default MeetUpChatList

let mock = [
    {
        accountNm: '알림봇',
        msg: '지원자를 참여시키겠습니까?',
        time: '오전 01:33',
    },
    {
        accountNm: 'Kim',
        msg: '감사합니다.',
        time: '어제',
    },
]

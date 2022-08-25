import React from 'react'
import styled from 'styled-components'

const Time = styled.p`
    font-size: 13px;
    font-family: 'NotoSansKR';
    color: rgba(140, 140, 140, 1);
`

function ChatTime({ time }) {
    return <Time>{time}</Time>
}

export default ChatTime

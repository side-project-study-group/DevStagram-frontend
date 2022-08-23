import React from 'react'
import styled from 'styled-components'

const P = styled.p`
    font-size: 18px;
    font-family: 'RobotoBold';
    font-weight: 900;
    margin: 0;
`

function ChatAccountName({ name }) {
    return <P>{name}</P>
}

export default ChatAccountName

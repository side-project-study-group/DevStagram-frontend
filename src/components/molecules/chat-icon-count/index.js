import React from 'react'
import Vector from '../../../assets/icons/Vector.svg'
import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    align-items: center;
    img {
        width: 23px;
    }
    span {
        font-family: 'RobotoBold';
        margin-left: 3px;
        font-size: 15px;
    }
`

function ChatIconCount({ count }) {
    return (
        <Section>
            <img src={Vector} />
            <span>{0}</span>
        </Section>
    )
}

export default ChatIconCount

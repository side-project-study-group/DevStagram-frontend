import React from 'react'
import Vector from '../../../assets/icons/Vector.svg'
import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    align-items: center;
    img {
        width: 20px;
    }
    span {
        font-family: 'RobotoBold';
        margin-left: 3px;
        font-size: 15px;
    }
`

function CommentIconCount({ count }) {
    return (
        <Section>
            <img src={Vector} />
            <span>{count}</span>
        </Section>
    )
}

export default CommentIconCount

import React from 'react'
import { ReactComponent as Heart } from '../../../assets/icons/Heart.svg'
import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    align-items: center;
    span {
        font-family: 'RobotoBold';
        margin-left: 3px;
        font-size: 12px;
    }
`
const Icon = styled(Heart)`
    width: 18px;
    fill: ${(props) => props.bg};
`

function LikeIconCount({ count, isFilled, handleFill }) {
    const bg = isFilled ? '#e8554e' : 'transparent'
    return (
        <Section>
            <Icon bg={bg} onClick={() => handleFill(isFilled)} />
            <span>{count}</span>
        </Section>
    )
}

export default LikeIconCount

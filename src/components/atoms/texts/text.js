import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
    font-family: 'NotoSansKR';
    font-size: ${(props) =>
        props.size === 'large'
            ? '18px'
            : props.size === 'medium'
            ? '16px'
            : '12px'};
`

function Text({ children, size }) {
    return <StyledP size={size}>{children}</StyledP>
}

export default Text

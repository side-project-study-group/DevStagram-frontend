import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
    font-size: ${(props) =>
        props.size === 'large'
            ? '18px'
            : props.size === 'medium'
            ? '16px'
            : '14px'};
`

function Text({ value, size }) {
    return <StyledP size={size}>{value}</StyledP>
}

export default Text

import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
    font-family: 'Roboto';
    font-size: ${(props) => (props.size === 'big' ? '15px' : '12px')};
    margin: 10px 0;
    white-space: pre;
    mark {
        background-color: transparent;
        color: coral;
    }
`

function TextBox({ children, size, handleClick, text }) {
    return (
        <StyledP
            onClick={handleClick}
            size={size}
            dangerouslySetInnerHTML={{ __html: text }}
        >
            {children}
        </StyledP>
    )
}

export default TextBox

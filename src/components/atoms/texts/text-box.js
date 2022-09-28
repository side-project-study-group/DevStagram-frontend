import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
    font-family: 'Roboto';
    font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
    margin: 5px 0;
`

function TextBox({ children, size, handleClick }) {
    return (
        <StyledP onClick={handleClick} size={size}>
            {children}
        </StyledP>
    )
}

export default TextBox

import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    width: ${(props) => (props.width ? props.width : '100%')};
    height: 30px;
    border: 2px solid rgba(65, 64, 66, 1);
    border-radius: 5px;
    color: rgba(65, 64, 66, 1);
    padding: 0 5px;
    box-sizing: border-box;
    text-align: center;
    ::-webkit-inner-spin-button {
        opacity: 1;
    }
`

function Input({ name, value, type, width, handleChange, placeholder }) {
    return (
        <StyledInput
            name={name}
            value={value}
            type={type}
            width={width}
            onChange={handleChange}
            placeholder={placeholder}
        />
    )
}

export default Input

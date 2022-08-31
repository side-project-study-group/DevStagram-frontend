import React from 'react'
import styled from 'styled-components'

const SelectTag = styled.select`
    width: ${(props) => (props.width ? props.width : '100%')};
    height: 30px;
    border: 2px solid rgba(65, 64, 66, 1);
    border-radius: 5px;
    padding: 0 5px;
    text-align: center;
`

function Select({ options, width, name, value, handleChange }) {
    return (
        <SelectTag
            onChange={handleChange}
            width={width}
            name={name}
            value={value}
        >
            {options.map((option, i) => {
                return (
                    <option key={i} value={option}>
                        {option}
                    </option>
                )
            })}
        </SelectTag>
    )
}

export default Select

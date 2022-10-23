import React from 'react'
import styled from 'styled-components'

const SelectTag = styled.select`
    width: ${(props) => props.width};
    height: 30px;
    border: 2px solid rgba(65, 64, 66, 1);
    border-radius: 5px;
    padding: 0 5px;
    text-align: center;
`

function Select({ options, width = '100%', name, value, handleChange }) {
    return (
        <SelectTag
            width={width}
            name={name}
            value={value}
            onChange={handleChange}
        >
            {options.map((option, i) => {
                return (
                    <option
                        key={i}
                        value={option.value}
                        disabled={option.value === 'none'}
                    >
                        {option.text}
                    </option>
                )
            })}
        </SelectTag>
    )
}

export default Select

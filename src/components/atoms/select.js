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

function Select({ options, width }) {
    const OPTION_DEFAULT = '밋업의 종류를 골라주세요.'
    return (
        <SelectTag width={width}>
            {options.map((option, i) => {
                return (
                    <option
                        key={i}
                        className={'option_center'}
                        // disabled={option === OPTION_DEFAULT}
                        // hidden={option === OPTION_DEFAULT}
                    >
                        {option}
                    </option>
                )
            })}
        </SelectTag>
    )
}

export default Select

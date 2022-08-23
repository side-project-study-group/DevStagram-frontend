import React from 'react'
import styled from 'styled-components'
import dateCalculater from '../../../utils/dateCalculater'

const StyledP = styled.p`
    font-size: 12px;
    color: #808080;
`

function DateText({ date }) {
    return <StyledP>{dateCalculater(date)}</StyledP>
}

export default DateText

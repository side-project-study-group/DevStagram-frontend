import React from 'react'
import styled from 'styled-components'
import dateCalculater from '../../../utils/dateCalculater'

const Span = styled.span`
    font-size: 11px;
    color: #808080;
    font-family: 'NotoSansKR';
    color: #b9b9b9;
    padding-bottom: 5px;
`

function DateText({ date }) {
    return <Span>{dateCalculater(date)}</Span>
}

export default DateText

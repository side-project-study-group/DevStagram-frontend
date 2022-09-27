import React from 'react'
import styled from 'styled-components'
import dateCalculater from '../../../utils/dateCalculater'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    box-sizing: border-box;
    padding-right: 10px;
    padding-bottom: 3px;
`
const Span = styled.span`
    color: rgba(185, 185, 185, 1);
    font-size: 10px;
`

function TimeLine({ date }) {
    return (
        <Container>
            <Span>{dateCalculater(date)}</Span>
        </Container>
    )
}

export default TimeLine

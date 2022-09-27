import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
    width: 100%;
    display: flexbox;
    padding-top: 10px;
    font-weight: bold;
    h1 {
        font-family: 'NotoSansKR';
        font-size: 18px;
        margin: 0;
    }
`

function MeetUpTitle({ children }) {
    return (
        <Title>
            <h1>{children}</h1>
        </Title>
    )
}

export default MeetUpTitle

import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    font-weight: bold;
    font-family: 'NotoSansKR';
    font-size: ${(props) => (props.size === 'big' ? '18px' : '16px')};
    margin: 0;
`

function MeetUpTitle({ size, children }) {
    return <Title size={size}>{children}</Title>
}

export default MeetUpTitle

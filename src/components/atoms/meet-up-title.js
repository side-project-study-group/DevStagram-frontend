import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    font-weight: ${(props) => (props.size === 'big' ? '600' : '500')};
    font-family: 'NotoSansKR';
    font-size: ${(props) => (props.size === 'big' ? '16px' : '14px')};
    margin: 0;
`

function MeetUpTitle({ size, children }) {
    return <Title size={size}>{children}</Title>
}

export default MeetUpTitle

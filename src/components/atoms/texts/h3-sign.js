import React from 'react'
import styled from 'styled-components'

const H3 = styled.h3`
    width: 250px;
    height: auto;
    margin: 0 auto;
    padding: 5px;
    font-family: 'Noto Sans CJK KR';
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: rgba(65, 64, 66, 1);
    box-sizing: border-box;
`

function H3Tag({ sign }) {
    return <H3>{sign}</H3>
}

export default H3Tag

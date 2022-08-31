import React from 'react'
import styled from 'styled-components'

const P = styled.p`
    color: rgba(75, 100, 230, 1);
    font-family: 'Noto Sans CJK KR';
    font-weight: 500;
    font-size: 15px;
    text-align: right;
    line-height: 13px;
    margin: 0;
    cursor: pointer;
`

function LinkText({ text, handleClick }) {
    return <P onClick={handleClick}>{text}</P>
}

export default LinkText

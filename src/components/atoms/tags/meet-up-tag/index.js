import React from 'react'
import styled from 'styled-components'
import useMeetUpTag from './useMeetUpTag'

const Button = styled.button`
    height: 23px;
    color: white;
    font-family: 'NotoSansKR';
    width: 90px;
    margin-right: 5px;
    background-color: ${(props) => props.bgColor};
    border: 2px solid #414042;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

function MeetUpTag({ code, displayName = '', handleClick }) {
    const [bgColor, text] = useMeetUpTag(code, displayName)

    return (
        <Button onClick={handleClick} bgColor={bgColor} name={code}>
            {text}
        </Button>
    )
}

export default MeetUpTag

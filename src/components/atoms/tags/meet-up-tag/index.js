import React from 'react'
import styled from 'styled-components'
import useMeetUpTag from '../../../../hooks/useMeetUpTag'

const Button = styled.button`
    height: 24px;
    color: white;
    font-family: 'NotoSansKR';
    width: 100px;
    background-color: ${(props) => props.backgroundColor};
    border: 2px solid #414042;
    border-radius: 12px;
    display: flex;
    font-size: 14px;
    justify-content: center;
    align-items: center;
`

function MeetUpTag({ code, displayName = '', handleClick }) {
    const [bgColor, text] = useMeetUpTag(code, displayName)

    return (
        <Button onClick={handleClick} backgroundColor={bgColor} name={code}>
            {text}
        </Button>
    )
}

export default MeetUpTag

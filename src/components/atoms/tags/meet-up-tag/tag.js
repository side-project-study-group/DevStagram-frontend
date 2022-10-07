import React from 'react'
import styled from 'styled-components'
import useMeetUpTag from '../../../../hooks/useMeetUpTag'

const Button = styled.button`
    height: 16px;
    color: white;
    font-family: 'NotoSansKR';
    width: 80px;
    background-color: ${(props) => props.backgroundColor};
    border: 2px solid #414042;
    border-radius: 11px;
    display: flex;
    font-size: 13px;
    justify-content: center;
    align-items: center;
    box-sizing: content-box;
`

function MeetUpTag({ code, displayName = '', handleClick }) {
    const [bgColor, text] = useMeetUpTag(code, displayName)

    return (
        <Button
            onClick={handleClick}
            backgroundColor={bgColor}
            name={code?.toString()}
        >
            {text}
        </Button>
    )
}

export default MeetUpTag

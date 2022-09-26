import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    height: 23px;
    color: white;
    font-family: 'NotoSansKR';
    width: 90px;
    margin-right: 5px;
    background-color: ${(props) =>
        props.name === 'ALL'
            ? '#F05550'
            : props.name === 'PROJECT'
            ? '#FA9637'
            : props.name === 'STUDY'
            ? '#28AF73'
            : '#A06EEB'};
    border: 2px solid #414042;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

function MeetUpCategroyTag({ code, text, handleClick }) {
    return (
        <Button onClick={handleClick} name={code}>
            {text}
        </Button>
    )
}

export default MeetUpCategroyTag

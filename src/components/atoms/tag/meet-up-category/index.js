import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    height: 23px;
    color: white;
    font-family: 'NotoSansKR';
    width: 90px;
    margin-right: 5px;
    background-color: ${(props) =>
        props.text === '전체'
            ? '#F05550'
            : props.text === '프로젝트'
            ? '#FA9637'
            : props.text === '스터디'
            ? '#28AF73'
            : '#A06EEB'};
    border: 2px solid #414042;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 13px;
`

function MeetUpCategroyTag({ text }) {
    return <Button text={text}>{text}</Button>
}

export default MeetUpCategroyTag

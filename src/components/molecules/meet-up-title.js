import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Title = styled.div`
    width: 100%;
    display: flexbox;
    margin: 10px 0;
    font-weight: bold;
    div {
        padding: 0 10px;
        margin-right: 5px;
        font-size: 17px;
        width: fit-content;
        display: inline-block;
        background-color: ${(props) =>
            props.isRecruiting ? '#4b7fff' : '#D9D9D9'};
        color: white;
        font-family: 'NotoSansKRBold';
        border-radius: 5px;
        border: 1px solid #414042;
    }
    span {
        font-family: 'NotoSansKR';
        font-size: 16px;
        cursor: pointer;
    }
`

function MeetUpTitle({ isRecruiting, title }) {
    const navigate = useNavigate()
    return (
        <Title
            isRecruiting={isRecruiting}
            onClick={() => navigate('/meet-up-detail')}
        >
            <div>{isRecruiting ? '모집중' : '마감'}</div>
            <span>{title}</span>
        </Title>
    )
}

export default MeetUpTitle

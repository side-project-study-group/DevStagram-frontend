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
        background-color: #4b7fff;
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

function MeetUpTitle() {
    const navigate = useNavigate()
    return (
        <Title onClick={() => navigate('/meet-up-detail')}>
            <div>모집중</div>
            <span>[서울] 반응형 웹 토이프로젝트 백엔드 2명 구합니다.</span>
        </Title>
    )
}

export default MeetUpTitle

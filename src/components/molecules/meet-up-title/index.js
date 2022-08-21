import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import GatherStatusTag from '../../atoms/tag/gather-status'

const Title = styled.div`
    width: 100%;
    display: flexbox;
    margin: 10px 0;
    font-weight: bold;
    span {
        font-family: 'NotoSansKR';
        font-size: 16px;
        cursor: pointer;
    }
`

function MeetUpTitle({ text }) {
    const navigate = useNavigate()
    return (
        <Title onClick={() => navigate('/meet-up-detail')}>
            <GatherStatusTag title={'모집중'} />
            <span>{text}</span>
        </Title>
    )
}

export default MeetUpTitle

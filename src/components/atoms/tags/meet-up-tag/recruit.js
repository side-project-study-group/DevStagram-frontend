import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Tag = styled.div`
    width: 60px;
    font-size: 14px;
    color: #ffffff;
    height: 20px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    background-color: ${(props) => props.bg};
    border: 2px solid #414042;
    padding: 1px;
    font-weight: 600;
    font-family: 'NotoSansKR';
    box-sizing: content-box;
    letter-spacing: 1px;
`

function MeetUpRecruitTag({ status }) {
    const [{ text, bgColor }, setState] = useState({ text: '', bgColor: '' })

    useEffect(() => {
        status
            ? setState({ text: '모집중', bgColor: '#4B64E6' })
            : setState({ text: '마감', bgColor: '#D9D9D9' })
    }, [status])

    return <Tag bg={bgColor}>{text}</Tag>
}

export default MeetUpRecruitTag

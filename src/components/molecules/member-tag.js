import React from 'react'
import styled from 'styled-components'
import Group from '../../assets/icons/Group.svg'

const MemberContainer = styled.div`
    display: flex;
    font-family: 'NotoSansKR';
    color: #4b64e6;
    margin-right: 10px;
    span {
        font-size: 13px;
        padding-top: 3px;
    }
`

const Img = styled.img`
    width: 30px;
    margin-right: 5px;
`

function MemberTag({ maxCount, joinCount }) {
    return (
        <MemberContainer>
            <Img src={Group} />
            <span>
                {joinCount} / {maxCount}명 참여
            </span>
        </MemberContainer>
    )
}

export default MemberTag

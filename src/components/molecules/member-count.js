import React from 'react'
import styled from 'styled-components'
import Group from '../../assets/icons/Group.svg'
import EmptyGroup from '../../assets/icons/EmptyGroup.svg'

const MemberContainer = styled.div`
    display: flex;
    font-family: 'NotoSansKR';
    color: ${(props) =>
        props.type === 'join' ? '#4b64e6' : 'rgba(65, 64, 66, 0.6)'};
    margin-right: 10px;
    span {
        font-size: 12px;
        padding-top: 3px;
    }
`

const Img = styled.img`
    width: 25px;
    margin-right: 5px;
`

function MemberCount({ type, maxCount, count }) {
    return (
        <>
            {type === 'join' ? (
                <MemberContainer type={type}>
                    <Img src={Group} />
                    <span>
                        {count + 1} / {maxCount}명 참여
                    </span>
                </MemberContainer>
            ) : (
                <MemberContainer type={type}>
                    <Img src={EmptyGroup} />
                    <span>대기인원 {count}명</span>
                </MemberContainer>
            )}
        </>
    )
}

export default MemberCount

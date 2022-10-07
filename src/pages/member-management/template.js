import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import LeaderProfileImg from '../../components/atoms/leader-profile'
import ManageMemberList from '../../components/organisms/manage-member-list'

const Main = styled.main`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 480px;
    box-sizing: border-box;
    padding: 0 10px;
    background-color: #fafaf8; ;
`

const LeaderBox = styled.section`
    display: flex;
    align-items: flex-end;
    padding: 20px 0;
`
const LeaderTextContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    p {
        margin: 5px 0 0 0;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 16px;
        color: #414141;
    }
`
const LeaderTag = styled.div`
    background: #4b64e6;
    border: 2px solid #414042;
    border-radius: 5px;
    text-align: center;
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 15px;
    color: #ffffff;
    width: 80px;
    letter-spacing: 1px;
`
function MemberManagementTemp() {
    const { state } = useLocation()

    return (
        <Main>
            {!state?.status && (
                <LeaderBox>
                    <LeaderProfileImg size={'big'} />
                    <LeaderTextContainer>
                        <LeaderTag>Leader</LeaderTag>
                        <p>{state?.leaderId}</p>
                    </LeaderTextContainer>
                </LeaderBox>
            )}
            <ManageMemberList
                status={state?.status}
                members={state?.memberId}
                type={'join'}
            />
            {!state?.isOpenYn && (
                <ManageMemberList
                    status={state?.status}
                    members={state?.pendingId}
                    type={'pending'}
                />
            )}
        </Main>
    )
}

export default MemberManagementTemp

let mock = ['Arthur', 'Gladys']
let mockPending = ['Mitchell', 'Arlene', 'Angel', 'Shawn']

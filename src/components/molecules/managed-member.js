import React from 'react'
import styled from 'styled-components'
import UserProfile from './user-profile'
import SMS from '../../assets/icons/SMS.svg'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const ManageButton = styled.button`
    padding: 2px 10px;
    font-size: 11px;
    font-weight: ${(props) => (props.type === 'join' ? 'bold' : '500')};
    background-color: ${(props) =>
        props.type === 'join' ? '#fab923' : '#4B64E6'};
    color: ${(props) => (props.type === 'join' ? '#414042' : '#FFFFFF')};

    border: 1px solid #414042;
    border-radius: 20px;
    font-family: 'NotoSansKR';
`

function ManagedMember({ id, type, status }) {
    return (
        <Container>
            <UserProfile size={'big'} id={id} />
            <ButtonContainer>
                <img src={SMS} />
                {status && (
                    <ManageButton type={type}>
                        {type === 'join' ? '내보내기' : '초대하기'}
                    </ManageButton>
                )}
            </ButtonContainer>
        </Container>
    )
}

export default ManagedMember

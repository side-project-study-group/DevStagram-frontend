import React from 'react'
import styled from 'styled-components'
import ManagedMember from '../molecules/managed-member'

const Section = styled.section`
    width: 100%;
    padding: 20px 10px;
    background-color: #ffffff;
    border: 1px solid rgba(65, 64, 66, 0.2);
    border-radius: 0px 0px 15px 15px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 15px;
`

const Roof = styled.div`
    width: 100%;
    background-color: ${(props) =>
        props.type === 'join' ? '#4b64e6' : '#8C8C8C'};
    border: 1px solid rgba(65, 64, 66, 0.2);
    border-radius: 15px 15px 0px 0px;
    box-sizing: border-box;
    font-family: 'Roboto';
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    padding: 5px 0 3px 15px;
    margin-top: 25px;
`

function ManageMemberList({ status, members, type }) {
    return (
        <>
            <Roof type={type}>{type === 'join' ? '멤버' : '대기자'}</Roof>
            <Section>
                {members?.map((member) => (
                    <ManagedMember
                        status={status}
                        key={member}
                        id={member}
                        type={type}
                    />
                ))}
            </Section>
        </>
    )
}

export default ManageMemberList

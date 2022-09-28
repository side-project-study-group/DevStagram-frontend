import React from 'react'
import styled from 'styled-components'
import ProfileImg from '../atoms/profile-img'

const Profile = styled.div`
    display: flex;
    align-items: center;
    span {
        font-family: 'RobotoBold';
        font-size: ${(props) => (props.size === 'big' ? '18px' : '14px')};
        font-weight: 700;
        color: #414042;
    }
`

function UserProfile({ size, id }) {
    return (
        <Profile size={size}>
            <ProfileImg size={size} />
            <span>{id}</span>
        </Profile>
    )
}

export default UserProfile

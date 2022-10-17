import React from 'react'
import styled from 'styled-components'
import ProfileImg from '../atoms/profile-img'

const Profile = styled.div`
    display: flex;
    align-items: center;
    span {
        font-family: 'RobotoBold';
        font-size: ${(props) =>
            props.size === 'big'
                ? '18px'
                : props.size === 'medium'
                ? '15px'
                : '12px'};
        font-weight: 700;
        color: #414042;
    }
`

function UserProfile({ size, id }) {
    return (
        <Profile size={size}>
            <ProfileImg size={size} src={id} />
            <span>{id}</span>
        </Profile>
    )
}

export default UserProfile

import React from 'react'
import styled from 'styled-components'
import ProfileImg from '../atoms/profile-tag/img'

const Profile = styled.div`
    display: flex;
    margin-top: 5px;
    align-items: center;
    span {
        font-family: 'RobotoBold';
        font-size: ${(props) => (props.size === 'big' ? '20px' : '16px')};
        font-weight: 700;
        color: #414042;
    }
`

function ProfileTag({ size, id }) {
    return (
        <Profile size={size}>
            <ProfileImg size={size} />
            <span>{id}</span>
        </Profile>
    )
}

export default ProfileTag

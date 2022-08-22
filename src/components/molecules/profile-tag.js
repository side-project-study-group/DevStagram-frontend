import React from 'react'
import styled from 'styled-components'
import ProfileImg from '../atoms/profile-img/meet-up/meet-up-profile-img'

const Profile = styled.div`
    display: flex;
    margin-top: 5px;
    span {
        font-family: 'RobotoBold';
        font-size: ${(props) => (props.size === 'big' ? '20px' : '15px')};
    }
`

function ProfileTag({ size }) {
    return (
        <Profile size={size}>
            <ProfileImg size={size} />
            <span>yday1223</span>
        </Profile>
    )
}

export default ProfileTag

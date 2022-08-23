import React from 'react'
import ProfileImgNicknameDesContainer from '../molecules/profile-header-img-nickname-container'
import Tech from '../atoms/tags/tech/tech'
import Urls from '../atoms/texts/urls'
import styled from 'styled-components'

function ProfileHeader() {
    return (
        <>
            <ProfileImgNicknameDesContainer title={'Albert Flores'} />
            <Tech />
            <Urls />
        </>
    )
}
export default ProfileHeader

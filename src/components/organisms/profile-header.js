import React from 'react'
import ProfileImgNicknameDesContainer from '../molecules/profile-header-img-nickname-container'
import Tech from '../atoms/tags/tech/tech'
import Urls from '../atoms/texts/urls'
import styled from 'styled-components'

function ProfileHeader({
    nickname,
    description,
    tags,
    github,
    blog,
    handleProfile,
}) {
    return (
        <>
            <ProfileImgNicknameDesContainer
                title={nickname}
                description={description}
                handleProfile={handleProfile}
            />
            {tags &&
                tags.map((tag, index) => {
                    return <Tech key={index} name={tag} tech={tag} />
                })}

            <Urls github={github} blog={blog} />
        </>
    )
}
export default ProfileHeader

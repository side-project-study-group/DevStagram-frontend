import React from 'react'
import MyProfileMeetUpTemp from './my-profile-template'
import useProfile from '../../hooks/useProfile'
import useCategory from '../../hooks/useCategory'
import { useNavigate } from 'react-router-dom'

function MyProfileMeetUp() {
    const navigate = useNavigate()
    const [profile] = useProfile({
        name: '',
        nickname: '',
        password: '',
        pictureUrl: '',
        description: '',
        email: '',
        github: '',
        blog: null,
        tags: [],
        provider: 'app',
    })

    const [isMeetup, handleMeetup, handlePost, meetups, posts] =
        useCategory(true)

    const handleProfile = () => {
        navigate('/edit-my-profile')
    }

    return (
        <MyProfileMeetUpTemp
            nickname={profile.nickname}
            description={profile.description}
            tags={profile.tags}
            github={profile.github}
            blog={profile.blog}
            isMeetup={isMeetup}
            handleMeetup={handleMeetup}
            handlePost={handlePost}
            meetups={meetups}
            posts={posts}
            handleProfile={handleProfile}
        />
    )
}

export default MyProfileMeetUp

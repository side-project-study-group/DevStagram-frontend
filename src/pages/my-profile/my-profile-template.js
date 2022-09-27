import React from 'react'
import ProfileHeader from '../../components/organisms/profile-header'
import ProfileMeetUpPostBtns from '../../components/molecules/profile-meetup-post-btns'
import checkImg from '../../assets/imgs/check.png'
import styled from 'styled-components'
import Post from '../../components/organisms/post'
import MeetUpPostBox from '../../components/organisms/meet-up-post-box'

const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 480px;
    margin: 0 auto;
    padding: 0 16px;
    box-sizing: border-box;
`

const BlueHeader = styled.div`
    background-color: #4b64e6;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    padding: 0 -10px;
    img {
        width: 100%;
        background: center;
        vertical-align: top;
    }
`

function MyProfileMeetUpTemp({
    nickname,
    description,
    tags,
    github,
    blog,
    isMeetup,
    handleMeetup,
    handlePost,
    meetups,
    posts,
    handleProfile,
}) {
    return (
        <>
            <BlueHeader>
                <img src={checkImg}></img>
            </BlueHeader>
            <Container>
                <ProfileHeader
                    nickname={nickname}
                    description={description}
                    tags={tags}
                    github={github}
                    blog={blog}
                    handleProfile={handleProfile}
                />
                <ProfileMeetUpPostBtns
                    isMeetup={isMeetup}
                    handleMeetup={handleMeetup}
                    handlePost={handlePost}
                />
                {isMeetup
                    ? meetups ??
                      meetups.map((ele, index) => {
                          return <MeetUpPostBox key={index} />
                      })
                    : posts ??
                      posts.map((ele, index) => {
                          return <Post key={index} />
                      })}
            </Container>
        </>
    )
}

export default MyProfileMeetUpTemp

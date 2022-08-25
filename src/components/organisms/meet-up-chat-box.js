import React from 'react'
import styled from 'styled-components'
import ChatAccountName from '../atoms/chat-account-name'
import ChatContents from '../molecules/chat-contents'
import ProfileImg from '../atoms/profile-img/meet-up'
import ChatTime from '../atoms/chat-time'

const Container = styled.div`
    width: 100%;
    display: inline-flex;
    height: 90px;
    padding: 10px;
    box-sizing: border-box;
`

const StatusBar = styled.div`
    width: 10px;
    background-color: rgba(75, 100, 230, 1);
    border: 1.5px solid rgba(65, 64, 66, 1);
    border-right: none;
`

const StatusBall = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: auto 10px;
    background-color: rgba(75, 100, 230, 1);
    border: 1.5px solid rgba(65, 64, 66, 1);
    /* box-sizing: content-box; */
`

const ChatBoxContainer = styled.div`
    flex-grow: 1;
    background-color: rgba(255, 255, 255, 1);
    border: 1.5px solid rgba(65, 64, 66, 1);
    display: flex;
    border-radius: 0 10px 10px 0;
`

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: auto 0;
    margin-left: 15px;
`

const ChatCotainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5px;
    gap: 5px;
`

const TimeContainer = styled.div`
    margin-left: auto;
    margin-right: 10px;
`

function MeetUpChatBox({ state }) {
    return (
        <Container>
            {state !== 'delete' && state !== 'popup' ? (
                <StatusBar />
            ) : (
                <StatusBall />
            )}
            <ChatBoxContainer>
                <ProfileContainer>
                    <ProfileImg size={'big'} />
                </ProfileContainer>
                <ChatCotainer>
                    <ChatAccountName name={'Jane Cooper'} />
                    <ChatContents msg={'감사합니다'} />
                </ChatCotainer>
                <TimeContainer>
                    <ChatTime time={'오후 02:30'} />
                </TimeContainer>
            </ChatBoxContainer>
        </Container>
    )
}

export default MeetUpChatBox

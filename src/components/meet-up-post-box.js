import React from 'react'
import styled from 'styled-components'
import MemberTag from './molecules/member-tag'
import MeetUpTitle from './molecules/meet-up-title'
import TextBox from './atoms/text-box'
import ProfileTag from './molecules/profile-tag'
import { ImLock } from 'react-icons/im'
import ProfileImg from './atoms/profile-img'
import TimeLine from './atoms/time-line'
import MeetUpCategroyTag from './atoms/meet-up-category-tag'

const Section = styled.div`
    margin-bottom: 10px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    background-color: rgba(255, 255, 255, 1);
    border: 2px solid #24231f;
    border-radius: 10px;
    max-width: 480px;
    padding: 10px;
`

const Header = styled.header`
    display: flex;
`

const Wrapper = styled.div`
    width: 100%;
`

const EditBtn = styled.div`
    position: absolute;
    right: 10px;
    .edit_icon {
        width: 25px;
        height: 25px;
    }
`

const Footer = styled.footer`
    width: 100%;
    display: flex;
`

const Container = styled.div`
    display: flex;
    align-items: center;
`

function MeetUpPostBox({ children, size }) {
    return (
        <Section>
            <Wrapper>
                <Header>
                    <ImLock style={{ color: 'green' }} />
                    <MeetUpCategroyTag text="프로젝트" />
                </Header>
                <Container>
                    <ProfileTag size={size} />
                    <TimeLine />
                </Container>
                <EditBtn>{children}</EditBtn>
                <MeetUpTitle />
                <TextBox />
                <Footer>
                    <MemberTag />
                    <ProfileImg size="small" />
                    <ProfileImg size="small" />
                    <ProfileImg size="small" />
                </Footer>
            </Wrapper>
        </Section>
    )
}

export default MeetUpPostBox

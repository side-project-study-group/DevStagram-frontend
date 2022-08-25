import React from 'react'
import styled from 'styled-components'
import MemberTag from './molecules/member-tag'
import MeetUpTitle from './molecules/meet-up-title'
import TextBox from './atoms/texts/text-box'
import ProfileTag from './molecules/profile-tag'
import Lock from '../assets/icons/Lock.svg'
import TimeLine from './atoms/texts/time-line'
import { useLocation } from 'react-router-dom'
import MeetUpCategoryTag from './atoms/tags/meet-up-category/meet-up-category'
import ProfileImg from './atoms/profile-images/meet-up/meet-up-profile-img'

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
    align-items: center;
`

const Img = styled.img`
    width: 18px;
    margin-right: 10px;
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
    justify-content: ${(props) =>
        props.path === '/' ? 'space-between' : 'flex-start'};
    margin-top: 10px;
`

const Container = styled.div`
    display: flex;
    align-items: center;
`

function MeetUpPostBox({ children, size }) {
    const location = useLocation()

    return (
        <Section>
            <Wrapper>
                <Header>
                    <Img src={Lock} />
                    <MeetUpCategoryTag text="프로젝트" />
                </Header>
                {location.pathname !== '/' && (
                    <Container>
                        <ProfileTag size={size} />
                        <TimeLine />
                    </Container>
                )}
                <EditBtn>{children}</EditBtn>
                <MeetUpTitle
                    text={'[서울] 반응형 웹 토이프로젝트 백엔드 2명 구합니다.'}
                />
                <TextBox />
                <Footer path={location.pathname}>
                    <MemberTag />
                    {location.pathname === '/' ? (
                        <ProfileTag size={'small'} />
                    ) : (
                        <>
                            <ProfileImg size="small" />
                            <ProfileImg size="small" />
                            <ProfileImg size="small" />
                        </>
                    )}
                </Footer>
            </Wrapper>
        </Section>
    )
}

export default MeetUpPostBox
